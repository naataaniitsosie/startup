import React from 'react';

export function History() {
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">History Log</h2>
      <section>
          <ul className="flex flex-wrap gap-4 flex-col">
              <li className="border-2 p-2 rounded-md">
                  <div>Jason Borne</div>
                  <div>Date: Jan 28, 2026</div>
                  <div>Location: 40.2518° N, 111.6493° W</div>
                  <div>In: 9:00 AM</div>
                  <div>Out: - </div>
                  <div>Day Total: (live clock) </div>
                  <div>Period Total: - </div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Jason Borne</div>
                  <div>Date: Jan 27, 2026</div>
                  <div>Location: 40.2518° N, 111.6493° W</div>
                  <div>In: 9:00 AM</div>
                  <div>Out: 5:00 PM</div>
                  <div>Day Total: 8 hours</div>
                  <div>Period Total: 32 hours</div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Employee 67</div>
                  <div>Date: Jan 26, 2026</div>
                  <div>Location: 40.2518° N, 111.6493° W</div>
                  <div>In: 9:00 AM</div>
                  <div>Out: 5:00 PM</div>
                  <div>Day Total: 8 hours</div>
                  <div>Period Total: 24 hours</div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Ronald McDonald</div>
                  <div>Date: Jan 25, 2026</div>
                  <div>Location: 40.2518° N, 111.6493° W</div>
                  <div>In: 9:00 AM</div>
                  <div>Out: 5:00 PM</div>
                  <div>Day Total: 8 hours</div>
                  <div>Period Total: 16 hours</div>
              </li>
              <li className="border-2 p-2 rounded-md">
                  <div>Ronald McDonald</div>
                  <div>Date: Jan 24, 2026</div>
                  <div>Location: 40.2518° N, 111.6493° W</div>
                  <div>In: 9:00 AM</div>
                  <div>Out: 5:00 PM</div>
                  <div>Day Total: 8 hours</div>
                  <div>Period Total: 8 hours</div>
              </li>
          </ul>
        </section>
    </main>
  );
}