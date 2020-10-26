import React, { Component } from "react";

export class CounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showCounter: true,
    };

    // js class
    // class members
    this.api = "jsonplaceholder.com";
  }
  componentDidUpdate() {
    console.log("counter", this.state.counter);
    console.log(this.api);
    document.title = "You have clicked" + this.state.counter + " times";
  }
  // lifecycle state change

  render() {
    return (
      <div>
        {/* counter: {this.state.counter} */}

        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Count
        </button>
        {/* <button
          onClick={() =>
            this.setState({ showCounter: !this.state.showCounter })
          } 
        ></div>
          toggle counter
        </button>*/}
      </div>
    );
  }
}

export default CounterOne;
