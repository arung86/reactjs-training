import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import MouseOver from "./MouseOver";

function App() {
  return (
    <div className="App">
      <Counter name="Click" />
      <MouseOver name="Mouse" />
    </div>
  );
}
/*
function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment = () => {
     setCounter1((prevCount) => prevCount + 1);
     setCounter2((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <Counter counter={counter1} increment={increment} />
      <MouseOver counter={counter2} increment={increment}  />
      
    </div>
  );
}
*/
export default App;

//export default React.memo(FChild)

// Higher order functions
