// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import the CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-text">
        Oops! The page you are looking for doesn't exist.
      </p>
      <a className="not-found-link" href="/">
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
