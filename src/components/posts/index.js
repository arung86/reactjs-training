import React, { useEffect } from "react";
import List from "./List";

export default function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  return (
    <div>
      <List list={props.posts} />
    </div>
  );
}
