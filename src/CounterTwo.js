import React, { useState, useEffect } from "react";

// use
export default function CounterTwo() {
  //
  const [counter, setCounter] = useState(0);
  const [showCounter, setShow] = useState(true);
  const [user, setUser] = useState({ firstName: "", lastName: "", dob: "" });
  const [users, setUsers] = useState([]);
  // class

  // componentDidUpdate
  //
  useEffect(() => {
    console.log("counter", counter);
    document.title = "You have clicked" + counter + " times";
  });

  return (
    <div>
      {showCounter && (
        <>
          hook counter: {counter}
          <button onClick={() => setCounter(counter + 1)}>Count</button>
        </>
      )}
      <button onClick={() => setShow(!showCounter)}>Toggle</button>
    </div>
  );
}
