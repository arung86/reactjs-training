import axios from "axios";

function fetchUsers(users) {
  return { type: "FETCH_USERS", payload: users };
}

function fetchUsersAsync() {
  return function (dispatch) {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        console.log(response.data.length);
        dispatch(fetchUsers(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
}

export { fetchUsers, fetchUsersAsync };
