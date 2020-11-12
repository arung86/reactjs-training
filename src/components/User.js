import React, { Component } from "react";
import Table from "./Table";
export class User extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <div>List of users</div>
        <Table users={this.props.users} />
        {/* <button onClick={this.props.fetchUsers}>Fetch Users</button> */}
      </div>
    );
  }
}

export default User;
