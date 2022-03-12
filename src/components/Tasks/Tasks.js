import React, { useState } from 'react';

import Card from '../UI/Card';
import TasksList from './TasksList';
import './Tasks.css';

const Tasks = (props) => {

  return (
    <div>
      <div className='tasks'>
        <TasksList items={props.items} />
      </div>
    </div>
  );
};

export default Tasks;