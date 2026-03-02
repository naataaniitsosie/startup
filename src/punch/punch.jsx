import React, { useEffect, useState } from 'react';

export function Punch() {
  const [punch, setPunch] = useState({
    time: new Date(),
    status: "ON"
  });

  useEffect(() => {
    // fetch from the server the current punch status and time

    // MOCKED BACKEND RESPONSE
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);
    setPunch({
      time: oneHourAgo,
      status: "OFF"
    });

  }, [])

  const handlePunch = () => {
    let newPunch;
    if (punch.status === "ON") {
      newPunch = {
        time: new Date(),
        status: "OFF"
      };
    } else {
      newPunch = {
        time: new Date(),
        status: "ON"
      };
    }
    setPunch(newPunch);

    // MOCK BACKEND UPDATE
    console.log("Punch should be sent to the backend:", newPunch);
  }
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">Punch Page</h2>
      <div className="flex flex-col items-center">
          <div>Status: <span className="ninja-naruto">{punch.status}</span> the clock since {punch.time.toLocaleString()}!</div>
          <div className="w-full max-w-sm flex justify-center m-5">
            <button className="flex-1 pt-4 pb-4 rounded-md ninja-button" onClick={handlePunch}>
              {punch.status === "ON" ? "Clock Out" : "Clock In"}
            </button>
          </div>
      </div>
    </main>
  );
}