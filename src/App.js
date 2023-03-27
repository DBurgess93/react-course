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
  const [occ, setOcc] = useState("")
  const [excuse, setExcuse] = useState("");
  const fetchData = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${occ.toLowerCase()}/`).then((res) => {
    setExcuse(res.data[0].excuse);
    console.log(res.data[0].excuse);
      });
  };

  useEffect(() => {
    if (occ !== "") {
      fetchData();
    }
  }, [occ]);

  const handleButtonClick = (event) => {
    const newOcc = (event.target.textContent);
    setOcc(newOcc);
  };

  return (
    <div className="App">
      <h1> Generate an Excuse </h1>
      <button onClick={handleButtonClick}>Party</button>
      <button onClick={handleButtonClick}>Family</button>
      <button onClick={handleButtonClick}>Office</button>

      <p> {excuse} </p>
    </div>
  );
}

export default App;
