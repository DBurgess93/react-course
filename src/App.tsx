import React from 'react';
import './App.css';
import {Person} from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Daniel"
        email="dan-burgess@hotmail.com"
        age={21}
        isMarried={true}
        friends={["Ray", "Christina", "Willie"]}
      />
    </div>
  );
}

export default App;
