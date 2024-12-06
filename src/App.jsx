import React, { useState } from "react";
import HalfScreenPopup from "./Components/HalfScreenPopup";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [list, setList] = useState([]);

  const handleMouseEnter = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const [showPopUp, setShowPopUp] = useState(false);

  // Nature photography content
  const contentItems = [];

  const switchShowPopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div className="app">
      <button className="open-button" onMouseEnter={handleMouseEnter}>
        Explore Nature
      </button>

      <div className="main-content">
        <h1 className="page-title">Nature's Gallery</h1>
        <div className="content-grid">
          {contentItems.map((item) => (
            <div key={item.id} className="content-card">
              <span>Object: {item.name}</span>
              <span> Duration: {item.duration} min</span>
            </div>
          ))}
        </div>
      </div>

      <HalfScreenPopup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <div className="menu-content">
          <h2>Nature Categories</h2>
          <nav className="menu-nav">
            <ul>
              <li>
                <button className="menu-item" onClick={switchShowPopUp}>
                  <span className="icon">🎯</span>
                  Create Task
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </HalfScreenPopup>
    </div>
  );
}

export default App;
