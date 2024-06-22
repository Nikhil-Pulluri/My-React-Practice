import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleEvent = () => {
    setCount((prevCount)=> prevCount+1)
    setCount((prevCount)=> prevCount+1)
    setCount((prevCount)=> prevCount+1)
  }


  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() =>setCount((prevCount)=> prevCount+1)}>Add</button>
      <button onClick={()=> setCount((prevCount)=> prevCount-1)}>Remove</button>
      <button onClick={handleEvent}>Update by 3+</button>


    </>
  )
}

export default App
