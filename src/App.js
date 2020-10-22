import React from "react";
import "./App.css";
import ComponentA from "./ComponentA";

/* 
 3 steps
 1. create context
 2. provide context
   // globally 
 3. consume

*/

function App() {
  return (
    <div className="App">
      <ComponentA />
    </div>
  );
}

export default App;
