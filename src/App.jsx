import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  { /*highest level parent component*/ }
  return (
    <main>
      { /*render components*/ }
      <TodoInput />
      <TodoList />
    </main>
  )
}

export default App
