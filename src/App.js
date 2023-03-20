import './App.css';
// import { User } from './User';
import { Planet } from './Planet';
import { useState } from 'react';

function App() {

  const [textColor, setTextColor] = useState("black");

  return (
    <div className="App">
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Show/Hide
      </button>
      <h1 style={{color: textColor}}> Here's your text, enjoy! </h1>
    </div>
  )

}
  export default App;
