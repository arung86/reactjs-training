import React, { Component } from "react";

export class ComponentUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      counter: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextState.name !== this.state.name) {
    //   return true;
    // }
    // if (nextState.counter !== this.state.counter) {
    //   return true;
    // }
    if (nextState !== this.state) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    // console.log("in did update");
    document.title = `counter clicked ${this.state.counter} times`;
  }

  componentDidMount() {
    // console.log("in didmount");
    document.title = `counter clicked ${this.state.counter} times`;
  }
  componentWillUnmount() {
    // re render
    console.log("inside unmount, component destroyed");
  }

  render() {
    console.log("i am in render");
    return (
      <div>
        name: {this.state.name}, count: {this.state.counter}
        <br />
        <input
          type="text"
          value={this.state.name}
          autofocus
          onChange={(ev) => this.setState({ name: ev.target.value })}
        />
        <br />
        <input
          type="button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          value="Count"
        />
      </div>
    );
  }
}

export default ComponentUpdate;
