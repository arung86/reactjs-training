import React from "react";
import "./App.css";
import SayHi from "./SayHi";
import User from "./User";
import Welcome from "./Welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3> Welcome !</h3>
        {/* <SayHi /> */}
        {/* <User name="Rama" age="10">
          <p>He is programmer in ColdFusion</p>
        </User>
        <User name="Vinay" age="11" />
        <User name="Guna" age="12" /> */}
        <Welcome name="Rama" age="10" />
        <Welcome name="Vinay" age="11">
          <p>He is a fullstack developer</p>
        </Welcome>
        <Welcome name="Guna" age="12" />
      </header>
    </div>
  );
}

export default App;
/* 

 <App>
 <User/>
 </App> */
