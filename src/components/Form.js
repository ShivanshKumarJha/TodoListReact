import { useState } from 'react';

export default function Form({ onAddTodo }) {
  const [type, setType] = useState('Personal');
  const [date, setDate] = useState(Date.now());
  const [desc, setDesc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc || date === Date.now()) return;

    const newTodo = {
      type: type,
      date: date,
      desc: desc,
      id: crypto.randomUUID(),
      packed: false,
    };

    onAddTodo(newTodo);
    setType('Personal');
    setDate(Date.now());
    setDesc('');
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <span>What do you want to add to your Task List?</span>
      <form>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="School">School</option>
          <option value="Work">Work</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Todo.."
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}
