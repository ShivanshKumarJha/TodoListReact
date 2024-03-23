import { useState } from 'react';
import Task from './Task';

export default function TodoList({
  TodoList,
  onToggleDone,
  onClearList,
  OnDeleteTask,
}) {
  const [sortBy, setSortBy] = useState('input');

  const sortTasks = tasks => {
    switch (sortBy) {
      case 'input':
        return tasks;
      case 'date':
        return tasks
          .slice()
          .sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'packed':
        return tasks.slice().sort((a, b) => (a.done ? 1 : -1));
      default:
        return tasks;
    }
  };
  const sortedTasks = sortTasks(TodoList);

  return (
    <div className="tasks">
      {sortedTasks.map(task => (
        <Task
          task={task}
          key={task.id}
          onToggleDone={onToggleDone}
          OnDeleteTask={OnDeleteTask}
        />
      ))}
      <div className="actions">
        <select onChange={e => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="date">Sort by due date</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList} className="clear-button">
          Clear List
        </button>
      </div>
    </div>
  );
}
