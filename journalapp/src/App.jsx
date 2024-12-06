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
    <div className="app">
      <button className="menu-trigger" onClick={() => setIsPopupOpen(true)}>
        <span>☰</span>
        <span>Menu</span>
      </button>

      <HalfScreenPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      >
        <NavigationMenu
          onClose={() => setIsPopupOpen(false)}
          onSelectCategory={handleCategorySelect}
        />
      </HalfScreenPopup>

      {showAd && (
        <Advertisement onClose={handleAdClose} category={pendingCategory} />
      )}

      {selectedCategory === "home" ? (
        <Home />
      ) : (
        <div className="content-grid">
          {irishLocations[selectedCategory]?.map((item) => (
            <div key={item.id} className="nature-card">
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
