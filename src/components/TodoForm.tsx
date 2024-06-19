// src/components/TodoForm.tsx
import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
      <div className='container-fluid'>
          <div className='alert alert-success'>
              <div className='row'>
                  <div className='col'>
                      <label>Enter a Task to Complete</label>
                      <textarea className='form-control'
                          value={todo}
                          onChange={(e) => setTodo(e.target.value)}
                          placeholder="Enter a Description of a Task"
                      />
                  </div>
              </div>
              <div className='col my-2 d-flex justify-content-end'>
                      <button onClick={handleSubmit} className='btn  btn-primary'>
                          Add a new task <i className="fas fa-plus"></i>
                      </button>
                  </div>
          </div>
      </div>
  );
};

export default TodoForm;