import React, { useState } from "react";

export function Unauthenticated(props) {
    const [userName, setUserName] = useState(props.userName);
    const [password, setPassword] = useState('');
    
    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
        console.log("User logged in")
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
        console.log("User created")
    }

    return (
      <div className="flex flex-col items-center">
        <div>
          <div>Username</div>
          <input type="text" className="text-black rounded-md p-2" placeholder="your@email.com" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className="mt-5">
          <div>Password</div>
          <input type="password" className="text-black rounded-md p-2" placeholder="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-row gap-5 mt-9">
          <button
            type="submit"
            className="ninja-button text-2xl p-2 rounded-md"
            onClick={() => loginUser()}
            disabled={!userName || !password}
          >
            Login
          </button>
          <button
            type="submit"
            className="ninja-button text-2xl p-2 rounded-md"
            onClick={() => createUser()}
            disabled={!userName || !password}
          >
            Create
          </button>
        </div>
      </div>
    )
}