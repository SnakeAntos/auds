import React from "react";
import {FaSpinner} from "react-icons/fa";
import './styles.css'
const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
      <FaSpinner className="loading-icon" />
      </div>
    </div>
  );
};
export default Loading;