import { connect } from "react-redux";
import Posts from "./index";
import { fetchPosts } from "../../redux/posts/actions";

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    loading: state.post.loading,
    error: state.post.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
