import React, { Component } from "react";

export class ClickCounter extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }; */

  render() {
    return (
      <div>
        {/* <button onClick={this.increment}>Clicked: {this.state.count}</button> */}
        <button onClick={this.props.increment}>
          Clicked: {this.props.count}
        </button>
      </div>
    );
  }
}

export default ClickCounter;
