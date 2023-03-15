import './App.css';

function App() {
  const age = 14;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1>OVERAGE</h1> : <h1>UNDERAGE</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>

      {isGreen && <button>Here's a button</button>}
    </div>
  )
}

  export default App;




  // //   return (
  // //     <div className="App">
  // //       <User name="Hamish" age={14} email="hamish@email.com" />
  // //       <User name="Lucy" age={15} email="lucy@email.com" />
  // //       <User name="Beth" age={13} email="beth@email.com" />
  // //     </div>
  // //   );
  // // }

  // // const User = (props) => {
  // //   return (
  // //     <div>
  // //       <h1>{props.name}</h1>
  // //       <h1>{props.age}</h1>
  // //       <h1>{props.email}</h1>
  // //     </div>
  // //   );

  //   return (
  //     <div className="App">
  //       <Job salary={90000} position="Senior SDE" company="Amazon" />
  //       <Job salary={12000} position="Junior SDE" company="Google" />
  //       <Job salary={10000} position="Project Manager" company="Netflix" />
  //     </div>
  //   );
  // };

  // const Job = (props) => {
  //   return (
  //     <div>
  //       <h1>{props.position}</h1>
  //       <h2>{props.company}</h2>
  //       <h2>{props.salary}</h2>
  //       <br/>
  //     </div>
  //   )
  // }
