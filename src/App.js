import './App.css';
import { User } from './User';

function App() {
  const users = [
    { name: "Dan", age: 29 },
    { name: "Dill", age: 28 },
    { name: "Adam", age: 30 },
  ];


   return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>
      })}
    </div>
   );
    }
  export default App;
