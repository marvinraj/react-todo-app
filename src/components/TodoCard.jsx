import React from 'react'

export default function TodoCard(props) {

  // destructure task out of the props
  const { children, handleDeleteTask, index } = props

  return (
    // each task will be displayed as li
    <li className="taskItem">
      {/*display each task*/}
      {children}
      {/*edit & delete buttons*/}
      <div className="actionBox">
        <button>edit</button>
        <button onClick={() => {handleDeleteTask(index)}}>
          delete
          </button>
      </div>
    </li>
  )
}
