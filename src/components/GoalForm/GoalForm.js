import React, { useState } from "react";

import "./GoalForm.css";
import Card from "../UI/Card";

const GoalForm = (props) => {
  console.log("[AddGoal] rendered");

  const [goalName, setGoalName] = useState("");

  const changeGoalHandler = (event) => {
    setGoalName(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onAdd(goalName);
    setGoalName("");
  };

  return (
    <Card>
      <form className="goal-form" onSubmit={submitFormHandler}>
        <h3>Goal</h3>
        <input
          type="text"
          value={goalName}
          onChange={changeGoalHandler}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Add Goal
        </button>
      </form>
    </Card>
  );
};

export default GoalForm;
