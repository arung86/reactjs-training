import React, { Component } from "react";
import withCounter from "./withCounter";

export class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={this.props.increment}>
          Counter: {this.props.count}
        </button>
      </div>
    );
  }
}

export default withCounter(Counter);
// filesize
// compilation time
// maintain
//
