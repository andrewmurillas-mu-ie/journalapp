import React, { useState } from "react";
import Popup from "./Components/Popup/Popup";
import HalfScreenPopup from "./Components/HalfScreenPopup/HalfScreenPopup";

import "./App.css";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isHalfScreenPopupOpen, setIsHalfScreenPopupOpen] = useState(false);

  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [showAd, setShowAd] = useState(false);
  const [pendingCategory, setPendingCategory] = useState(null);

  const handleClosePopup = () => setIsPopupOpen(false);

  // const [contentItems, setContentItems] = useState([
  //   { name: "", duration: "" },
  // ]);
  // Default content items
  const contentItems = [
    {
      id: 1,
      title: "Mountain Majesty",
      image: "https://source.unsplash.com/random/800x600?mountains,nature",
      description:
        "Majestic mountain peaks reaching into the clouds, showcasing nature's grandeur.",
    },
  ];

  const addCard = ({name, duration}) => {
    setContentItems([...contentItems, { name, duration }]);
  };

  const halfMenuPopupToggle = () => {
    if (isHalfScreenPopupOpen) {
      setIsHalfScreenPopupOpen(false);
    } else {
      setIsHalfScreenPopupOpen(true);
    }
  };

  const onSubmit = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="content-grid">
        <p>mochila mochila</p>
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
