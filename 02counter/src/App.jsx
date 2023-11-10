import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = ()=>{
    if(counter<20){
    counter=counter+1;                          //Increament by 1
    setCounter(counter);
    // setCounter((prevCounter)=>prevCounter+1)               //Take callback function and take previous values of counter in prevCounter.
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
  }
  }

  const removeValue = ()=>{
    if(counter>=1){
    counter=counter-1
    setCounter(counter)
      }  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value :{counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
