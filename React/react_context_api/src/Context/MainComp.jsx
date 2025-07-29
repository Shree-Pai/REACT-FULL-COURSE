import React, { useContext, useState, useRef } from "react";
import { TaskContext } from "./TaskContext";

function MainComp() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState("");
  const nextId = useRef(1);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: nextId.current, name: taskInput }]);
    nextId.current += 1;
    setTaskInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={e => setTaskInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainComp;