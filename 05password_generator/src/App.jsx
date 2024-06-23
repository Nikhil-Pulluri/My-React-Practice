import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numeric, setNumeric] = useState(false)
  const [charc, setCharac] = useState(false)
  const [password, setPassword] = useState("")


  const passRef = useRef(null)


  const copy_password_to_clipboard = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }



   const generate_password = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numeric) str+="0123456789"
    if(charc) str+="!@#$%^&*()_+"


    for(let i=1; i<length; i++)
    {
      const char_pos = Math.floor(Math.random()*str.length+1)

      pass+= str.charAt(char_pos)
    }

    setPassword(pass)



   }, [length, numeric, charc]);


   useEffect(()=> {
    generate_password()
   }, [length, numeric, charc])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copy_password_to_clipboard}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <input type="range" name="" id="" min={8} max={30} vlaue={length} className='cursor-pointer' onChange={(e)=> setLength(e.target.value)}/>
        <label htmlFor='length'>Length: {length}</label>


        <div className='flex text-sm gap-x-2'>
        <input type="checkbox" name="" id="" defaultChecked={numeric} onChange={()=> {setNumeric((prev)=>!prev)}}/>
        <label htmlFor='charInput'>Numbers</label>
        </div>


        <div className='flex text-sm gap-x-2'>
        <input type="checkbox" name="" id="" defaultChecked={charc} onChange={()=> {setCharac((prev)=>!prev)}}/>
        <label htmlFor='number'>Charecters</label>
        </div>
        
      </div>

    </div>
  )
}

export default App
