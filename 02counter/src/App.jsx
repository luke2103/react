import { useState,useEffect } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    
    if(counter<20)
      setCounter(counter + 1)
    // console.log("clicked", counter) 

  }

  const decreaseValue = () => {
   
    if(counter>0)
      setCounter(counter - 1)
    // console.log("clicked", counter) 

  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>

      <br />
      <button onClick={decreaseValue}>Remove Value {counter}</button>

      <footer> footer  {counter}</footer>
    </>
  )
}

export default App
