import React from "react";
import "./play.css";

export default function Play({ isPaused, handlePlayPauseToggle, isInactive }) {
  return (
    <div
      className={`play-container ${
        isInactive ? "inactive" : isPaused ? "paused" : "playing"
      }`}
      onClick={handlePlayPauseToggle}
    >
      <div className="status-icon">
        {isInactive ? (
          <div className="plus-icon"></div> // Show plus sign before clicking
        ) : isPaused ? (
          <div className="triangle" />
        ) : (
          <div className="inner-square" />
        )}
      </div>
    </div>
  );
}
