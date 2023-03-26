import './App.css';
import Axios from "axios";
import { useState } from 'react';
// import { User } from './User';
// import { useCounter } from './counter';
// import { useState } from "react";
// import { Task } from "./Task";
// import TaskApp from "./TaskApp";
// import { Text } from './Text';
// import ToggleTextApp from "./ToggleTextApp"

function App() {
  const [excuse, setExcuse] = useState("");
  const fetchData = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/party/`).then((res) => {
    setExcuse(res.data[0].excuse);
      });
  };

  return (
    <div className="App">
      <h1> Generate an Excuse </h1>
      <button onClick={fetchData}>Party</button>
      <button>Family</button>
      <button>Office</button>

      <p> {excuse} </p>
    </div>
  );
}

export default App;
