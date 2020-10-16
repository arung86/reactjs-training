import React, { Component } from "react";

export class LifecycleMethodChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Inside Constructor method: LifecycleMethodChild");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedStateFromProps method: LifecycleMethodChild");
    return null;
  }

  componentDidMount() {
    console.log("Inside componentDidMount method: LifecycleMethodChild");
  }

  render() {
    console.log("Inside Render method: LifecycleMethodChild");
    return <div>Hello I m in render Child</div>;
  }
}

export default LifecycleMethodChild;
