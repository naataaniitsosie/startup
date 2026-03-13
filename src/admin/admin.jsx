import React, { useEffect, useState } from 'react';

export function Admin() {
  const [currentlyOnTheClock, setCurrentlyOnTheClock] = useState([]);
  const [employeeTotals, setEmployeeTotals] = useState([]);
  
  useEffect(() => {
    const MOCK_ON_THE_CLOCK = [{
        name: "Bob, Jones",
        hours: 4 // live clock updates, will accumiate as time goes on
    }, {
        name: "Jane, Doe",
        hours: 2 // live clock updates, will accumiate as time goes on
    }, {
        name: "Jim, Beam",
        hours: 1 // live clock updates, will accumiate as time goes on
    }, {
        name: "Ronald, McDonald",
        hours: 0 // live clock updates, will accumiate as time goes on
    }];

    setCurrentlyOnTheClock(MOCK_ON_THE_CLOCK);
    const intervalId = setInterval(() => {
        setCurrentlyOnTheClock(value => {
            // rotate to mock live data updates
            let shuffled = [...value];
            shuffled.push(value[0]);
            shuffled.shift();
            return shuffled;
        });
    }, 1000);

    return () => {
        clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const getAdminStats = async () => {
        try {
            const res = await fetch(`/api/punch/admin`)
            if (!res.ok) {
                throw new Error("Failed to get admin stats")
            }
            const { stats } = await res.json();
            setEmployeeTotals(stats);
        } catch(error) {

        } finally {

        }
    }
    getAdminStats()
  }, []);

  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">Admin Tools</h2>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">Who is on the clock? (fake data till websocket assignment)</div>
          <ul className="flex flex-wrap gap-4">
              {currentlyOnTheClock.map((employee, i) => (
                  <li key={i} className="border-2 p-2 rounded-md">
                      <div>Name: <a href="history" className="underline">{employee.name}</a></div>
                      <div>Hours: {employee.hours} (live clock)</div>
                  </li>
              ))}
          </ul>
      </section>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">Employee Totals</div>
          <ul className="flex flex-wrap gap-4">
            {employeeTotals.map((employee, i) => (
              <li key={i} className="border-2 p-2 rounded-md">
                <div>Name: {employee.name}</div>
                <div>Period Total: {employee.periodTotal.toFixed(2)} hours</div>
                <div>YTD Total: {employee.ytdTotal.toFixed(2)} hours</div>
              </li>
            ))}
          </ul>
        </section>
    </main>
  );
}