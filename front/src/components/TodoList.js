import React from 'react';
import TodoItem from './TodoItem';
import List from '@mui/material/List';
import './TodoList.css'; 

function TodoList({ todos, toggleTodo, updateTodoText, deleteTodo }) {
  return (
    <div className="todoListContainer">
      <List>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleTodo={toggleTodo} 
            updateTodoText={updateTodoText} 
            deleteTodo={deleteTodo} 
          />
        ))}
      </List>
    </div>
  );
}

export default TodoList;