/* 
 integrate form post with axios POST method using JSON Placeholder

 need to capture userID, title, body as input

*/

import React, { useState } from "react";
import axios from "axios";

export default function PostForm() {
  const [userID, setID] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  const formPost = (e) => {
    e.preventDefault();
    const data = {
      userID: userID,
      title: title,
      body: body,
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/posts/`, data)
      .then((res) => {
        alert("Succesfully form submitted");
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          let er = error.response.data.message;
          console.log(er);
        }
      });
  };
  return (
    <div>
      <form onSubmit={(e) => formPost(e)}>
        <input
          type="number"
          required
          placeholder="enter user ID"
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
