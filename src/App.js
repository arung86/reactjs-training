import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./components/users/container";
import Posts from "./components/posts/container";
import { Router, Link } from "@reach/router";

const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <Provider store={store}>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="users">Users</Link> |
          <Link to="posts">Posts</Link>
        </nav>
        <Router>
          <Home path="/" />
          <Users path="users" />
          <Posts path="posts" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
