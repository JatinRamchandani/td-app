import React from 'react';

import TaskItem from './TaskItem';
import './TasksList.css';

const TasksList = (props) => {

  if (props.items.length === 0) {
    return <h2 className='tasks-list__fallback'>Found no tasks.</h2>;
  }

  return (
    <div className='tasks-list'>
      {props.items.map((task) => (
          <TaskItem
            id = {task.id}
            key={task.id}
            title={task.title}
            complete={task.completed}
          />
      ))}
    </div>
  );
};

export default TasksList;