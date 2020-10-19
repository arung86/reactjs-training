import React, { Component } from "react";

class RefInput extends Component {
  constructor(props) {
    super(props);
    this.refInput = React.createRef();
    // calback ref
  }

  componentDidMount() {
    // rendered
    // console.log(this.refInput.current);
    // document.querySelector('input');
    this.refInput.current.focus();
    console.log(this.refInput.current.value);
    // react
    // UI - efficent
  }
  render() {
    return (
      <div>
        <input type="text" value="RCB" ref={this.refInput} />
      </div>
    );
  }
}

export default RefInput;
