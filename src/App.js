import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import LifecycleMethods from "./LifecycleMethods";
import ComponentUpdate from "./ComponentUpdate";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <LifecycleMethods /> */}
      show: {show ? "true" : "false"}
      {/* {show ? <ComponentUpdate /> : null} */}
      <ComponentUpdate />
      <input
        type="button"
        onClick={() => setShow((prevShow) => !prevShow)}
        value="Show/Hide"
      />
    </div>
  );
}

export default App;
