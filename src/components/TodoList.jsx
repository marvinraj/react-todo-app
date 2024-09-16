import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList() {
  let tasks = [
    "complete react project",
    "brainstorm another ai coding project",
    "go to the gym"
  ];


  return (
    <ul className='tasks-container'>
      {tasks.map((task, taskIndex) => {
        return(
          <TodoCard key={taskIndex}>
            <p>{task}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
