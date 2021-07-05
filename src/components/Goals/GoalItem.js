import React from "react";

import "./GoalItem.css";

const GoalItem = (props) => {
  console.log("[GoalItem] rendered");

  return (
    <li
      className="goal-item"
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      {props.name}
    </li>
  );
};

export default GoalItem;
