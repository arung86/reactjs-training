import { connect } from "react-redux";
import { fetchUsers, fetchUsersAsync } from "../../redux/actionCreator";
import User from ".";
const mapStateToProps = (state) => {
  return {
    users: state.user.users,
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
