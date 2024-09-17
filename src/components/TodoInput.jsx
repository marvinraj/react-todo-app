import React, { useState } from 'react'

export default function TodoInput(props) {

    // destructure
    const { handleAddTask, taskValue, setTaskValue } = props
    

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
                setTaskValue('')
            }}>Add</button>
        </header>
    )
}