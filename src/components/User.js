import React, { Component } from "react";

export class User extends Component {
  render() {
    return (
      <div>
        <div>List of users {JSON.stringify(this.props.users)}</div>
        <button onClick={this.props.fetchUsers}>Fetch Users</button>
      </div>
    );
  }
}

export default User;
