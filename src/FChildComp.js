import React from "react";

function FChildComp() {
  console.log("this is in functional child");
  return <div></div>;
}

export default React.memo(FChildComp);
