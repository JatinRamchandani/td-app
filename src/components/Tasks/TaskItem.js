import React from 'react';

import Card from '../UI/Card';
import './TaskItem.css';
import { useState } from 'react';

const TaskItem = (props) => {

  const [done, setdone] = useState(false);
  const [del, setdel] = useState(false);

  const doneHandler = () => {
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        completed: !done
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(reponse => {
        console.log(reponse.json());
        // console.log()
      })
      setdone(!done);
  }

  const setDelHander = () => {
    setdel(true);
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}`)
      .then(reponse => {
        console.log(reponse.json());
      })
  }

  return (
    <>
      {!del && <div className='around' >
        <h3>{props.id}.</h3>
        <li>
          <Card className={'task-item'}>
            {done && <img src={require('../assets/tickmark.png')}></img>}
            <div className={"task-item__description" + (done ? " done" : "")}  >
              <h2>{props.title}</h2>
              <div className='line'></div>
              <button type='submit' className={done ? "check" : "mark-as-com"} onClick={doneHandler}>Mark as completed</button>
              <button type='submit' className='delete' onClick={setDelHander} >Delete</button>
            </div>
          </Card>
        </li>
      </div>}
    </>
  );
};

export default TaskItem;