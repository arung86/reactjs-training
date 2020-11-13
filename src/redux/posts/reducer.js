import * as types from "./actionTypes";

const initialState = { posts: [], loading: false, error: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return {
        ...state,
        loading: action.loading,
      };

    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case types.FETCH_POST_FAIL:
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { reducer as default };
