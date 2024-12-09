import React, { useState } from "react";
import HalfScreenPopup from "./Components/HalfScreenPopup";

import NavigationMenu from "./Components/NavigationMenu";
import Advertisement from "./Components/Advertisement";
import Home from "./Components/Home";

import "./App.css";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [showAd, setShowAd] = useState(false);
  const [pendingCategory, setPendingCategory] = useState(null);

  const handleMouseEnter = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);


  // Default content items
  const contentItems = [

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

  const onSubmit = () => {};

  const handleCategoryClick = (category) => {
    setPendingCategory(category);
    setShowAd(true);
    setIsPopupOpen(false);
  };
  const handleAdClose = () => {
    setShowAd(false);
    setSelectedCategory(pendingCategory);
    setPendingCategory(null);
  };
  const handleCategorySelect = (category) => {
    if (category === "home") {
      setSelectedCategory(category);
    } else {
      setPendingCategory(category);
      setShowAd(true);
    }
  };

  // Get content based on selected category
  const displayContent =
    selectedCategory === "mountains"
      ? irishLocations.mountains
      : selectedCategory === "forests"
      ? irishLocations.forests
      : selectedCategory === "lakes"
      ? irishLocations.lakes
      : selectedCategory === "rivers"
      ? irishLocations.rivers
      : contentItems;

  return (
        <div className="content-grid">
          <Advertisement onSubmit={onSubmit} onClose={handleAdClose} />

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
