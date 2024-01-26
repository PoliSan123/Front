import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme
import { Box } from '@mui/material';
import SubscribedHabits from './components/SubscribedHabits';
import SubscriptionsContainer from './components/SubscriptionContainer';
import './index.css';

function App() {
  //Existing tasks
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { id: Date.now(), text, completed: false }];
    setTodos(newTodos);
  };
  
  const [meditationTasks, setMeditationTasks] = useState([
    { id: 1, text: '10 minutes of deep breathing', completed: false },
    { id: 2, text: '15 minutes of mindfulness', completed: false }
  ]);

  // Function to toggle task completion
  const toggleMeditationTask = id => {
    const newTasks = meditationTasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setMeditationTasks(newTasks);
  };
  const toggleTodo = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const updateTodoText = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <div classname="Main">
            <SubscriptionsContainer 
        habitName="Meditation" 
        tasks={meditationTasks} 
        toggleTask={toggleMeditationTask} 
      />

    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} updateTodoText={updateTodoText} deleteTodo={deleteTodo} />
    </Box>
    </div>
    </ThemeProvider>
    
  );
}

export default App;