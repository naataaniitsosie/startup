import React from 'react';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="m-5 flex flex-col items-center">
      <h2 className="text-4xl m-5">Welcome to Time Ninja</h2>
      <div className="flex flex-col items-center">
        {authState === AuthState.Unauthenticated &&
          <Unauthenticated userName={userName} onLogin={(loginUserName) => {
            onAuthChange(loginUserName, AuthState.Authenticated)
          }}
          />}
        {authState === AuthState.Authenticated &&
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}/>
        }
      </div>
    </main>
  );
}