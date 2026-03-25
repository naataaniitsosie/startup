const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');


const authCookieName = 'token';

// The scores and users are saved in memory and disappear whenever the service is restarted.
let punches = {};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Enable the trust proxy setting (for locations)
app.set('trust proxy', true);

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    return res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  return res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    await DB.updateUserRemoveAuth(user);
  }
  res.clearCookie(authCookieName);
  return res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  req.user = user
  if (user) {
    next();
  } else {
    return res.status(401).send({ msg: 'Unauthorized' });
  }
};

// PutPunch
apiRouter.put('/punch', verifyAuth, async (req, res) => {
  const { user } = req
  const { email } = user
  const punchData = {
    ...req.body,
    ip: req.ip,
    email,
  };

  await DB.addPunch(punchData)
  return res.status(200).send({ success: true });
})

// GetLatestPunch
apiRouter.get('/punch/latest', verifyAuth, async (req, res) => {
  const { user } = req
  const { email } = user

  const latestPunch = await DB.getLatestPunchForUser(email);
  if (latestPunch) {
    return res.status(200).send({ latestPunch });
  }

  return res.status(404).send("not found");
})

// Get Punch History
apiRouter.get('/punch/history', verifyAuth, async (req, res) => {
  const history = await DB.getPunchHistory();  
  return res.status(200).send({ history });
})

// Get Admin Stats
apiRouter.get('/punch/admin', verifyAuth, async (_req, res) => {
  const history = await DB.getPunchHistory();
  const stats = computeAdminStats(history);
  return res.status(200).send({ stats });
})

function computeAdminStats(input) {
  // get all punches for a user
  const punchesForUser = input.reduce((acc, punch) => {
    if (!acc[punch.email]) {
      acc[punch.email] = []
    }
    acc[punch.email].push(punch)
    return acc
  }, {})

  // for each user, compute totals
  const data = []
  for (const [email, userPunches] of Object.entries(punchesForUser)) {
    let periodTotalHours = 0
    let ytdTotalHours = 0
    let previousPunch = null
    for (const punch of userPunches) {
       if (punch.status === "OFF" && previousPunch) {
        const milliseconds = new Date(punch.time).getTime() - new Date(previousPunch.time).getTime()
        periodTotalHours += milliseconds / (1000 * 60 * 60); // convert to hours
        ytdTotalHours += milliseconds / (1000 * 60 * 60); // convert to hours
       } else if (punch.status === "ON") {
        previousPunch = punch
       }        
    }
    data.push({
      name: email,
      periodTotal: periodTotalHours,
      ytdTotal: ytdTotalHours,
    })
  }
  return data
}

// Default error handler
app.use(function (err, req, res, next) {
  return res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  return res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
