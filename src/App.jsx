import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Routines from "./component/Routines";
import Analytics from "./component/Analytics/Analytics";
import Daily from "./component/Analytics/Daily";
import Monthly from "./component/Analytics/Monthly";
import Settings from "./component/Settings";

function App() {
  return (
    <Router>
      {/* Navigation bar */}
      <nav style={styles.navBar}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/routines" style={styles.link}>
          Routines
        </Link>
        <Link to="/analytics" style={styles.link}>
          Analytics
        </Link>
        <Link to="/settings" style={styles.link}>
          Settings
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/analytics" element={<Analytics />}>
          <Route path="daily" element={<Daily />} />
          <Route path="monthly" element={<Monthly />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    background: "#333",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  },
};

export default App;
