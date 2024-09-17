import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  // in react, useState, as well as any other function starting with “use”, is called a Hook.

  // the useState hook allows us to track state in a function component.
  const [tasks, setTasks] = useState([
    "complete react project",
    "brainstorm another ai coding project",
    "go to the gym"
  ])

  // function to handle adding a new task
  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask]
    setTasks(newTaskList)
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
