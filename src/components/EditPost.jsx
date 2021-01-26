import { Link } from "@material-ui/core";
import { CgMathPlus } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillPlaySquare } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "react-bootstrap";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import "../styles/StartPost.css";

const { Component } = require("react");
const { Modal, Form } = require("react-bootstrap");

class EditPost extends Component {
  state = {
    show: false,
    image: null,
    post: { text: this.props.postBody },
    errMessage: "",
  };

  componentDidMount = () => {
    this.setState({ post: { text: this.props.postBody } });
  };

  setModalShow = (boolean) => this.setState({ show: boolean });

  handleClose = () => this.setModalShow(false);
  handleShow = () => this.setModalShow(true);

  updatePostField = (e) => {
    let Post = { ...this.state.post };
    let textPost = Post.text;

    textPost = e.currentTarget.value;
    Post.text = textPost;
    this.setState({ post: Post });
  };

  submitPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + this.props.postID,
        {
          method: "PUT",
          body: JSON.stringify(this.state.post),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          }),
        }
      );

      if (response.ok && this.state.image) {
        let hope = await response.json();
        await this.postImage(hope._id);
      } else if (response.ok) {
        alert("Post sent !");
        this.setState({
          post: { text: "" },
          image: null,
          errMessage: "",
        });
        this.props.fetchPosts();
        this.handleClose();
      } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
        loading: false,
      });
    }
  };

  postImage = async (postId) => {
    try {
      let post = new FormData();
      await post.append("post", this.state.image);
      if (post) {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/" + postId,
          {
            method: "POST",
            body: post,
            headers: new Headers({
              Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
              Accept: "application/json",
            }),
          }
        );
        if (response.ok) {
          alert("Post sent with image !");
          this.setState({
            post: { text: "" },
            image: null,
            errMessage: "",
          });
          this.props.fetchPosts();
          this.handleClose();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="dreamsDropDistance" onClick={this.handleShow}>
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

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.submitPost}>
            <Modal.Body>
              <Form.Group>
                <Form.Control
                  size="lg"
                  as="textarea"
                  placeholder={this.props.postBody}
                  id="put"
                  value={this.state.post.text}
                  onChange={this.updatePostField}
                  required
                />
                <br />
              </Form.Group>
              {this.state.image && (
                <div className="imagePreview">
                  <img
                    src={URL.createObjectURL(
                      document.querySelector("#postImage").files[0]
                    )}
                    alt="preview"
                  />
                  <br />
                </div>
              )}
              <div>
                <Link to="#ss">Add hashtag </Link>
                <span> Help the right people see your post</span>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Link>
                    <CgMathPlus />
                  </Link>
                  <Link>
                    <AiFillPlaySquare />
                  </Link>
                  <Link>
                    <GrNotes />
                  </Link>
                  <Link>
                    <HiOutlinePhotograph />
                  </Link>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="feed-btn-wrapper">
                <Form.Label htmlFor="postImage">
                  <AttachFileIcon />
                </Form.Label>
                <Form.Control
                  type="file"
                  className="visually-hidden"
                  id="postImage"
                  accept="image/*"
                  onChange={(e) => this.setState({ image: e.target.files[0] })}
                />
                <Button
                  type="submit"
                  variant="outline-dark"
                  className="feed-btn"
                >
                  POST
                </Button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default EditPost;
