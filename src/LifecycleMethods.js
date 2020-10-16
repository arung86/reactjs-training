import React, { Component } from "react";

import Child from "./LifeCycleMethodChild";

export class LifecycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Inside Constructor method: Parent");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedStateFromProps method: Parent");
    return null;
  }

  componentDidMount() {
    console.log("Inside componentDidMount method: Parent");
  }

  shouldComponentUpdate(nexState, nextProps) {
    return false;
  }

  getSnapshotBeforeUpdate() {}

  render() {
    console.log("Inside Render method: Parent");
    return (
      <div>
        <p>Hello I m in render</p>
        <Child />
      </div>
    );
  }
}

export default LifecycleMethods;
