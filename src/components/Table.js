import React from "react";

export default ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
      </tr>
    </thead>

    <tbody>
      {users.map(({ id, name, username }, index) => (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
