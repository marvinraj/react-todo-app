import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  // in react, useState, as well as any other function starting with “use”, is called a Hook.

  // the useState hook allows us to track state in a function component.
  // tasks --> current state of the list
  // setTasks --> a function that updates the state
  const [tasks, setTasks] = useState([])
  const [taskValue, setTaskValue] = useState('')

  // function to add a new task
  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask]
    setTasks(newTaskList)
  }

  // function to delete a task
  // callback function in filter --> returns true (current element is included in new array),
  // returns false (the element is excluded).
  function handleDeleteTask(index) {
    const newTaskList = tasks.filter((task, taskIndex) => {
      // return true to keep the element, false otherwise
      return taskIndex !== index
    })
    setTasks(newTaskList)
  }

  // function to edit a task
  function handleEditTask(index) {
    const valueToEdit = tasks[index]
    setTaskValue(valueToEdit)
    handleDeleteTask(index)
  }

  // highest level parent component
  return (
    <>
      { /*render components*/ }
      <TodoInput taskValue={taskValue} setTaskValue={setTaskValue} handleAddTask={handleAddTask}/>
      <TodoList handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} tasks={tasks} />
    </>
  )
}

export default App
