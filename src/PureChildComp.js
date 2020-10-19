import React, { Component } from "react";

class PureChildComp extends React.PureComponent {
  render() {
    console.log("im in pure child");
    return <div>its in pure</div>;
  }
}

export default PureChildComp;
