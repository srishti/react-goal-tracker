import { useState } from "react";

import "./App.css";
import GoalForm from "./components/GoalForm/GoalForm";
import GoalsList from "./components/Goals/GoalsList";

const DUMMY_GOALS = [
  { id: 1, name: "Do all exercises!" },
  { id: 2, name: "Complete all projects!" },
  { id: 3, name: "Finish the course!" },
];

const App = () => {
  console.log("[App] rendered");

  const [goals, setGoals] = useState(DUMMY_GOALS);

  const addGoalHandler = (goalName) => {
    const newGoal = {
      id: Math.random() * 10,
      name: goalName,
    };
    setGoals((prevState) => {
      return [newGoal, ...prevState];
    });
  };

  const deleteGoalHandler = (goalId) => {
    const goalIndex = goals.findIndex((goal) => goal.id === goalId);
    const newGoals = [...goals];
    newGoals.splice(goalIndex, 1);
    setGoals(newGoals);
  };

  let goalsContent = <p>No goal found. Please add a goal to start with.</p>;
  if (goals.length > 0) {
    goalsContent = <GoalsList goals={goals} onDelete={deleteGoalHandler} />;
  }

  return (
    <div className="app">
      <GoalForm onAdd={addGoalHandler} />
      {goalsContent}
    </div>
  );
};

export default App;
