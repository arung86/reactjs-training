import React, { PureComponent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import LifecycleMethods from "./LifecycleMethods";
import ChildComponent from "./ComponentUpdate";
import PureChildComp from "./PureChildComp";
import FChildComp from "./FChildComp";
import RefInput from "./RefInput";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* {show ? <ComponentUpdate /> : null} */}
      {/* <LifecycleMethods />
      show: {show ? "true" : "false"}
      
      <ChildComponent />
      <PureChildComp show={show} />
      <FChildComp />
      <input
        type="button"
        onClick={() => setShow((prevShow) => !prevShow)}
        value="Show/Hide"
      /> */}
      <RefInput />
    </div>
  );
}

export default App;
