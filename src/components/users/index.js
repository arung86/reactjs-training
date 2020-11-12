import React, { Component } from "react";
import Table from "../Table";
export class User extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers();
    }
  }
  render() {
    return (
      <div>
        <div>List of users</div>
        <Table users={this.props.users} />
      </div>
    );
  }
}

export default User;
