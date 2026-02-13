import React from 'react';

export function Punch() {
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">Punch Page</h2>
      <div className="flex flex-col items-center">
          <div>Status: <span className="ninja-naruto">ON</span> the clock since Jan 27, 2026 @ 5:00 PM!</div>
          <div className="flex justify-center m-5"><button className="flex-1 pt-4 pb-4 rounded-md ninja-button">Clock Out</button></div>
      </div>
    </main>
  );
}