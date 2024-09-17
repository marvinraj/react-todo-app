import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  // in react, useState, as well as any other function starting with “use”, is called a Hook.

  // the useState hook allows us to track state in a function component.
  const [tasks, setTasks] = useState([])

  // function to add a new task
  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask]
    setTasks(newTaskList)
  }

  // function to delete a task
  function handleDeleteTask() {

  }

  // function to edit a task
  function handleEditTask() {
    
  }

  // highest level parent component
  return (
    <>
      { /*render components*/ }
      <TodoInput handleAddTask={handleAddTask}/>
      <TodoList tasks={tasks} />
    </>
  )
}

export default App
