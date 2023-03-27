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
  const [excuse, setExcuse] = useState("");
  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
    setExcuse(res.data[0].excuse);
      });
  };

  const handleClick = (event) => {
    const occ = event.target.textContent.toLowerCase();
    fetchData(occ);
  };

  return (
    <div className="App">
      <h1> Generate an Excuse </h1>
      <button onClick={handleClick}>Party</button>
      <button onClick={handleClick}>Family</button>
      <button onClick={handleClick}>Office</button>
      <p> {excuse} </p>
    </div>
  );
}

export default App;
