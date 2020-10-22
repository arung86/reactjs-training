import React, { Component } from "react";

export class User extends Component {
  render() {
    return (
      <div>
        {this.props.render("Hello ")}
        {this.props.children}
      </div>
    );
  }
}

export default User;
