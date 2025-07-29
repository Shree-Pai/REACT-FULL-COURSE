import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, updateTask, deleteTask } = useContext(TaskContext);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const startEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title || "");
    setEditDesc(task.description || "");
  };

  const handleUpdate = (id) => {
    updateTask(id, { title: editTitle, description: editDesc });
    setEditId(null);
    setEditTitle("");
    setEditDesc("");
  };

  return (
    <ul>
      {tasks.map(task => (
        editId === task.id ? (
          <li key={task.id}>
            <div className="edit-row">
              <input
                type="text"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                placeholder="Task Title"
              />
              <input
                type="text"
                value={editDesc}
                onChange={e => setEditDesc(e.target.value)}
                placeholder="Task Description"
              />
            </div>
            <div className="edit-actions">
              <button className="save-btn" onClick={() => handleUpdate(task.id)}>Save</button>
              <button className="cancel-btn" onClick={() => setEditId(null)}>Cancel</button>
            </div>
          </li>
        ) : (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={startEdit}
            onDelete={deleteTask}
          />
        )
      ))}
    </ul>
  );
}

export default TaskList;