import React from "react";


const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-button">Learn More</button>
    </div>
  );
};

export default Card;