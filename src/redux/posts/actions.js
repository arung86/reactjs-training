import Axios from "axios";
import * as types from "./actionTypes";
// action creators
const fetchPostRequest = () => {
  return { type: types.FETCH_POST_REQUEST, loading: true };
};

const fetchPostSuccess = (payload) => {
  return { type: types.FETCH_POST_SUCCESS, loading: false, payload };
};

const fetchPostFail = (err) => {
  return { type: types.FETCH_POST_FAIL, loading: false, payload: err };
};

// async action creator
const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostRequest());
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(fetchPostSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchPostFail(err));
      });
  };
};

export { fetchPosts };
