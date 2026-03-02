import React from 'react';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="m-5 flex flex-col items-center">
      <h2 className="text-4xl m-5">Welcome to Time Ninja</h2>
      {authState === AuthState.Unauthenticated &&
        <Unauthenticated userName={userName} onLogin={(loginUserName) => {
          onAuthChange(loginUserName, AuthState.Authenticated)
        }}
        />}
    </main>
  );
}