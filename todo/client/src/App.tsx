import { FC, useState, ChangeEvent } from 'react';
import './App.css';
import {ITask} from './Interfaces'
import TodoTask from './TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodo] = useState<ITask[]>([])

  //type of todoList = an array of objects ITask 

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task'){
      setTask(e.target.value)
    }
    else{
      setDeadline(Number(e.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {
      taskName : task, deadline: deadline
    }
    setTodo([...todoList,newTask])
    console.log(todoList)
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskToDel: string): void => {
    setTodo(todoList.filter((task) => {
      return task.taskName !== taskToDel
    })) 
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

      <div className='todoList'>
        {todoList.map((stuff: ITask, key: number) => {
          return <TodoTask item={stuff} completeTask={completeTask} key={key} />
        })}
      </div>
    </div>
  );
}

export default App;
