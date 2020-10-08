import React, { useState } from "react";

// react, they can not have state
// dumb components
// presentational
// class, 16.5 hooks
export default function Welcome() {
  const [message, setMessage] = useState("Login!");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>
        {message}, isLoggedIn: {isLoggedIn ? "true" : "false"}
      </h3>
      <button
        onClick={() => {
          setMessage("Welcome!");
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
    </div>
  );
}
