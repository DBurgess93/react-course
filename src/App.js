import './App.css';
// import { User } from './User';
import { useState } from 'react';
// import { useCounter } from './counter';
// import { useState } from "react";
// import { Task } from "./Task";
// import TaskApp from "./TaskApp";
import { Text } from './Text';

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
      }}
      >
        Show Text
      </button>

      {showText && <Text />}
    </div>
  )
}

export default App;
