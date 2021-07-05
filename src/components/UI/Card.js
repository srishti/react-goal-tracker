import React from "react";

import "./Card.css";

const Card = (props) => {
  console.log("[Card] rendered");

  return <div className="card">{props.children}</div>;
};

export default Card;
