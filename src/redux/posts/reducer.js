import { FETCH_POSTS } from "./actions";

const initialState = { posts: [], loading: false, error: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as default };
