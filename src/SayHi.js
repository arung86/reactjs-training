import React from "react";

function SayHi() {
  return (
    <div>
      <SayHi1></SayHi1>
      <SayHi2></SayHi2>
      <SayHi3></SayHi3>
    </div>
  );
}

const SayHi2 = () => <div>sayHi from arrow function</div>;

function SayHi1() {
  return <div>sayHi from regular function</div>;
}

const SayHi3 = function () {
  return <div>sayHi from function expression</div>;
};

export default SayHi;
