import React from "react";
import "./App.css";

const HalfScreenPopup = ({ isOpen, onClose, children }) => {
  // Close popup when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup-overlay ${isOpen ? "show" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="popup-body">{children}</div>
      </div>
    </div>
  );
};

export default HalfScreenPopup;
