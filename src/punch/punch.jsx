import React, { useEffect, useState } from 'react';

export function Punch() {
  const [punch, setPunch] = useState();
  const [punchError, setPunchError] = useState()

  useEffect(() => {
    // fetch from the server the current punch status and time
    const getPunch = async () => {
      try {
        const res = await fetch(`/api/punch/latest`)
        if(!res.ok) {
          throw new Error("failed to load latest punch")
        }
        const data = (await res.json()).latestPunch
        setPunch({ status: data.status, time: new Date(data.time) })
      } catch(error) {
      } finally {}
    }

    getPunch()
  }, [])

  const handlePunch = async () => {
    let newPunch;
    if (punch?.status === "ON") {
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

    try {
      const res = await fetch(`/api/punch`, {
        method: "PUT",
        body: JSON.stringify(newPunch),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      if (!res.ok) {
        throw new Error('Failed to send punch to server')
      }
    } catch (error) {
      console.error(error)
      setPunchError(error.message)
    }
  }
  return (
    <main className="m-5 space-y-5">
      <h2 className="text-4xl m-5 text-center">Punch Page</h2>
      <div className="flex flex-col items-center">
          {punch && <div>Status: <span className="ninja-naruto">{punch?.status}</span> the clock since {punch?.time?.toLocaleString()}!</div>}
          <div className="w-full max-w-sm flex justify-center m-5">
            <button className="flex-1 pt-4 pb-4 rounded-md ninja-button" onClick={handlePunch}>
              {punch?.status === "ON" ? "Clock Out" : "Clock In"}
            </button>
          </div>
          {punchError && <div className="text-red-500 mt-5">{punchError}</div>}
      </div>
    </main>
  );
}