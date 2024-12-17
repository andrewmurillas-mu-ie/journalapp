import React, { useState } from "react";
import Popup from "../Components/Popup/App";
import HalfScreenPopup from "../Components/NavBar/App";
import Card from "../Components/Card/App";

import "./App.css";

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const [isHalfScreenPopupOpen, setIsHalfScreenPopupOpen] = useState(false);
    const [duration, setDuration] = useState(5);

    const [selectedCategory, setSelectedCategory] = useState("home");
    const [showPopup, setShowPopup] = useState(false);

    const [contentItems, setContentItems] = useState([]);

    const addCard = ({ name, duration }) => {
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

            {isPopupOpen && <Popup onSubmit={onSubmit} />}

            <button onClick={halfMenuPopupToggle}>hi!</button>
            
        </>
    );
}

export default App;
