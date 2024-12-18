import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Routines.css";

function Routines() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelected, setIsSelected] = useState(false);
  const [feeling, setFeeling] = useState("");

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => setTime((prev) => prev + 1000), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const start = () => {
    setIsPaused(false);
  };

  const stop = () => {
    setIsPaused(true);
    addItem();
  };

  const togglePlayPause = () => {
    if (isPaused) setIsActive(true);
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };

  // datepicker
  const handleDateChange = (theDate) => {
    setIsSelected(true);
    setSelectedDate(theDate);
  };

  // Check if the selected date is in the future
  const isFuture = () => {
    return selectedDate > new Date();
  };

  // Add activity to the list
  const addItem = () => {
    if (!name) return alert("Enter a valid activity name.");
    if (time <= 0) return alert("Run the timer before adding an item.");
    setList([
      ...list,
      { name, duration: Math.floor(time / 1000), date: selectedDate },
    ]);
    setName("");
    setIsSelected(false); // Reset date selection for the next entry
  };

  return (
    <div className="card-container">
      <div className="container">
        <form>
          <p>Please choose a date:</p>
          <div className="form-group">
            <DatePicker
              dateFormat="MMMM d, yyyy"
              closeOnScroll={true}
              selected={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </form>
        {isSelected && (
          <p>
            You have chosen: {selectedDate.toString()}
            {isFuture() && <span> (This date is in the future)</span>}
          </p>
        )}
        <p>
          Year: {selectedDate.getFullYear()}, Month:{" "}
          {selectedDate.getMonth() + 1}, Day: {selectedDate.getDate()}
        </p>
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter activity name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addItem} disabled={!isSelected}>
          Add Activity
        </button>
      </div>

      <div className="list-section">
        <h3> Added Activities </h3>
        <ul>
          {list.map((item, idx) => (
            <li key={idx}>
              <span>{item.name}</span>
              <span>{item.duration}s</span>
              <span>{item.date.toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* reference https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/ */}
      <div className="button-container">
        <div className="button-display">
          <pre>
            {Math.floor(time / 3600000)}h:
            {Math.floor((time % 3600000) / 60000)}m:
            {Math.floor((time % 60000) / 1000)}s
          </pre>
        </div>
        <div
          className={`button-status-icon ${isPaused ? "triangle-icon" : "square-icon"
            }`}
          onClick={togglePlayPause}
        >
          {isPaused ? (
            <div className="button-play-icon"></div>
          ) : (
            <div className="button-inner-square"></div>
          )}
        </div>
        <button onClick={resetTimer} className="button-reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Routines;
