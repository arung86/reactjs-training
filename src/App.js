import React from "react";
import "./App.css";
// import Button from "./Button";
import { FButton, CButton } from "./Button";

const Submit = <button>Hello !</button>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3> Welcome !</h3>
        <FButton />
        <CButton />
        {Submit}
      </header>
    </div>
  );
}

export default App;
