import React, { Component } from "react";
// props, immutable
// message = {}
// isLoggedIn
class Login extends Component {
  constructor() {
    super();
    this.state = {
      message: "Please Login!",
      isLoggedIn: false,
    };
  }
  onLogin() {
    this.setState({
      message: "Welcome User!",
      isLoggedIn: true,
    });
    console.log("clicked login btn");
  }
  onLogout() {
    this.setState({
      message: "Please Login!",
      isLoggedIn: false,
    });
    console.log("clicked logout btn");
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {this.state.isLoggedIn ? (
          <button onClick={() => this.onLogout()}>Logout</button>
        ) : (
          <button onClick={() => this.onLogin()}>Login</button>
        )}
      </div>
    );
  }
}

export default Login;
