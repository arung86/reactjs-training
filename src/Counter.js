import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment() {
    // this.state.counter += 1; do not modify state directly
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
    /*
     */
    // console.log(this.state.counter); // not having updated value
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Count: {counter}</h2>
        {/* <h2>Count: {this.state.counter}</h2> */}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
