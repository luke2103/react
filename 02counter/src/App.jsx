import { useState,useEffect } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () => {
    
    if(counter<20)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
    // setCounter(counter + 1)  GIVES COUNT AS 16 ONLY BECAUSE IT'LL GO AS  A BUNCH OF PACKAGE AND REACT WILL TAKE IT AS ONE ONLU
      
      //IF USECASE IS TO INCREASE IT YOU SHOULD TAKE PREVCOUNTER VALUE AND UPDATE IT HERE IT WILL WORK BECAUSE OF PREVCOUNTER VALUE 
    {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)}
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
