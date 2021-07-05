import React from "react";

import "./GoalsList.css";
import GoalItem from "./GoalItem";

const GoalsList = (props) => {
  console.log("[GoalsList] rendered");

  return (
    <ul className="goals-list">
      {props.goals.map((goal) => {
        return (
          <GoalItem
            key={goal.id}
            id={goal.id}
            name={goal.name}
            onDelete={props.onDelete}
          />
        );
      })}
    </ul>
  );
};

export default GoalsList;
