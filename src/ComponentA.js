import React, { Component } from "react";
import ComponentB from "./ComponentB";
import { ThemeConsumer } from "./ThemeContext";

export class ComponentA extends Component {
  render() {
    return (
      <div>
        <ComponentB />
        <ThemeConsumer>
          {(theme) => {
            return "in component A" + theme;
          }}
        </ThemeConsumer>
      </div>
    );
  }
}

export default ComponentA;
