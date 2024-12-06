import React, { useState } from "react";
import HalfScreenPopup from "./Components/HalfScreenPopup";
import Advertisement from "./Components/Advertisement";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [list, setList] = useState(<Card />);

  const handleMouseEnter = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const [showPopUp, setShowPopUp] = useState(false);

  // Nature photography content
  const contentItems = [];

  const addCard = (name, duration) => {
    if (name && duration) {
      // setList([...list]);
    }
  };

  const switchShowPopUp = () => {
    setShowPopUp(!showPopUp);
    addC;
  };

  return (
    <div className="app">
      <button className="open-button" onMouseEnter={handleMouseEnter}>
        Explore Nature
      </button>

      {/* {showPopUp && (
        <Advertisement onClose={handleAdClose} category={pendingCategory} />
      )} */}

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
                <button className="menu-item" onClick={addCard("test", 3)}>
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
