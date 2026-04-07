import React, { useEffect, useState } from 'react';

import { PunchEvent, PunchNotifier } from '../punchNotifier';

export function Admin() {
  const [currentlyOnTheClock, setCurrentlyOnTheClock] = useState([]);
  const [employeeTotals, setEmployeeTotals] = useState([]);

  useEffect(() => {
    PunchNotifier.addHandler(handlePunchEvent);

    return () => {
      PunchNotifier.removeHandler(handlePunchEvent);
    };
  }, []);

  function handlePunchEvent(event) {
    const { from } = event;
    if (event.type !== PunchEvent.In && event.type !== PunchEvent.Out) {
        return
    }
    setCurrentlyOnTheClock(prev => [...prev, {
      username: from,
      status: event.type,
      time: new Date(event.value.time).toLocaleTimeString()
    }]);
  }

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
  console.log(currentlyOnTheClock)
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">Admin Tools</h2>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">Punch in and out live updates</div>
          <ul className="flex flex-wrap gap-4">
              {currentlyOnTheClock?.map((employee, i) => (
                  <li key={i} className="border-2 p-2 rounded-md">
                      <div>Username: <a href="history" className="underline">{employee.username}</a></div>
                      <div>Status: {employee.status}</div>
                      <div>Time: {employee.time}</div>
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