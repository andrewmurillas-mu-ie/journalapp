import React, { useEffect } from "react";
import "./Advertisement.css";

const Advertisement = ({ onClose, category }) => {
  // useEffect(() => {
  //   // Auto close after 3 seconds
  //   const timer = setTimeout(() => {
  //     onClose();
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [onClose]);

  return <div className="ad-overlay"></div>;
};

export default Advertisement;
