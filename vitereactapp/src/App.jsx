import { useState } from "react";
import Button from "./button.jsx"

function App() {

  const [counter, setCounter] = useState(0)

  
  function increase(){
    setCounter(counter + 1)
  }

  function descrease() {
    setCounter(counter - 1)
  }

  console.log(counter);

  return (
    <>
      <h1>Counter {counter} </h1>
      <button onClick={increase}>Inscrease {counter}</button>
      <button onClick={descrease}>Descrease {counter}</button>
    </>
  )
}

export default App