import React from "react";
import "./Home.css";

const Home = () => {
  const featuredLocations = [
    {
      id: 1,
      title: "Cliffs of Moher",
      image: "https://source.unsplash.com/featured/800x600?cliffs+of+moher",
      description:
        "Towering sea cliffs rising dramatically from the Atlantic Ocean",
    },
    {
      id: 2,
      title: "Giant's Causeway",
      image: "https://source.unsplash.com/featured/800x600?giants+causeway",
      description:
        "Unique hexagonal rock formations created by ancient volcanic activity",
    },
    {
      id: 3,
      title: "Ring of Kerry",
      image: "https://source.unsplash.com/featured/800x600?ring+of+kerry",
      description:
        "Stunning circular route showcasing Ireland's diverse landscapes",
    },
    {
      id: 4,
      title: "Connemara National Park",
      image: "https://source.unsplash.com/featured/800x600?connemara",
      description: "Wild beauty with mountains, heathlands, and coastal views",
    },
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Discover Ireland's Natural Wonders</h1>
        <p className="hero-text">
          Experience the breathtaking beauty of the Emerald Isle, from rugged
          coastlines to ancient forests, mystical lakes to majestic mountains.
        </p>
      </section>

      <section className="about-section">
        <h2>Ireland's Natural Heritage</h2>
        <p>
          Ireland's landscape is a tapestry of stunning natural wonders, shaped
          by millions of years of geological processes and blessed with a unique
          climate that creates its characteristic emerald green vegetation. From
          the wild Atlantic coastline to the gentle eastern shores, from
          towering mountains to serene lakes, the country offers an incredible
          diversity of natural landscapes.
        </p>
        <p>
          Our interactive gallery showcases the best of Irish nature across four
          main categories: mountains that touch the clouds, ancient forests that
          whisper tales of the past, lakes that mirror the sky, and rivers that
          carved the land through millennia.
        </p>
      </section>

      <section className="featured-locations">
        <h2>Featured Locations</h2>
        <div className="featured-grid">
          {featuredLocations.map((location) => (
            <div key={location.id} className="featured-card">
              <div
                className="featured-image"
                style={{ backgroundImage: `url(${location.image})` }}
              >
                <div className="featured-overlay">
                  <h3>{location.title}</h3>
                  <p>{location.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="nature-facts">
        <h2>Did You Know?</h2>
        <div className="facts-grid">
          <div className="fact-card">
            <span className="fact-icon">🏔️</span>
            <p>
              Ireland's highest peak, Carrauntoohil, stands at 1,038 meters
              (3,406 feet)
            </p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">🌲</span>
            <p>Ancient Irish woodlands are home to over 1,200 plant species</p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">💧</span>
            <p>There are over 12,000 lakes (loughs) in Ireland</p>
          </div>
          <div className="fact-card">
            <span className="fact-icon">🌊</span>
            <p>
              The River Shannon is the longest river in Ireland at 360.5 km (224
              miles)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
