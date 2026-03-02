import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';

import { Login } from './login/login';
import { Punch } from './punch/punch';
import { History } from './history/history';
import { Admin } from './admin/admin';
import { Help } from './help/help';

import { AuthState } from './login/authState';

const MOCK_CHUCK_NORRIS_JOKES = [
    {"categories":[],"created_at":"2020-01-05 13:42:21.455187","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"SLcmIDDlT2ObeWHBq8tMqQ","updated_at":"2020-01-05 13:42:21.455187","url":"https://api.chucknorris.io/jokes/SLcmIDDlT2ObeWHBq8tMqQ","value":"Hulk is strong, but Chuck Norris is STRONG."},
    {"categories":["sport"],"created_at":"2020-01-05 13:42:19.576875","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"qyqtoof0t66xhmtmfjurwg","updated_at":"2020-01-05 13:42:19.576875","url":"https://api.chucknorris.io/jokes/qyqtoof0t66xhmtmfjurwg","value":"Chuck Norris has the greatest Poker-Face of all time. He won the 1983 World Series of Poker, despite holding only a Joker, a Get out of Jail Free Monopoloy card, a 2 of clubs, 7 of spades and a green #4 card from the game UNO."},
    {"categories":["sport"],"created_at":"2020-01-05 13:42:19.576875","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"tvrzu4lzrn-b6q0tzaa-ba","updated_at":"2020-01-05 13:42:19.576875","url":"https://api.chucknorris.io/jokes/tvrzu4lzrn-b6q0tzaa-ba","value":"There are no steroids in baseball. Just players Chuck Norris has breathed on."},
]

export default function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = useState(userName ? AuthState.Authenticated : AuthState.Unauthenticated);
  const [chuckNorrisJoke, setChuckNorrisJoke] = useState("Loading chuck norris joke...");

  useEffect(() => {
    const getJoke = () => {
      // MOCKED BACKEND CALL TO GET A CHUCK NORRIS JOKE
      const i = Math.random() * MOCK_CHUCK_NORRIS_JOKES.length;
      const index = Math.floor(i);
      setChuckNorrisJoke(MOCK_CHUCK_NORRIS_JOKES[index].value);
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