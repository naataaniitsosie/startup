import React from 'react';

export function Help() {
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl text-center">Help Center</h2>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">How to use the app</div>
          <ul>
              <li>Login Page - Login or create an account.</li>
              <li>Punch Page - Clock in or out.</li>
              <li>History Page - View the history of clock in/out times.</li>
              <li>Admin Page - View the admin page. This displays the totals.</li>
              <li>Help Page - View the help page.</li>
          </ul>
      </section>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">Definitions</div>
          <ul>
              <li> Period Total - The total hours worked for the current period.</li>
              <li> YTD Total The total hours worked for the current year.</li>
          </ul>
        </section>
    </main>
  );
}