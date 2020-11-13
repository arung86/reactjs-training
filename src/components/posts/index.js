import React, { useEffect } from "react";
import List from "./List";

export default function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  return (
    <div>
      {props.loading && <div>Loading... Please wait!</div>}
      {props.posts.length > 0 && <List list={props.posts} />}
      {props.error && <div> Problem loading data! </div>}
    </div>
  );
}
