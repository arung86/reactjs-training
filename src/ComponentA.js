import React, { Component } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import { ThemeConsumer } from "./ThemeContext";

export class ComponentA extends Component {
  render() {
    return (
      <div>
        {/* <ComponentB />
        <ThemeConsumer>
          {(theme) => {
            return "in component A" + theme;
          }}
        </ThemeConsumer> */}
        <ComponentC />
      </div>
    );
  }
}

export default ComponentA;
