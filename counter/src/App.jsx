import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useContext: This hook allows you to access context in functional components.
//    useEffect: This hook allows you to perform side effects in function components, similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.
// useState : allow us to change state
function App() {
  const [counter,setcounter] =useState(0);
  //let counter = 55
  const addValue = ()=>{
    //counter = counter + 1
    if(counter<20)
    {
      setcounter(counter+1);
    }
  }
  const remValue= ()=>{
    if(counter > 0)
    {
      setcounter(counter-1);
    }
  } 
  return (
    <>
    <h1>counter project</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={remValue}>Remove Value</button>
    <footer>Counter: {counter}</footer>
    </>
    
  )
}

export default App
