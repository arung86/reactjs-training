import React, { Component } from "react";
import { ThemeConsumer } from "./ThemeContext";

export class ComponentB extends Component {
  render() {
    return (
      <div>
        <ThemeConsumer>
          {(theme) => {
            return theme;
          }}
        </ThemeConsumer>
      </div>
    );
  }
}

export default ComponentB;
