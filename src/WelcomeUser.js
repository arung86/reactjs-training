import React, { Component } from "react";

export class WelcomeUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome User!</div>;
    // } else {
    //   return <div>Please login!</div>;
    // }
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome User!</div>;
    // } else {
    //   message = <div>Please login!</div>;
    // }
    // return <div>{message}</div>;
    /* return (
      <>
        {this.state.isLoggedIn ? (
          <div>Welcome User!</div>
        ) : (
          <div>Please login!</div>
        )}
      </>
    ); */
    return <div>{this.state.isLoggedIn && <div>Welcome User!</div>}</div>;
  }
}

export default WelcomeUser;
