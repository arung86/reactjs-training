import React, { Component } from "react";
// import Counter from "./Counter";

const withCounter = (InputComponent) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    increment = () => {
      // this.setState({ count: this.state.count + 1 });
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <InputComponent
          count={this.state.count}
          increment={this.increment}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
