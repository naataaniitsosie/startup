import React, { useEffect, useState } from 'react';

export function Admin() {
  const [currentlyOnTheClock, setCurrentlyOnTheClock] = useState([]);
  
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

  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">Admin Tools</h2>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">Who is on the clock?</div>
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
              <li className="border-2 p-2 rounded-md">
                  <div>Name: Employee 1</div>
                  <div>Period Total: 100 hours</div>
                  <div>YTD Total: 1000 hours</div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Name: Employee 2</div>
                  <div>Period Total: 200 hours</div>
                  <div>YTD Total: 2000 hours</div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Name: Employee 3</div>
                  <div>Period Total: 300 hours</div>
                  <div>YTD Total: 3000 hours</div>
              </li>
          </ul>
        </section>
    </main>
  );
}