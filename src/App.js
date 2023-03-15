import './App.css';

function App() {

  return (
    <div className="App">
      <User name="Hamish" age={14} email="hamish@email.com" />
      <User name="Lucy" age={15} email="lucy@email.com" />
      <User name="Beth" age={13} email="beth@email.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
