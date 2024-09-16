import React from 'react'

export default function TodoCard(props) {
  // destructure children out of the props
  const { children } = props
  return (
    <li className="taskItem">
      {children}
      <div className="actionBox">
        <p>edit & delete</p>
      </div>
    </li>
  )
}
