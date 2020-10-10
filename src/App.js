import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import NumberDescriber from "./OddEven";
import MyComponent from "./Message";
import EventHandling from "./EventHandling";

function test() {
  console.log("test");
}

// props -
// state - setState({})
//

function App() {
  return (
    <div>
      {/* <NumberDescriber number={100} /> */}
      {/* <NumberDescriber number={101} /> */}
      {/* <MyComponent message="<3>" /> */}
      {/* <MyComponent message={"<3"} /> */}
      <EventHandling />
    </div>
  );

  /* return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );*/
  /* const H1 = React.createElement("h1", {}, "Hello World!");
  return React.createElement("div", { className: "App" }, H1);*/
}

export default App;
