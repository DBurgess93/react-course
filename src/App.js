import './App.css';
// import { User } from './User';
import { Planet } from './Planet';
import { useState } from 'react';

function App() {

  const [showText, setShowText] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText)
        }}
      >
        Show/Hide
      </button>
      {showText && <h1> Here's your text, enjoy! </h1>}
    </div>
  )

}
  export default App;
