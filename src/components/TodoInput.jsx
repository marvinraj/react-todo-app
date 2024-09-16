import React from 'react'

export default function TodoInput() {
    return (
        <header>
            { /*title*/ }
            <h2>Yo' TodoList</h2>

            { /*user input and button*/ }
            <input placeholder='Enter a task...'/>
            <button type='button'>Add</button>
        </header>
    )
}