import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoItem.css';

function TodoItem({ todo, toggleTodo, updateTodoText, deleteTodo }) {
  const [isLongPressed, setIsLongPressed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  // Handle long press
  let timer;
  const handleLongPress = () => {
    timer = setTimeout(() => setIsLongPressed(true), 1000); // 1 second for long press
  };

  const handleRelease = () => {
    clearTimeout(timer);
    if (!isLongPressed) {
      setIsEditing(false);
    }
  };

  // Handle edit
  const handleEdit = () => {
    setIsEditing(true);
    setIsLongPressed(false);
  };

  // Handle delete
  const handleDelete = () => {
    deleteTodo(todo.id);
    setIsLongPressed(false);
  };

  // Update todo text on blur or Enter key press
  const handleUpdateText = (e) => {
    if (e.type === 'blur' || (e.type === 'keydown' && e.key === 'Enter')) {
      updateTodoText(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <ListItem
      secondaryAction={
        isLongPressed && !isEditing && (
          <>
            <IconButton edge="end" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </>
        )
      }
      dense
    >
      <Checkbox
        checked={todo.completed}
        onClick={() => toggleTodo(todo.id)}
        disableRipple
      />
      {isEditing ? (
        <TextField
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleUpdateText}
          onKeyDown={handleUpdateText}
          autoFocus
          fullWidth
        />
      ) : (
        <ListItemText
          primary={todo.text}
          onMouseDown={handleLongPress}
          onMouseUp={handleRelease}
          onMouseLeave={handleRelease}
          onTouchStart={handleLongPress}
          onTouchEnd={handleRelease}
          className={`${todo.completed ? 'completed' : ''} todoItemText`}
        />
      )}
    </ListItem>
  );
}

export default TodoItem;