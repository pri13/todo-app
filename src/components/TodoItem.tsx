// src/components/TodoItem.tsx
import React from 'react';

interface TodoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo }) => {
    const cardHeader: React.CSSProperties = {
        background: '#efe7d469',
    };
    
  return (
      <div className='row mx-1 my-3'>
          <div className='col-12'>
              <div className='card rounded  shadow'>
                  <div className='card-header align-items-center d-flex justify-content-between p-2' style={cardHeader} >
                      <div>
                        <span className="bg-success text-white py-1 px-2 rounded fw-bold">{index + 1}.</span>
                      </div>
                      <div>
                          <button className='btn btn-sm btn-success mx-1' onClick={() => removeTodo(index)}>
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className='btn btn-sm btn-danger' onClick={() => removeTodo(index)}>
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                      </div>
                  </div>
                  <div className='card-body'>
                      {todo}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default TodoItem;