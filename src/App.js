import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';
// import { User } from './User';
// import { useCounter } from './counter';
// import { useState } from "react";
// import { Task } from "./Task";
// import TaskApp from "./TaskApp";
// import { Text } from './Text';
// import ToggleTextApp from "./ToggleTextApp"

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);

  return (
    <div className="App">
      <button> Generate Cat fact</button>
      <p> {catFact} </p>
    </div>
  )
}


export default App;
