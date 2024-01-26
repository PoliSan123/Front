import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './AddTodo.css'; // Import the CSS file

function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="addTodoContainer">
      <TextField
        label="New Todo"
        variant="outlined"
        value={value}
        onChange={e => setValue(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
}

export default AddTodo;