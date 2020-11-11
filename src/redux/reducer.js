const FETCH_USERS = "FETCH_USERS";
const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  console.log("action dispatched", action);
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    default:
      return state;
  }
};

export { reducer as default };
