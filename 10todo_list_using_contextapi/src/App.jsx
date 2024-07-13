import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <h1 className='text-3xl font-bold underline'>Hello there!</h1>
    </TodoProvider>
  )
}

export default App
