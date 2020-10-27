import React, { Component } from "react";
import axios from "axios";
import PostForm from "./PostForm";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  // POST
  componentDidMount() {
    // REST
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <PostForm />
        Here are the list of posts
        {/* {JSON.stringify(posts)}; */}
        { <ul>
          {posts.map((post) => (
            <li>
              {post.id},{post.title}
            </li>
          ))}
        </ul> }
      </div>
    );
  }
}

export default Posts;
