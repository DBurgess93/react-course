import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return { count, increase, decrease, setToZero };
};


// <<<<<<< Code to go in App.js >>>>>>>>

// import './App.css';
// // import { User } from './User';
// // import { useState } from 'react';
// import { useCounter } from './counter';

// function App() {
//   const { count, increase, decrease, setToZero } = useCounter();

//   return (
//     <div className="App">
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={setToZero}>Set to Zero</button>

//       {count}
//     </div>
//   );
// }

// export default App;
