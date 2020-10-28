import React from "react";
import "./App.css";
import ComponentA from "./ComponentA";
import { UserProvider } from "./UserContext";

/* 
 3 steps
 1. create context
 2. provide context
   // globally 


 3. consumption
   --> 

*/

function App() {
  return (
    <UserProvider value={"Vinay"}>
      <div className="App">
        <ComponentA />
      </div>
    </UserProvider>
  );
}

export default App;
