import React from "react";
import { Link, Outlet } from "react-router-dom";

const Analytics = () => {
  return (
    <div>
      <h2>Analytics</h2>
      <nav>
        <Link to="daily">Daily</Link> | <Link to="monthly">Monthly</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Analytics;