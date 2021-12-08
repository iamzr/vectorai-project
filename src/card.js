import React from "react";

function Card({ title, image }) {
  return (
    <div className="Card">
      <div>{title}</div>
      <div>{image}</div>
    </div>
  );
}

export default Card;
