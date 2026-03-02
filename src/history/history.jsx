import React, { useEffect } from 'react';

export function History() {

  const [history, setHistory] = React.useState([]);

    useEffect(() => {
        // fetch from the server the punch history for the current user
        console.log("Fetch punch history from the backend");
        // MOCKED BACKEND RESPONSE
        const newHistory = [{
            name: "Jason Borne",
            date: "Jan 28, 2026",
            location: "40.2518° N, 111.6493° W",
            in: "9:00 AM",
            out: "-",
            dayTotal: "(live clock)",
            periodTotal: "-"
        }, {
            name: "Jason Borne",
            date: "Jan 27, 2026",
            location: "40.2518° N, 111.6493° W",
            in: "9:00 AM",
            out: "5:00 PM",
            dayTotal: "8 hours",
            periodTotal: "32 hours"
        }, {
            name: "Employee 67",
            date: "Jan 26, 2026",
            location: "40.2518° N, 111.6493° W",
            in: "9:00 AM",
            out: "5:00 PM",
            dayTotal: "8 hours",
            periodTotal: "24 hours"
        }, {
            name: "Ronald McDonald",
            date: "Jan 25, 2026",
            location: "40.2518° N, 111.6493° W",
            in: "9:00 AM",
            out: "5:00 PM",
            dayTotal: "8 hours",
            periodTotal: "16 hours"
        }, {
            name: "Ronald McDonald",
            date: "Jan 24, 2026",
            location: "40.2518° N, 111.6493° W",
            in: "9:00 AM",
            out: "5:00 PM",
            dayTotal: "8 hours",
            periodTotal: "8 hours"
        }];
        setHistory(newHistory);
    }, [])
    
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">History Log</h2>
      <section>
          <ul className="flex flex-wrap gap-4 flex-col">
            {history.map((entry) => (
              <li key={entry.name + entry.date} className="border-2 p-2 rounded-md">
                  <div>{entry.name}</div>
                  <div>Date: {entry.date}</div>
                  <div>Location: {entry.location}</div>
                  <div>In: {entry.in}</div>
                  <div>Out: {entry.out}</div>
                  <div>Day Total: {entry.dayTotal}</div>
                  <div>Period Total: {entry.periodTotal}</div>
              </li>
            ))}
          </ul>
        </section>
    </main>
  );
}