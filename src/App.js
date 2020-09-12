import React, { useState } from 'react';
import './App.css';
// Import Components
import Form from './components/Form';
import ToDoList from './components/ToDoList';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] =useState([]);
  return (
    <div className="App">
    <header>
  <h1>Fahad's Todo List</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
    <ToDoList />
    </div>
  );
}

export default App;
