import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./ClickCounter";
import MouseOverCounter from "./MouseOverCounter";
import User from "./User";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      {/* <ClickCounter /> */}
      {/* <MouseOverCounter /> */}
      <User render={(msg) => <h3>{msg + "React"}</h3>} />

      <Counter
        render={(count, increment) => (
          <ClickCounter count={count} increment={increment} />
        )}
      />

      <Counter
        render={(count, increment) => (
          <MouseOverCounter count={count} increment={increment} />
        )}
      />
    </div>
  );
}

// render prop
//
export default App;
