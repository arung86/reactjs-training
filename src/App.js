import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomeUser from "./WelcomeUser";
// function Comp
// class Comp
// elements

// static
const HelloWorld = <h2>Hello World!</h2>;

const Button = <button>Submit</button>;

const ButtonComp = ({ name }) => <button>{name}</button>;

const List = (
  <ul>
    <li>1 - One</li>
    <li>2- Two</li>
  </ul>
);

function App() {
  return (
    <div className="App">
      {/* {HelloWorld} {Button}
      {List}
      {Button}
      <ButtonComp name="Login"></ButtonComp>
      <ButtonComp name="Submit Btn"></ButtonComp> */}
      <WelcomeUser />
    </div>
  );
}

export default App;
