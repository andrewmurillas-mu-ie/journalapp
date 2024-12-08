import React, { useState } from "react";
import HalfScreenPopup from "./Components/HalfScreenPopup";
import Advertisement from "./Components/Advertisement";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMouseEnter = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  // Nature photography content
  const [contentItems, setContentItems] = useState([
    {
      id: 1,
      title: "Mountain Majesty",
      image: "https://source.unsplash.com/random/800x600?mountains,nature",
      description:
        "Majestic mountain peaks reaching into the clouds, showcasing nature's grandeur.",
    },
  ]);

  const handleAdClose = () => {};

  const addCard = (card) => {
    setContentItems([...contentItems, { card }]);
  };

  return (
    <div className="app">
      <button className="open-button" onMouseEnter={handleMouseEnter}>
        Explore Nature
      </button>

      <div className="main-content">
        <h1 className="page-title">Nature's Gallery</h1>
        <div className="content-grid">
          <Advertisement onClose={handleAdClose} />

          {contentItems.map((item) => (
            <div key={item.id} className="content-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <HalfScreenPopup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <div className="menu-content">
          <h2>Actions</h2>
          <nav className="menu-nav">
            <ul>
              <li>
                <button className="menu-item" onClick={addCard}>
                  <span className="icon">🎯</span>
                  <p>Create Task</p>
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
