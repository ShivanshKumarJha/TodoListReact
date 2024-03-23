import { useState } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import Header from './Header';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function handleAddTodo(todo) {
    setTodoList(todoList => [...todoList, todo]);
  }

  function handleToggleDone(id) {
    setTodoList(todoList =>
      todoList.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleClearList() {
    setTodoList([]);
  }

  function handleDeleteTask(id) {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <Form onAddTodo={handleAddTodo} />
      <TodoList
        TodoList={todoList}
        onToggleDone={handleToggleDone}
        onClearList={handleClearList}
        OnDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
