import { connect } from "react-redux";
import { fetchUsers, fetchUsersAsync } from "../redux/actionCreator";
import User from "./User";
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsersAsync());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
