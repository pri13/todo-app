import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
    // Initialize the state
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
      // Use the state updater function to update the state
    setTodos([...todos, todo]);
  };

  const removeTodo = (index: number) => {
        // Use the state updater function to update the state
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className='text-center display-4 mt-2 mb-2'>Manage To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;