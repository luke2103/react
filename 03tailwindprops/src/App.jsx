import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'

function App() {

  let myObj = {
    age : 21,
    username:"hitesh"
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4' >Tailwind Test</h1>
      <Card username="chaiaurcode" btntext="click me" />
      <Card  username="hitesh"  />
    </>
  )
}

export default App
