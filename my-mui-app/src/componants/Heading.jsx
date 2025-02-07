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
      default:
        return "Home";
    }
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.71)", // Transparent white
        backdropFilter: "blur(10px)", 
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>
        {getHeaderText()}
      </h3>
    </div>
  );
};

export default Heading;
