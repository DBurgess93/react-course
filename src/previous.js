
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

// const [textColor, setTextColor] = useState("black");

// return (
//   <div className="App">
//     <button
//       onClick={() => {
//         setTextColor(textColor === "black" ? "red" : "black");
//       }}
//     >
//       Show/Hide
//     </button>
//     <h1 style={{color: textColor}}> Here's your text, enjoy! </h1>
//   </div>
// )


// Using Inline Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// return (
//   <div className="App">
//     <button
//       onClick={() => {
//         setCount(count + 1);
//       }}
//     >
//       Increase
//     </button>
//     <button
//       onClick={() => {
//         setCount(count - 1);
//       }}
//     >
//       Decrease
//     </button>
//     <button
//       onClick={() => {
//         setCount(0);
//         console.log(count)
//       }}
//     >
//       Set to Zero
//     </button>

//     {count}
//   </div>
// )

// Using normal functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1)
//   };
//   const decrease = () => {
//     setCount(count - 1)
//   };
//   const setToZero = () => {
//     setCount(0)
//   };

//   return (
//     <div className="App">
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={setToZero}>Set to Zero</button>

//       {count}
//     </div>
//   )


// <<<<<< Using API's >>>>>>
// <<<<<< Fetching - simple way >>>>>>>
// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })

// <<<<<< Using Axios - not reccomended for latest verison of REACT >>>>>>>
// <<<<<< Use without Strict Mode to stop loading twice >>>>>>
// const [catFact, setCatFact] = useState("");

// useEffect(() => {
//   Axios.get("https://catfact.ninja/fact").then((res) => {
//     setCatFact(res.data.fact);
//   });
// }, []);

// <<<<<< Age Predictor >>>>>>
  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(null);
  // const fetchData = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictedAge(res.data)
  //     console.log(res.data)
  //   })
  // };

  // return (
  //   <div className="App">
  //     <input
  //       placeholder="your name..."
  //       onChange={(event) => {
  //         setName(event.target.value);
  //       }}
  //     />
  //     <button onClick={fetchData}> Predict Age </button>
  //     <h1> Name: {predictedAge?.name ? predictedAge?.name.charAt(0).toUpperCase()
  //       + predictedAge?.name.slice(1) : ""}
  //     </h1>
  //     <h1> Predicted Age: {predictedAge?.age}</h1>
  //     <h1> Count: {predictedAge?.count}</h1>
  //   </div>
  // );

  // <<<<<< API EXCUSES my code >>>>>>
  // const [occ, setOcc] = useState("")
  // const [excuse, setExcuse] = useState("");
  // const fetchData = () => {
  //   Axios.get(`https://excuser-three.vercel.app/v1/excuse/${occ.toLowerCase()}/`).then((res) => {
  //   setExcuse(res.data[0].excuse);
  //   console.log(res.data[0].excuse);
  //     });
  // };

  // useEffect(() => {
  //   if (occ !== "") {
  //     fetchData();
  //   }
  // }, [occ]);

  // const handleButtonClick = (event) => {
  //   const newOcc = (event.target.textContent);
  //   setOcc(newOcc);
  // };

  // return (
  //   <div className="App">
  //     <h1> Generate an Excuse </h1>
  //     <button onClick={handleButtonClick}>Party</button>
  //     <button onClick={handleButtonClick}>Family</button>
  //     <button onClick={handleButtonClick}>Office</button>

  //     <p> {excuse} </p>
  //   </div>
  // );

  // <<<<<< REFACTORED >>>>>>>
  //  Static way ---   <button onClick={() => fetchData("party")}>Party</button>

//   const [excuse, setExcuse] = useState("");
//   const fetchData = (excuse) => {
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
//     setExcuse(res.data[0].excuse);
//       });
//   };

//   const handleClick = (event) => {
//     const occ = event.target.textContent.toLowerCase();
//     fetchData(occ);
//   };

//   return (
//     <div className="App">
//       <h1> Generate an Excuse </h1>
//       <button onClick={handleClick}>Party</button>
//       <button onClick={handleClick}>Family</button>
//       <button onClick={handleClick}>Office</button>
//       <p> {excuse} </p>
//     </div>
//   );
// }
