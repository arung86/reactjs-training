import React from "react";

export default function Message(props) {
  console.log("in Message comp");
  return <div>{props.message}</div>;
}
