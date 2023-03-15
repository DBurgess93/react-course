import './App.css';

function App() {
  const names = ["Dan", "Dill", "Jackson", "Adam", "Tom", "Terry"];


   return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 key={key}> {name} </h1>;
      })}
    </div>
   );
}

  export default App;
