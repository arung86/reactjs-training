import React, { Component } from "react";
import { ThemeConsumer } from "./ThemeContext";
import { UserConsumer } from "./UserContext";

const Display = ({ theme, user }) => (
  <div>
    theme: {theme}, user: {user}
  </div>
);

export class ComponentB extends Component {
  render() {
    return (
      <div>
        <ThemeConsumer>
          {(theme) => (
            <UserConsumer>
              {(user) => {
                return (
                  <div>
                    <Display user={user} theme={theme} />
                  </div>
                );
              }}
            </UserConsumer>
          )}
        </ThemeConsumer>
      </div>
    );
  }
}

export default ComponentB;
