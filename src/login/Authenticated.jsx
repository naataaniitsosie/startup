import React from 'react';

export function Authenticated({ userName, onLogout }) {
  function logout() {
    localStorage.removeItem('userName');
    onLogout();
  }

  return (
    <>
      <div>{userName}</div>
      <button className="ninja-button mt-4 text-2xl p-2 rounded-md" onClick={() => logout()}>
        Log Out
      </button>
    </>
  );
}
