import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Daniel"
        email="dan-burgess@hotmail.com"
        age={29}
        isMarried={true}
        friends={["Ray", "Christina", "Willie"]}
        country={Country.Australia}
      />
    </div>
  );
}

export default App;
