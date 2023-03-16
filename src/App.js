import './App.css';
// import { User } from './User';
import { Planet } from './Planet';

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1>
        )}
    </div>
  );
}

// const users = [
//   { name: "Dan", age: 29 },
//   { name: "Dill", age: 28 },
//   { name: "Adam", age: 30 },
// ];

//  return (
//   <div className="App">
//     {users.map((user, key) => {
//       return <User name={user.name} age={user.age}/>
//     })}
//   </div>
//  );
  export default App;
