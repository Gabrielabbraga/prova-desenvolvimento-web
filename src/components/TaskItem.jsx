function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className="task-item">
      <button
        type="button"
        className={`task-text ${task.completed ? 'completed' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </button>
      <button className="remove-button" onClick={() => onRemove(task.id)}>
        X
      </button>
    </li>
  );
}

export default TaskItem;
