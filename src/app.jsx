import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';

import { Login } from './login/login';
import { Punch } from './punch/punch';
import { History } from './history/history';
import { Admin } from './admin/admin';
import { Help } from './help/help';

export default function App() {
  return (
    <BrowserRouter>
        <header className="flex flex-row justify-between items-center">
            <div className="flex-0"><a href="/"><img src="/images/logo.png" width="150" alt="Time Ninja Logo" /></a></div>
            <nav className="flex flex-1 flex-row gap-4">
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/">Login</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/punch">Punch</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/history">History</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/admin">Admin</NavLink></div>
                <div className="flex-1 text-center"><NavLink className="nav-link" to="/help">Help</NavLink></div>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Login />} />
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
            <div id="footer-chuck-norris">Chuck Norris Joke provided by <a className="underline" href="https://api.chucknorris.io/">Chuck Norris API</a>: Some really funny joke will go here...</div>
        </footer>
    </BrowserRouter>
  )
}
function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }