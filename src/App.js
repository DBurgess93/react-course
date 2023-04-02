import "./App.css";
import React from 'react';
import { useCount } from "./useCount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const { count, increase, decrease, restart } = useCount();
  return (
    <div className="App">
      {count}
      <button onClick={increase}> Increase</button>
      <button onClick={decrease}> Decrease</button>
      <button onClick={restart}> restart</button>
    </div>
  );
}

export default App;
