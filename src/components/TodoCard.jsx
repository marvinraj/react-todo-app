import React from 'react'

export default function TodoCard(props) {

  // destructure task out of the props
  const { children } = props

  return (
    // each task will be displayed as li
    <li className="taskItem">
      {/*display each task*/}
      {children}
      {/*edit & delete buttons*/}
      <div className="actionBox">
        <button>edit</button>
        <button>delete</button>
      </div>
    </li>
  )
}
