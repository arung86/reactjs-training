import React from "react";
import logo from "./logo.svg";
import FormExample from "./Form";
import "./App.css";

const header = {
  fontSize: "32px",
};

function App() {
  function formSubmitted(form) {
    console.log("form submitted", form);
  }

  return (
    <div className="App">
      <FormExample submitHandler={formSubmitted} />
    </div>
  );
}

export default App;
