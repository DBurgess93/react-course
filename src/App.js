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
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data)
      console.log(res.data)
    })
  };

  return (
    <div className="App">
      <input
        placeholder="your name..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}> Predict Age </button>
      <h1> Name: {predictedAge?.name ? predictedAge?.name.charAt(0).toUpperCase()
        + predictedAge?.name.slice(1) : ""}
      </h1>
      <h1> Predicted Age: {predictedAge?.age}</h1>
      <h1> Count: {predictedAge?.count}</h1>
    </div>
  );
}

export default App;
