import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Fragment from "./Fragment";
import Table from "./Table";

const Child = () => <div>Its child</div>;
function App() {
  return (
    <React.Fragment className="App">
      {/* <Fragment /> */}
      {/* <Child /> */}
      <Table />
    </React.Fragment>
  );
}

export default App;
