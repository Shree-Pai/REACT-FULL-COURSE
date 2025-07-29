import React from "react";
import { TaskProvider } from "./Context/TaskProvider";
import { ThemeProvider } from "./Context/ThemeContext";
import TaskForm from "./Context/TaskForm";
import TaskList from "./Context/TaskList";
import ThemeToggleComponent from "./Context/ThemeToggleComponent";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="task-app-container">
          <ThemeToggleComponent>
            <TaskForm />
            <TaskList />
          </ThemeToggleComponent>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;