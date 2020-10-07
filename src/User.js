import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

/* export default function User(props) {
     console.log(props);
  // props.children
  // props.name = props.name + "!";
  return (
    <React.Fragment>
      <div>
        Welcome {props.name},age: {props.age}
        {props.children}
      </div>
    </React.Fragment>
  );
} */

export default function User({ name, age, children }) {
  return (
    <React.Fragment>
      <div>
        Welcome {name},age: {age}
        {children}
      </div>
    </React.Fragment>
  );
}

User.propTypes = propTypes;
User.defaultProps = defaultProps;
