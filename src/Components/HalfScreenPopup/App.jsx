import React from "react";
import "./App.css";

const Router = (screens) => {
  const route = (i) => {
    return (screens[i]);
  }
}

const HalfScreenPopup = (screens) => {
  // Close popup when clicking outside

  return (
    <div

      onClick={handleOverlayClick}
    />
  );
};

export default HalfScreenPopup;
