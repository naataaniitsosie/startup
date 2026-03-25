const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('timeninja');
const userCollection = db.collection('user');
const punchCollection = db.collection('punch');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function updateUserRemoveAuth(user) {
  await userCollection.updateOne({ email: user.email }, { $unset: { token: 1 } });
}

async function addPunch(punch) {
  return punchCollection.insertOne(punch);
}

async function getPunchHistory() {
  const options = {
    sort: { timestamp: -1 },
  }
  const cursor = punchCollection.find({}, options);
  return cursor.toArray();
}

async function getLatestPunchForUser(email) {
  const options = {
    sort: { timestamp: -1 },
  }
  const cursor = punchCollection.find({ email }, options);
  return cursor.next();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  updateUserRemoveAuth,
  addPunch,
  getPunchHistory,
  getLatestPunchForUser
};
