import React from 'react'
import { Props } from './Interfaces'

const TodoTask = ({item, completeTask}: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{item.taskName}</span>
        <span>{item.deadline.toString()}</span>
      </div>
      <button onClick={()=> {completeTask(item.taskName)}}>X</button>
    </div>
  )
}

export default TodoTask

