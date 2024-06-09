import './style.css';
import Home from "./Components/Home"
import React, { useState, createContext } from "react";

export const Context = createContext()



function App() {
  const [btn, setBtn] = useState(true)
  const [addBtn, setAddBtn] = useState(false)
  const [name, setName] = useState("")
  const [isId, setIsId] = useState()
  const [count, setCount] = useState(false)
  const [validateName, setValidateName] = useState([])
  return (
    <Context.Provider value={{ validateName, setValidateName, btn, setBtn, name, setName, addBtn, setAddBtn, isId, setIsId, setCount, count }}>
      <div >
        <Home />
      </div>
    </Context.Provider>



  );
}

export default App;
