import React, { useState } from "react";
import "../css/play.css";
import Timer from "../js/timer";

function Stop() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 1000); // Increment time every second
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const togglePlayPause = () => {
    if (isPaused) {
      setIsActive(true); // Start timer if it's paused
    }
    setIsPaused(!isPaused); // Toggle play/pause
  };

  return (
    <div className="Stop">
      <Timer
        time={time}
        isPaused={isPaused}
        togglePlayPause={togglePlayPause}
      />
    </div>
  );
}

export default Stop;
