import React, { useEffect } from 'react';

export function History() {

  const [history, setHistory] = React.useState([]);

    useEffect(() => {
        const getHistory = async () => {
          try {
            const res = await fetch(`/api/punch/history`)
            if(!res.ok) {
              throw new Error("failed to load punch history")
            }
            const data = (await res.json()).history
            setHistory(data)
          } catch (error) {} finally {}
        }
        getHistory()
    }, [])
    
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">History Log</h2>
      <section>
          <ul className="flex flex-wrap gap-4 flex-col">
            {history.map((entry, i) => (
              <li key={i} className="border-2 p-2 rounded-md">
                  <div>{entry.email}</div>
                  <div>Date: {entry.time}</div>
                  <div>Location (IP): {entry.ip}</div>
                  <div>Status: {entry.status}</div>
              </li>
            ))}
          </ul>
        </section>
    </main>
  );
}