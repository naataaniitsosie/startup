import React, { useState } from "react";

export function Unauthenticated(props) {
    const [userName, setUserName] = useState(props.userName);
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

    const isDisabled = !userName || !password
    return (
      <>
        <div>
          <div>Username</div>
          <input type="text" className="text-black rounded-md p-2" placeholder="your@email.com" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className="mt-5">
          <div>Password</div>
          <input type="password" className="text-black rounded-md p-2" placeholder="password" onChange={e => setPassword(e.target.value)} />
        </div>
        {displayError && <div className="text-red-500 mt-5">{displayError}</div>}
        <div className="flex flex-row gap-5 mt-9">
          <button
            className={`ninja-button text-2xl p-2 rounded-md ${isDisabled ? "disabled" : ""}`}
            onClick={() => loginUser()}
            disabled={isDisabled}
          >
            Login
          </button>
          <button
            className={`ninja-button text-2xl p-2 rounded-md ${isDisabled ? "disabled" : ""}`}
            onClick={() => createUser()}
            disabled={isDisabled}
          >
            Create
          </button>
        </div>
      </>
    )
}