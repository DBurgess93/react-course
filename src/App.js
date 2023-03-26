import './App.css';
import Axios from "axios";
// import { User } from './User';
// import { useState } from 'react';
// import { useCounter } from './counter';
// import { useState } from "react";
// import { Task } from "./Task";
// import TaskApp from "./TaskApp";
// import { Text } from './Text';
// import ToggleTextApp from "./ToggleTextApp"

function App() {
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
  });
  return (
    <div className="App">
      <button> Generate Cat fact</button>
      <p>  </p>
    </div>
  )
}

export default App;
