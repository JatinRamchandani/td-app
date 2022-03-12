import logo from './logo.svg';
// import './App.css';
import { React, useEffect, useState } from 'react';
import NewTask from './components/NewTask';
import Tasks from './components/Tasks/Tasks'
import './App.css'

const DUMMY_Tasks = [];


function App() {

  const [tasks, setTasks] = useState(DUMMY_Tasks);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        return response.json();
      }).then((data) => {
        let topdata = [];
        for (let i = 0; i < 50; i++) {
          topdata.push(data[i]);
        }
        setTasks(topdata)
        // console.log(data[0]);
      })
  }, [])

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  return (
    <div>
      <div className='allapp'>
        <NewTask onAddTask={addTaskHandler} />
        <Tasks items={tasks} />
      </div>
    </div>
  );
}

export default App;
