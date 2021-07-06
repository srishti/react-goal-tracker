import React, { useState } from "react";

import styles from "./GoalForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const GoalForm = (props) => {
  console.log("[GoalForm] rendered");

  const [goalName, setGoalName] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const formControlCSSClasses = [styles["form-control"]];
  if (!isInputValid) {
    formControlCSSClasses.push(styles.invalid);
  }

  const changeGoalHandler = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim().length > 0) {
      setIsInputValid(true); // resetting the state variable to valid input
    }
    setGoalName(inputValue);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (goalName.trim().length === 0) {
      // if the input field is empty
      setIsInputValid(false); // setting the state variable to invalid input
      return;
    }
    props.onAdd(goalName);
    setGoalName("");
  };

  return (
    <Card>
      <form className={styles["goal-form"]} onSubmit={submitFormHandler}>
        <div className={formControlCSSClasses.join(" ")}>
          <label htmlFor="input-goal">Goal</label>
          <input
            id="input-goal"
            type="text"
            value={goalName}
            onChange={changeGoalHandler}
          />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </Card>
  );
};

export default GoalForm;
