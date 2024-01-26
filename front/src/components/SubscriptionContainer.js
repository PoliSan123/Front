import React from 'react';
import SubscribedHabits from './SubscribedHabits';
import { Paper } from '@mui/material';

function SubscriptionsContainer({ habitName, tasks, toggleTask }) {
  return (
    <Paper style={{ padding: '20px', margin: '20px 0', backgroundColor: '#f5f5f5' }}>
      <SubscribedHabits habitName={habitName} tasks={tasks} toggleTask={toggleTask} />
    </Paper>
  );
}

export default SubscriptionsContainer;