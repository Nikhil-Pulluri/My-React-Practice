import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItems } from './components/index'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === todo.id? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }



  // for getting the list form the local storage
  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0)
    {
      setTodos(todos)
    }
  }, [])


  // for setting the things inside the local storage
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <TodoForm/>
      {
        todos.map((todo)=>( 
        <div key={todo.id}><TodoItems todo = {todo} /></div>))
      }
    </TodoProvider>
  )
}

export default App
