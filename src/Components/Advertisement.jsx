import React, { useEffect } from "react";
import "./Advertisement.css";

const Advertisement = ({ onClose }) => {
  const getAdContent = () => {
    return {
      title: "Discover Irish Mountains",
      text: "Plan your next hiking adventure in Ireland's majestic mountains!",
      icon: "🏔️",
      link: "Book guided tours and equipment",
    };
  };

  const adContent = getAdContent();

  return (
    <div className="ad-overlay">
      <div className="ad-content">
        <div className="ad-icon">{adContent.icon}</div>
        <h2>{adContent.title}</h2>
        <p>{adContent.text}</p>
        <button className="ad-cta">{adContent.link}</button>
        <div className="ad-timer">
          <div className="timer-bar"></div>
        </div>
        <button className="ad-skip" onClick={onClose}>
          Skip Ad
        </button>
      </div>
    </div>
  );
};
export default Advertisement;
