import React from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./CounterOne";
import CounterTwo from "./CounterTwo";
import HookForm from "./HookForm";
import HookCounter from "./HookCounter";

function App() {
  return (
    <div className="App">
      {/* <CounterOne />
      <CounterTwo /> */}
      <HookForm />
      <HookCounter />
    </div>
  );
}

export default App;
