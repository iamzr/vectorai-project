import React from "react";

function Card({ title, image }) {
  function displayImage() {
    if (image) {
      return <img src={image} alt={`cat for ${title}`}></img>;
    } else {
      return <div className="spinner"></div>;
    }
  }
  return (
    <div className="Card">
      <div>{title}</div>
      {displayImage()}
    </div>
  );
}

export default Card;
