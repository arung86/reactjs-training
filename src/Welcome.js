import React, { Component } from "react";
import Consumer from "./Consumer";

export class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "Ali",
    };
  }

  render() {
    return (
      <div>
        {/* Welcome {this.props.children(this.state.user)} */}
        <Consumer />
      </div>
    );
  }
}

export default Welcome;
