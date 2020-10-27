import React, { useState } from "react";

export default function HookForm() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const initialState = { firstName: "", lastName: "" };
  const [state, setForm] = useState(initialState);

  // const handleFirstName = (e) => {
  //   setForm({ ...state, firstName: e.target.value });
  //   // this.setState({firstName:}) merge the changes
  //   // take the existing and update
  // };
  // const handleLastName = (e) => {
  //   setForm({ ...state, lastName: e.target.value });
  // };

  //    handleLastName

  const handleName = (e) => {
    setForm({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div>
        FirstName: 
        <input value={state.firstName} name="firstName" onChange={handleName} />
        <br />
        LastName: 
        <input value={state.lastName} name="lastName" onChange={handleName} />
      </div>
      {JSON.stringify(state)}
    </div>
  );
}

// current information
