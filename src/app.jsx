import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body">
    <header class="flex flex-row justify-between items-center">
        <div class="flex-0"><a href="/"><img src="logo.png" width="150" alt="Time Ninja Logo" /></a></div>
        <nav class="flex flex-1 flex-row gap-4">
            <div class="flex-1 text-center"><a href="/">Home</a></div>
            <div class="flex-1 text-center"><a href="punch.html">Punch</a></div>
            <div class="flex-1 text-center"><a href="history.html">History</a></div>
            <div class="flex-1 text-center"><a href="admin.html">Admin</a></div>
            <div class="flex-1 text-center"><a href="help.html">Help</a></div>
        </nav>
    </header>
    <main>App components go here</main>
    <footer class="m-5 mt-20 text-center">
        <div><a class="underline" href="https://github.com/naataaniitsosie/startup">GitHub</a></div>
        <div>Naataanii Tsosie - CS 260</div>
        <div>Time Ninja - <span>Copyright 2026</span> </div>
        <div id="footer-chuck-norris">Chuck Norris Joke provided by <a class="underline" href="https://api.chucknorris.io/">Chuck Norris API</a>: Some really funny joke will go here...</div>
    </footer>
  </div>;
}