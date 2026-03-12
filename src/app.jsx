import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';

import { Login } from './login/login';
import { Punch } from './punch/punch';
import { History } from './history/history';
import { Admin } from './admin/admin';
import { Help } from './help/help';

import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = useState(userName ? AuthState.Authenticated : AuthState.Unauthenticated);
  const [chuckNorrisJoke, setChuckNorrisJoke] = useState("Loading chuck norris joke...");

  useEffect(() => {
    const getJoke = async () => {
      try {
        // only do food because others might have inappropriate jokes...
        const res = await fetch('https://api.chucknorris.io/jokes/random?category=food');
        const data = await res.json();
        setChuckNorrisJoke(data.value);
      } catch (error) {
        setChuckNorrisJoke("Error getting Chuck Norris joke. I'm sorry :(")
      }
    }

    getJoke();
    const intervalId = setInterval(getJoke, 30000);
    return () => {
        clearInterval(intervalId)
    }
  }, []);


  return (
    <BrowserRouter>
        <header className="flex flex-row justify-between items-center">
            <div className="flex-0"><a href="/"><img src="/images/logo.png" width="150" alt="Time Ninja Logo" /></a></div>
            {authState === AuthState.Authenticated && <nav className="flex flex-1 flex-row gap-4">
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/">Login</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/punch">Punch</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/history">History</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/admin">Admin</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/help">Help</NavLink></div>
            </nav>}
        </header>
        <Routes>
            <Route
                path="/"
                element={<Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                        setAuthState(authState);
                        setUserName(userName);
                    }}
                />}
            />
            <Route path="/punch" element={<Punch />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/help" element={<Help />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className="m-5 mt-20 text-center">
            <div><a className="underline" href="https://github.com/naataaniitsosie/startup">GitHub</a></div>
            <div>Naataanii Tsosie - CS 260</div>
            <div>Time Ninja - <span>Copyright 2026</span></div>
            <div id="footer-chuck-norris">Chuck Norris Joke provided by <a className="underline" href="https://api.chucknorris.io/">Chuck Norris API</a>: {chuckNorrisJoke}</div>
        </footer>
    </BrowserRouter>
  )
}
function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }