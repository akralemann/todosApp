import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de into a React', completed: false },
  { text: 'Llorar por la llorona', completed: false },
]

function App() {
  return (
    <>
  <TodoCounter />
    
  <TodoSearch />
    
    <TodoList>
      { todos.map(todo => (
        <TodoItem  key={ todo.text } text={ todo.text } />
      )) }
    </TodoList>
    <CreateTodoButton />
    
    </>
  );
}

export default App;
