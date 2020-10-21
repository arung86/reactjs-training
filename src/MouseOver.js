import React, { Component } from "react";
import withCounter from "./withCounter";

export class MouseOver extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <h3 onMouseOver={this.props.increment}>Counter: {this.props.count}</h3>
      </div>
    );
  }
}

export default withCounter(MouseOver);
// key
//
