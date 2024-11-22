import "./styles.css";

import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const addItem = () => {
    if (name && duration) {
      setList([...list, { name, duration }]);
      setName("");
      setDuration("");
    } else {
      alert("Please input valid name and duration");
    }
  };

  return (
    <div>
      <h1>List</h1>
      <div>
        <input
          type="text"
          placeholder="Object"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button onClick={addItem}>add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="list-item">
            <span>Object: {item.name}</span>
            <span> Duration: {item.duration} min</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
