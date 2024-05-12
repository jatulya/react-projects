import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodo] = useState([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task'){
      setTask(e.target.value)
      console.log(task)
    }
    else{
      setDeadline(Number(e.target.value))
      console.log(deadline)
    }
  }

  const addTask = (): void => {
    setTodo
  }

  return (
    <div className="App">
      <div className='heading'><h1>BE PRODUCTIVE JAATUZZ</h1></div>

      <div className='header'>
        <div className="inputContainer">
            <input
              type="text"
              placeholder="Task..."
              name="task"
              value={task}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Deadline (in Days)..."
              name="deadline"
              value={deadline}
              onChange={handleChange}
            />
          </div>
          <button onClick={addTask}>Add Task</button>
      </div>

      <div className='todoList'></div>
    </div>
  );
}

export default App;
