import React, { useState } from 'react';
import './styles.css';
import Todo from './todo'; // Import the Todo component
import TodoForm from './todoform'; // Import the TodoForm component

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Vini',
      isCompleted: false,
    },
    {
      text: 'Vidi',
      isCompleted: false,
    },
    {
      text: 'Vici',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} /> {/* Add the TodoForm component here */}
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} remove={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
