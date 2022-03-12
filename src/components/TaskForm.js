import React, { useState } from 'react';

import './TaskForm.css';

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  };


  function addTaskHandler(task){
    fetch('https://jsonplaceholder.typicode.com/todos',{
      method:'POST',
      body: JSON.stringify(task),
      headers:{
        'Content-Type':'application/json'
      }}).then(reponse=>{
        console.log(reponse.json());
      })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const task = {
      userId: 100001,
      id:10,
      title: enteredTitle,
      completed: false
    };
    addTaskHandler(task);
    props.onSaveTaskData(task);
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <input 
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder="Enter the task here"
          />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Submit</button>
        </div>
      </div>

    </form>
  );
};

export default TaskForm;