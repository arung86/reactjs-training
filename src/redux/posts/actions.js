import Axios from "axios";

const FETCH_POSTS = "FETCH_POSTS";
const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
const FETCH_POST_FAIL = "FETCH_POST_FAIL";

const fetchPosts = () => {
  return function (dispatch) {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: FETCH_POSTS, payload: response.data });
      })
      .catch(() => {});
  };
};

export { fetchPosts, FETCH_POSTS };
