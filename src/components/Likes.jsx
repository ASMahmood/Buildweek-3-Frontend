import React from "react";
import { AiOutlineLike } from "react-icons/ai";

class Likes extends React.Component {
  state = {
    liked: false,
  };

  componentDidMount = () => {
    const isLiked = this.props.likes.find(
      (id) => id === localStorage.getItem("profileID")
    );
    if (isLiked) {
      this.setState({ liked: true });
    } else {
      this.setState({ liked: false });
    }
  };

  handleLike = async () => {
    if (this.state.liked) {
      this.unlikePost();
    } else {
      this.likePost();
    }
  };

  likePost = async () => {
    try {
      await fetch(
        process.env.REACT_APP_SERVER +
          "/post/" +
          this.props.postID +
          "/like/" +
          localStorage.getItem("profileID"),
        { method: "PUT" }
      );
      this.setState({ liked: true });
      this.props.fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  unlikePost = async () => {
    try {
      await fetch(
        process.env.REACT_APP_SERVER +
          "/post/" +
          this.props.postID +
          "/unlike/" +
          localStorage.getItem("profileID"),
        { method: "PUT" }
      );
      this.setState({ liked: false });
      this.props.fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div style={{ margin: "7px" }} className="d-flex align-items-center">
        <AiOutlineLike
          color={this.state.liked ? "blue" : "#3F3F3F"}
          onClick={this.handleLike}
        />
        {""}
        {""}
        <span className="text-muted" style={{ userSelect: "none" }}>
          {this.props.likes.length === 0
            ? " Be the first to like."
            : this.props.likes.length}
        </span>
      </div>
    );
  }
}

export default Likes;
