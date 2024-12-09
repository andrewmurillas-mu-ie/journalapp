import React from "react";
import "./NavigationMenu.css";

const NavigationMenu = ({ onClose, onSelectCategory }) => {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    onClose();
  };

  return (
    <nav className="navigation-menu">
      <div className="menu-header">
        <h2>Irish Nature Gallery</h2>
      </div>

      <div className="menu-items">
        <button
          onClick={() => handleCategoryClick("home")}
          className="menu-item"
        >
          <span className="icon">🏠</span>
          <span>Home</span>
        </button>
        <button
          onClick={() => handleCategoryClick("mountains")}
          className="menu-item"
        >
          <span className="icon">🏔️</span>
          <span>Mountains</span>
        </button>
        <button
          onClick={() => handleCategoryClick("forests")}
          className="menu-item"
        >
          <span className="icon">🌲</span>
          <span>Forests</span>
        </button>
        <button
          onClick={() => handleCategoryClick("lakes")}
          className="menu-item"
        >
          <span className="icon">💧</span>
          <span>Lakes</span>
        </button>
        <button
          onClick={() => handleCategoryClick("rivers")}
          className="menu-item"
        >
          <span className="icon">🌊</span>
          <span>Rivers</span>
        </button>
      </div>

      <div className="menu-footer">
        <button onClick={onClose} className="close-button">
          Close Menu
        </button>
      </div>
    </nav>
  );
};

export default NavigationMenu;
