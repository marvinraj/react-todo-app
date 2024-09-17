import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {

  // destructure children out of the props
  const { tasks } = props

  return (
    <ul className='tasks-container'>
      {/*use map to go through each task in the tasks list*/}
      {tasks.map((task, taskIndex) => {
        return(
          // separate component for each tasks will be called here
          <TodoCard key={taskIndex}>
            <p>{task}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}