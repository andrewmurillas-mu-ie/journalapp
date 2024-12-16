import React, { useState } from "react";
import Popup from "./Components/Popup/Popup";
import HalfScreenPopup from "./Components/HalfScreenPopup/HalfScreenPopup";
import Card from "./Components/Card/Card";

import "./App.css";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isHalfScreenPopupOpen, setIsHalfScreenPopupOpen] = useState(false);
  const [duration, setDuration] = useState(5);

  const [selectedCategory, setSelectedCategory] = useState("home");
  const [showPopup, setShowPopup] = useState(false);

  const [contentItems, setContentItems] = useState([]);

  const addCard = ({name, duration}) => {
    setContentItems([...contentItems, <Card name={name} duration={duration} />]);
  };

  const halfMenuPopupToggle = () => {
    if (isHalfScreenPopupOpen) {
      setIsHalfScreenPopupOpen(false);
    } else {
      setIsHalfScreenPopupOpen(true);
    }
  };

  const onSubmit = (name) => {
    setIsPopupOpen(false);
    addCard(name, duration);
  };

  return (
    <>
      <div className="content-grid">
        {contentItems.map((item) => (
          <div key={item.id} className="content-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {isPopupOpen && <Popup onSubmit={onSubmit}/>}

        <button onClick={halfMenuPopupToggle}>hi!</button>
        <HalfScreenPopup isOpen={isHalfScreenPopupOpen} onClose={halfMenuPopupToggle}>
          <div className="menu-content">
            <h2>Actions</h2>
            <nav className="menu-nav">
              <ul>
              <li>
                <button  onClick={addCard}>
                  <span className="icon">🎯</span>
                  <p>Create Task</p>
                </button>
              </li>
              </ul>
            </nav>
          </div>
        </HalfScreenPopup>
    </>
  );
}

export default App;
