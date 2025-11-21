
import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="spinner-layer layer1"></div>
      <div className="spinner-layer layer2"></div>
      <div className="spinner-layer layer3"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
