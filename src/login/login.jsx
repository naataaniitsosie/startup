import React from 'react';

export function Login() {
  return (
    <main className="m-5 flex flex-col items-center">
      <h2 className="text-4xl m-5">Welcome to Time Ninja</h2>
      <form method="get" action="punch.html" className="flex flex-col items-center">
        <div>
          <div>Username</div>
          <input type="text" className="text-black rounded-md p-2" placeholder="your@email.com"/>
        </div>
        <div className="mt-5">
          <div>Password</div>
          <input type="password" className="text-black rounded-md p-2" placeholder="password" />
        </div>
        <div className="flex flex-row gap-5 mt-9">
          <button type="submit" className="ninja-button text-2xl p-2 rounded-md">Login</button>
          <button type="submit" className="ninja-button text-2xl p-2 rounded-md">Create</button>
        </div>
      </form>
    </main>
  );
}