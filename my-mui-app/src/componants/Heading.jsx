import React from "react";
import { useLocation } from "react-router-dom";

const Heading = () => {
  const location = useLocation();

  // Determine the heading based on the current page path
  const getHeaderText = () => {
    switch (location.pathname) {
      case "/about":
        return "About Us";
      case "/admin-login":
        return "Admin Login Page";
      case "/user-login":
        return "User Login Page";
      case "/feedback":
        return "Feedback Page";
    default :
        return "Home"
    }
  };

  return (
    <div className="header-container">
      <h1>{getHeaderText()}</h1>
    </div>
  );
};

export default Heading;
