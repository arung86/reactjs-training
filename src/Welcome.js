import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        Its welcome! {this.props.name}, age: {this.props.age}
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
