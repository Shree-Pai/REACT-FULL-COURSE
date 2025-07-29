import React, { useState, useRef, useCallback } from "react";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const nextId = useRef(1);

  // Accepts { title, description }
  const addTask = useCallback(({ title, description }) => {
    setTasks(prev => [
      ...prev,
      { id: nextId.current++, title, description }
    ]);
  }, []);

  const updateTask = useCallback((id, { title, description }) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, title, description } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}