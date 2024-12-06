import React, { useEffect } from "react";
import "./Advertisement.css";

const Advertisement = ({ onClose, category }) => {
  useEffect(() => {
    // Auto close after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getAdContent = (category) => {
    switch (category) {
      case "mountains":
        return {
          title: "Discover Irish Mountains",
          text: "Plan your next hiking adventure in Ireland's majestic mountains!",
          icon: "🏔️",
          link: "Book guided tours and equipment",
        };
      case "lakes":
        return {
          title: "Experience Irish Lakes",
          text: "Explore the serene beauty of Ireland's legendary lakes!",
          icon: "💧",
          link: "Book boat tours and fishing trips",
        };
      case "rivers":
        return {
          title: "Journey Irish Rivers",
          text: "Navigate through Ireland's historic waterways!",
          icon: "🌊",
          link: "Book river adventures",
        };
      case "forests":
        return {
          title: "Explore Irish Forests",
          text: "Wander through Ireland's ancient woodland trails!",
          icon: "🌲",
          link: "Book forest tours",
        };
      default:
        return {
          title: "Discover Ireland",
          text: "Experience the natural wonders of the Emerald Isle!",
          icon: "🍀",
          link: "Book your adventure",
        };
    }
  };

  const adContent = getAdContent(category);

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
