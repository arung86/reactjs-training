import React, { useEffect, useState } from "react";

export default function HookCounter() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);
  const [name, setName] = useState("");

  //
  useEffect(() => {
    //console.log("counter", counter);
    // console.log("change in the name");
    console.log("state got changed");
    // document.title = "You have clicked" + counter + " times";
  }, [name, counter]);

  // useEffect - didMount, compoDidUpdate, willUnmount

  return (
    <div>
      counter : {counter}
      <button onClick={() => setCounter(counter + 1)}>Click Counter</button>
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
