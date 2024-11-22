import React, { useState } from "react";
import HalfScreenPopup from "./HalfScreenPopup";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMouseEnter = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  // Nature photography content
  const contentItems = [
    {
      id: 1,
      title: "Mountain Majesty",
      image: "https://source.unsplash.com/random/800x600?mountains,nature",
      description:
        "Majestic mountain peaks reaching into the clouds, showcasing nature's grandeur.",
    },
    {
      id: 2,
      title: "Forest Serenity",
      image: "https://source.unsplash.com/random/800x600?forest,nature",
      description:
        "Peaceful forest scenes with sunlight filtering through ancient trees.",
    },
    {
      id: 3,
      title: "Coastal Beauty",
      image: "https://source.unsplash.com/random/800x600?ocean,nature",
      description:
        "Dramatic coastlines where land meets sea in perfect harmony.",
    },
    {
      id: 4,
      title: "Desert Wonders",
      image: "https://source.unsplash.com/random/800x600?desert,nature",
      description:
        "Stunning desert landscapes with their unique beauty and resilience.",
    },
    {
      id: 5,
      title: "Waterfall Magic",
      image: "https://source.unsplash.com/random/800x600?waterfall,nature",
      description: "Powerful waterfalls cascading through pristine wilderness.",
    },
    {
      id: 6,
      title: "Wildlife Encounters",
      image: "https://source.unsplash.com/random/800x600?wildlife,nature",
      description:
        "Amazing wildlife in their natural habitats around the world.",
    },
  ];

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
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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
                <button className="menu-item">
                  <span className="icon">🏔️</span>
                  Mountains
                </button>
              </li>
              <li>
                <button className="menu-item">
                  <span className="icon">🌲</span>
                  Forests
                </button>
              </li>
              <li>
                <button className="menu-item">
                  <span className="icon">🌊</span>
                  Oceans
                </button>
              </li>
              <li>
                <button className="menu-item">
                  <span className="icon">🦁</span>
                  Wildlife
                </button>
              </li>
              <li>
                <button className="menu-item">
                  <span className="icon">🌅</span>
                  Sunsets
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
