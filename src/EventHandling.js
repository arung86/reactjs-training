import React, { Component } from "react";
import Message from "./Message";

export default class EventHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    console.log("btn clicked");
    //  , obj
    this.setState({ isClicked: true });
  };
  // 4 methods / ways
  // re render
  render() {
    // console.log("I am in render");
    return (
      <div>
        {/* <button onClick={this.handleClick.bind(this)}>Click Me!</button> */}
        {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
        <button onClick={this.handleClick}>Click Me</button>
        <Message clicked={this.state.isClicked} />
      </div>
    );
  }
}

/* export default class EventHandling extends Component {

  handleClick() {
    console.log("btn clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
} 
*/
