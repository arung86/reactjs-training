import { connect } from "react-redux";
import User from "./User";

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch({ type: "FETCH_USERS" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
