
// Components & Props >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// return (
//   // //     <div className="App">
//   // //       <User name="Hamish" age={14} email="hamish@email.com" />
//   // //       <User name="Lucy" age={15} email="lucy@email.com" />
//   // //       <User name="Beth" age={13} email="beth@email.com" />
//   // //     </div>
//   // //   );
//   // // }

//   // // const User = (props) => {
//   // //   return (
//   // //     <div>
//   // //       <h1>{props.name}</h1>
//   // //       <h1>{props.age}</h1>
//   // //       <h1>{props.email}</h1>
//   // //     </div>
//   // //   );

//   //   return (
//   //     <div className="App">
//   //       <Job salary={90000} position="Senior SDE" company="Amazon" />
//   //       <Job salary={12000} position="Junior SDE" company="Google" />
//   //       <Job salary={10000} position="Project Manager" company="Netflix" />
//   //     </div>
//   //   );
//   // };

//   // const Job = (props) => {
//   //   return (
//   //     <div>
//   //       <h1>{props.position}</h1>
//   //       <h2>{props.company}</h2>
//   //       <h2>{props.salary}</h2>
//   //       <br/>
//   //     </div>
//   //   )
//   // }


// Conditional Rendering >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function App() {
//   const age = 14;
//   const isGreen = true;

//   return (
//     <div className="App">
//       {age >= 18 ? <h1>OVERAGE</h1> : <h1>UNDERAGE</h1>}
//       <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>

//       {isGreen && <button>Here's a button</button>}
//     </div>
//   )
// }

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

// const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age + 1);
//   };

//   return <div className="App">
//     {age}
//     <button onClick={increaseAge}> Increase Age</button>
//   </div>

// const [showText, setShowText] = useState(true);

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setShowText(!showText)
//         }}
//       >
//         Show/Hide
//       </button>
//       {showText && <h1> Here's your text, enjoy! </h1>}
//     </div>
//   )
