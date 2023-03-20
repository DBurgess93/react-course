import './App.css';
// import { User } from './User';
// import { useState } from 'react';
import { useCounter } from './counter';

function App() {
  const { count, increase, decrease, setToZero } = useCounter();

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;
