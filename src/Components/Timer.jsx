import React from "react";
import "../css/timer.css";

export default function Timer({ time, isPaused, togglePlayPause }) {
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    if (hours > 0) return `${hours}h${minutes}m`;
    if (minutes > 0) return `${minutes}m${seconds}s`;
    return `${seconds}s`;
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime(time)}</div>
      <div className="status-icon" onClick={togglePlayPause}>
        {isPaused ? (
          <div className="triangle-icon"></div> // Show triangle for "paused"
        ) : (
          <div className="square-icon"></div> // Show square for "playing"
        )}
      </div>
    </div>
  );
}
