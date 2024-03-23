export default function Task({ task, onToggleDone, OnDeleteTask }) {
  return (
    <div
      className="task"
      style={
        task.done === true
          ? {
              textDecoration: 'line-through',
              color: 'white',
              backgroundColor: 'green',
            }
          : {}
      }
    >
      <input type="checkbox" onClick={() => onToggleDone(task.id)}></input>
      <span>{task.desc}</span>
      <span>{task.type}</span>
      <span>{task.date}</span>
      <button onClick={() => OnDeleteTask(task.id)}>X</button>
    </div>
  );
}
