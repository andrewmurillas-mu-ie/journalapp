import React, { useEffect } from "react";
import "./Advertisement.css";

const Advertisement = ({ onSubmit, onClose }) => {
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
        <label>Task </label>
        <input></input>
        <button type="submit" class="btn btn-primary" onClick={onSubmit}>
          Accept
        </button>
        <button className="ad-skip" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
