import React, { useEffect, useState } from 'react';

export function Help() {
  const [helpMessages, setHelpMessages] = useState([]);

  useEffect(() => {
    const MOCK_HELP_MESSAGES = [
      "Login Page - Login or create an account.",
      "Punch Page - Clock in or out.",
      "History Page - View the history of clock in/out times.",
      "Admin Page - View the admin page. This displays the totals.",
      "Help Page - View the help page.",
    ]
    // mock fetching help messages
    setHelpMessages(MOCK_HELP_MESSAGES);
  }, [])

  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl text-center">Help Center</h2>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">How to use the app</div>
          <ul>
              {helpMessages.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
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