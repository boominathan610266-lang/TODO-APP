function TaskItem({ task, index, deleteTask, toggleTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center task-item">
      
      {/* Task Text */}
      <span
        onClick={() => toggleTask(index)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {task.text}
      </span>

      {/* Delete Button */}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>

    </li>
  );
}

export default TaskItem;