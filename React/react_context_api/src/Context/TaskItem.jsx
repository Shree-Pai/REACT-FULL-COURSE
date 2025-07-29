import React from "react";

const TaskItem = React.memo(function TaskItem({ task, onEdit, onDelete }) {
  return (
    <li>
      <strong>{task.title}</strong>: {task.description}
      <button className="icon-btn" onClick={() => onEdit(task)} aria-label="Edit Task">Edit</button>
      <button className="icon-btn" onClick={() => onDelete(task.id)} aria-label="Delete Task">Delete</button>
    </li>
  );
});

export default TaskItem;