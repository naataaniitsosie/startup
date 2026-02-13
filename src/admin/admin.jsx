import React from 'react';

export function Admin() {
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">Admin Tools</h2>
      <section>
          <div className="text-2xl mb-2 ninja-naruto">Who is on the clock?</div>
          <ul className="flex flex-wrap gap-4">
              <li className="border-2 p-2 rounded-md">
                  <div>Name: <a href="history" className="underline">Bob, Jones</a></div>
                  <div>Hours: 4 (live clock)</div>
              </li>
              <li className="border-2 p-2 rounded-md">   
                  <div>Name: <a href="history" className="underline">Jane, Doe</a></div>
                  <div>Hours: 2 (live clock)</div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Name: <a href="history" className="underline">Jim, Beam</a></div>
                  <div>Hours: 1 (live clock)</div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Name: <a href="history" className="underline">Ronald, McDonald</a></div>
                  <div>Hours: 0 (live clock)</div>
              </li>
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