// src/components/TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;