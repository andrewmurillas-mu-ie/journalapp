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

  // Irish mountains and nature locations
  const irishLocations = {
    mountains: [
      {
        id: 1,
        title: "Carrauntoohil",
        image:
          "https://source.unsplash.com/featured/800x600?Carrauntoohil+mountain+ireland",
        description:
          "Ireland's highest peak in County Kerry, standing at 1,038 meters.",
      },
      {
        id: 2,
        title: "Mount Brandon",
        image:
          "https://source.unsplash.com/random/800x600?Mount+Brandon,Ireland",
        description:
          "Second highest peak in Ireland, located on the Dingle Peninsula.",
      },
      {
        id: 3,
        title: "Croagh Patrick",
        image:
          "https://source.unsplash.com/random/800x600?Croagh+Patrick,Mayo,Ireland",
        description:
          "Sacred mountain in County Mayo, known for its pilgrimage traditions.",
      },
      {
        id: 4,
        title: "Wicklow Mountains",
        image:
          "https://source.unsplash.com/random/800x600?Wicklow+Mountains,Ireland",
        description: "Beautiful mountain range in County Wicklow, near Dublin.",
      },
      {
        id: 5,
        title: "Mourne Mountains",
        image:
          "https://source.unsplash.com/random/800x600?Mourne+Mountains,Ireland",
        description: "Granite mountain range in County Down, Northern Ireland.",
      },
      {
        id: 6,
        title: "Twelve Bens",
        image:
          "https://source.unsplash.com/random/800x600?Twelve+Bens,Connemara,Ireland",
        description: "Mountain range in Connemara, County Galway.",
      },
    ],

    forests: [
      {
        id: 1,
        title: "Killarney National Park",
        image:
          "https://source.unsplash.com/featured/800x600?Killarney+forest+ireland",
        description:
          "Ancient oak and yew woodlands in County Kerry, home to Ireland's oldest native forest.",
      },
      {
        id: 2,
        title: "Glendalough Forest",
        image:
          "https://source.unsplash.com/featured/800x600?Glendalough+forest+ireland",
        description:
          "Historic forest in the Wicklow Mountains, surrounding the medieval monastic site.",
      },
      {
        id: 3,
        title: "Brackloon Wood",
        image:
          "https://source.unsplash.com/featured/800x600?Mayo+forest+ireland",
        description:
          "Ancient oak woodland in County Mayo, representing Ireland's native forest heritage.",
      },
      {
        id: 4,
        title: "Tollymore Forest Park",
        image:
          "https://source.unsplash.com/featured/800x600?Tollymore+forest+ireland",
        description:
          "Beautiful forest park in County Down, featuring exotic trees and Gothic-style architecture.",
      },
      {
        id: 5,
        title: "Portumna Forest Park",
        image:
          "https://source.unsplash.com/featured/800x600?Portumna+forest+ireland",
        description:
          "Diverse woodland in County Galway, bordering Lough Derg with native and exotic trees.",
      },
      {
        id: 6,
        title: "Belleek Forest",
        image:
          "https://source.unsplash.com/featured/800x600?Belleek+forest+ireland",
        description:
          "Scenic forest park in Ballina, County Mayo, with beautiful riverside walks.",
      },
    ],
    lakes: [
      {
        id: 1,
        title: "Lough Corrib",
        image:
          "https://source.unsplash.com/featured/800x600?Lough+Corrib+ireland",
        description:
          "Ireland's second largest lake, located in County Galway with stunning islands and wildlife.",
      },
      {
        id: 2,
        title: "Lough Derg",
        image:
          "https://source.unsplash.com/featured/800x600?Lough+Derg+ireland",
        description:
          "Third largest lake on the River Shannon, bordered by counties Clare, Tipperary, and Galway.",
      },
      {
        id: 3,
        title: "Lough Leane",
        image:
          "https://source.unsplash.com/featured/800x600?Killarney+Lakes+ireland",
        description:
          "Largest of Killarney's three lakes, surrounded by mountains and ancient forests.",
      },
      {
        id: 4,
        title: "Lough Erne",
        image:
          "https://source.unsplash.com/featured/800x600?Lough+Erne+ireland",
        description:
          "Two connected lakes in County Fermanagh, famous for their island-dotted waters.",
      },
      {
        id: 5,
        title: "Glendalough Upper Lake",
        image:
          "https://source.unsplash.com/featured/800x600?Glendalough+Lake+ireland",
        description:
          "Glacial lake in the heart of Wicklow Mountains, surrounded by dramatic scenery.",
      },
      {
        id: 6,
        title: "Lough Tay",
        image:
          "https://source.unsplash.com/featured/800x600?Lough+Tay+Wicklow+ireland",
        description:
          "Known as the Guinness Lake, nestled in the Wicklow Mountains with distinctive dark waters.",
      },
    ],
    rivers: [
      {
        id: 1,
        title: "River Shannon",
        image:
          "https://source.unsplash.com/featured/800x600?River+Shannon+ireland",
        description:
          "Ireland's longest river, flowing through 11 counties from Cavan to Limerick.",
      },
      {
        id: 2,
        title: "River Liffey",
        image:
          "https://source.unsplash.com/featured/800x600?River+Liffey+Dublin+ireland",
        description:
          "Dublin's iconic river, flowing through the heart of the capital city.",
      },
      {
        id: 3,
        title: "River Boyne",
        image:
          "https://source.unsplash.com/featured/800x600?River+Boyne+ireland",
        description:
          "Historic river flowing through the ancient Brú na Bóinne World Heritage site.",
      },
      {
        id: 4,
        title: "River Barrow",
        image:
          "https://source.unsplash.com/featured/800x600?River+Barrow+ireland",
        description:
          "Second longest river in Ireland, known for its beautiful walking trails.",
      },
      {
        id: 5,
        title: "River Blackwater",
        image:
          "https://source.unsplash.com/featured/800x600?Blackwater+River+ireland",
        description:
          "Scenic river in County Cork, famous for salmon fishing and castle views.",
      },
      {
        id: 6,
        title: "River Erne",
        image:
          "https://source.unsplash.com/featured/800x600?River+Erne+ireland",
        description:
          "Beautiful river system flowing through Northern Ireland and the Republic.",
      },
    ],
    // Add other categories here if needed
  };

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
