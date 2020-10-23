import React, { Component, useContext } from "react";
import { ThemeConsumer } from "./ThemeContext";
import { UserConsumer, UserContext } from "./UserContext";

// hook

// // import React from "react";

// export default function Consumer() {
//   const user = useContext(UserContext);
//   return <div>from consumer in useContext : {user}</div>;
// }

const Display = ({ user, theme }) => (
  <div>
    its display, {user},{theme}
  </div>
);

export class Consumer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("contextType", this.context);
    return (
      <div>
        <UserConsumer>
          {(user) => (
            <ThemeConsumer>
              {(theme) => {
                return <Display user={user} theme={theme} />;
              }}
            </ThemeConsumer>
          )}
        </UserConsumer>
      </div>
    );
  }
}

// Consumer.contextType = UserContext;

export default Consumer;
