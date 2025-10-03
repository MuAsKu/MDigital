import React from "react";

function Card({ text, price, increase }) {
  return (
    <div>
      <p>{text}</p>
      <h2>{price}</h2>
      <h5>{increase}</h5>
    </div>
  );
}

export default Card;
