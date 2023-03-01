import { useState } from 'react';
import { ToDoForm } from 'components/ToDoForm/ToDoForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }
  
  return (
    <div className="container">
      <ToDoForm addTodo={addTodo} todos={todos} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
