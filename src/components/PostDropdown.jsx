import React from "react";
import "./styles/PostDropdown.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CancelIcon from "@material-ui/icons/Cancel";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { BsLink45Deg, BsFillFlagFill } from "react-icons/bs";
import EditPostImage from "./EditPostImage";
import EditIcon from "@material-ui/icons/Edit";

class PostDropdown extends React.Component {
  state = {
    show: false,
  };
  render() {
    if (this.state.show) {
      return (
        <>
          <div
            className="text-center postEllipses"
            onClick={() => this.setState({ show: false })}
          >
            <MoreHorizIcon />
          </div>
          <div className="postDrop">
            {this.props.user._id === localStorage.getItem("profileID") ? (
              <>
                <EditPostImage
                  postID={this.props.postID}
                  fetchPosts={this.props.fetchPosts}
                />
              </>
            ) : (
              <>
                <div className="dreamsDropDistance">
                  <div className="iconMaster">
                    <BookmarkBorderIcon />
                  </div>
                  <div className="megatron">
                    <span className="is">Save</span>
                    <span className="dumb">Save for later</span>
                  </div>
                </div>
              </>
            )}

            <div className="dreamsDropDistance">
              <div className="iconMaster">
                <BsLink45Deg />
              </div>
              <div className="megatron">
                <span className="is">Copy link to post</span>
              </div>
            </div>
            {this.props.user._id === localStorage.getItem("profileID") ? (
              <>
                <div
                  className="dreamsDropDistance"
                  onClick={() => {
                    this.props.openEditModal(this.props.postID);
                    this.setState({ show: false });
                  }}
                >
                  <div className="iconMaster">
                    <EditIcon />
                  </div>
                  <div className="megatron">
                    <span className="is">Change your post?</span>
                    <span className="dumb">
                      If you've made a mistake, you can fix it!
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="dreamsDropDistance">
                <div className="iconMaster">
                  <CancelIcon />
                </div>
                <div className="megatron">
                  <span className="is">
                    Unfollow{" "}
                    {this.props.user.name + " " + this.props.user.surname}
                  </span>
                  <span className="dumb">
                    Stay connected but stop seeing posts from{" "}
                    {this.props.user.name} in feed
                  </span>
                </div>
              </div>
            )}
            {this.props.user._id === localStorage.getItem("profileID") ? (
              <div
                className="dreamsDropDistance"
                onClick={() => {
                  this.props.deletePost(this.props.postID);
                  this.setState({ show: false });
                }}
              >
                <div className="iconMaster">
                  <DeleteOutlineIcon />
                </div>
                <div className="megatron">
                  <span className="is">I want to delete this post</span>
                  <span className="dumb">
                    If you've done an uh oh stinky, you can delete your post
                    before your boss sees it.
                  </span>
                </div>
              </div>
            ) : (
              <div className="dreamsDropDistance">
                <div className="iconMaster">
                  <VisibilityOffIcon />
                </div>
                <div className="megatron">
                  <span className="is">I don't want to see this</span>
                  <span className="dumb">
                    Let us know why you don't want to see this post
                  </span>
                </div>
              </div>
            )}

            {this.props.user._id !== localStorage.getItem("profileID") && (
              <div className="dreamsDropDistance">
                <div className="iconMaster">
                  <BsFillFlagFill />
                </div>
                <div className="megatron">
                  <span className="is">Report this post</span>
                  <span className="dumb">
                    This post is offensive of the account is hacked
                  </span>
                </div>
              </div>
            )}

            <div className="dreamsDropDistance">
              <div className="iconMaster">
                <VisibilityIcon />
              </div>
              <div className="megatron">
                <span className="is">Who can see this post?</span>
                <span className="dumb">Visible to only cool people 😎 </span>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div
          className="text-center postEllipses"
          onClick={() => this.setState({ show: true })}
        >
          <MoreHorizIcon />
        </div>
      );
    }
  }
}

export default PostDropdown;
