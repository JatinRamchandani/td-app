import React, { useState } from 'react';
import './NewTask.css';
import TaskForm from './TaskForm';



const NewTask = (props) => {

 
  const [count, setcount] = useState(51);

  const saveTaskDataHandler = (enteredtaskData) => {
    const taskData = {
      ...enteredtaskData,
      id: count.toString(),
    };
    setcount(count+1);
    props.onAddTask(taskData);

  };
 
  return (
    <div className='new-task'>
        <h3>To-Do List</h3>
        <h4>Add a new task in the list</h4>
        <TaskForm
          onSaveTaskData={saveTaskDataHandler}
        />
        <h4 >Added tasks in to-do list</h4>
    </div>
  );
};

export default NewTask;