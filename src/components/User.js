import React, { Component } from "react";

export class User extends Component {
  render() {
    return (
      <div>
        <div>List of users</div>
        {this.props.users.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map(({ id, name, username }, index) => (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button onClick={this.props.fetchUsers}>Fetch Users</button>
      </div>
    );
  }
}

export default User;
