import React, { useState } from 'react'

export default function TodoInput(props) {

    // destructure
    const { handleAddTask } = props
    const [taskValue, setTaskValue] = useState('')
    
    return (
        <header>
            {/*title*/}
            <h2>Yo' TodoList</h2>

            { /*user input*/ }
            <input value={taskValue} onChange={(e) => {
                setTaskValue(e.target.value)
            }} placeholder='Enter a task...'/>

            { /*button*/ }
            <button onClick={() => {
                handleAddTask(taskValue)
            }}>Add</button>
        </header>
    )
}