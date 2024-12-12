import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [timePeriod, setTimePeriod] = useState("week");

  const addItem = () => {
    if (name && duration) {
      const currentDate = new Date();
      setList([
        ...list,
        { name, duration: parseInt(duration), date: currentDate },
      ]);
      setName("");
      setDuration("");
    } else {
      alert("Please fill in both name and duration!");
    }
  };

  const filterDataByTimePeriod = () => {
    const now = new Date();
    return list.filter((item) => {
      const itemDate = new Date(item.date);
      const timeDiff = now - itemDate;
      switch (timePeriod) {
        case "day":
          return timeDiff <= 24 * 60 * 60 * 1000;
        case "week":
          return timeDiff <= 7 * 24 * 60 * 60 * 1000;
        case "month":
          return timeDiff <= 30 * 24 * 60 * 60 * 1000;
        case "year":
          return timeDiff <= 365 * 24 * 60 * 60 * 1000;
        default:
          return true;
      }
    });
  };

  const calculateData = () => {
    const filteredList = filterDataByTimePeriod();
    let totalDuration = filteredList.reduce(
      (acc, item) => acc + item.duration,
      0
    );
    let data = filteredList.map(
      (item) => (item.duration / totalDuration) * 100
    );
    return data;
  };

  const chartData = {
    labels: filterDataByTimePeriod().map((item) => item.name),
    datasets: [
      {
        label: "Duration Percentage",
        data: calculateData(),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h1>Time Statistics</h1>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button onClick={addItem}>Add List Item</button>
      </div>

      <div>
        <label>Select Time Period: </label>
        <select
          onChange={(e) => setTimePeriod(e.target.value)}
          value={timePeriod}
        >
          <option value="day">One Day</option>
          <option value="week">One Week</option>
          <option value="month">One Month</option>
          <option value="year">One Year</option>
        </select>
      </div>

      <div style={{ width: "400px", height: "400px" }}>
        {list.length > 0 && <Pie data={chartData} />}
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index} className="list-item">
            <span>Name: {item.name}</span>
            <span> | Duration: {item.duration} minutes</span>
            <span> | Date: {item.date.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
