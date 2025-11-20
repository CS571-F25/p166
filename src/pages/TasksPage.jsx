import React, { useState } from "react";
import TaskCard from "../components/TaskCard.jsx";
import AddTaskForm from "../components/AddTaskForm.jsx";
import { sampleTasks } from "../sampleData.jsx";

const TasksPage = () => {
  const [tasks, setTasks] = useState(sampleTasks);

  const handleAddTask = (task) => {
    setTasks((prev) => [task, ...prev]);
  };

  return (
    <>
      <h2 className="mb-3">Tasks (demo)</h2>
      <p className="text-muted">
        These are example tasks grouped under a sample team. New tasks you add
        here are only stored in memory for now – this milestone is focused on
        layout and routing, not permanent data.
      </p>

      <AddTaskForm onAdd={handleAddTask} />

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default TasksPage;
