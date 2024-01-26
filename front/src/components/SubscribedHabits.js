import React from 'react';
import { Card, Typography, List, ListItem, Checkbox } from '@mui/material';

function SubscribedHabits({ habitName, tasks, toggleTask }) {
  return (
    <Card style={{ padding: '10px', marginBottom: '20px', backgroundColor: '#6A5ACD' }}>
      <Typography variant="h6">{habitName}</Typography>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id} dense button onClick={() => toggleTask(task.id)}>
            <Checkbox
              checked={task.completed}
              disableRipple
            />
            <Typography style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default SubscribedHabits;