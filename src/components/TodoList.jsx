import React from 'react'

export default function TodoList() {
  let tasks = [
    "complete react project",
    "brainstorm another ai coding project",
    "go to the gym"
  ];


  return (
    <ul className='tasks-container'>
      {tasks.map((task, taskIndex) => 
        <li className='task' key={taskIndex}>{task}</li>
      )}
    </ul>
  )
}
