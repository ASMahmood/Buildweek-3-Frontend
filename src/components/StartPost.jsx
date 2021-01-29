import { BsPencilSquare } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { FaStickyNote } from "react-icons/fa";
import { AiOutlinePicture, AiFillYoutube } from "react-icons/ai";
import Tenor from "react-tenor";
import "react-tenor/dist/styles.css";
import "../styles/StartPost.css";

const { Component } = require("react");
const { Modal, Button, Form, Spinner } = require("react-bootstrap");

class StartPost extends Component {
  state = {
    show: false,
    post: {
      text: "",
      username: "ASMahmood",
      user_id: "600e9bba26717934c83387fd",
      comments: [],
      image: "default",
    },
    image: "default",
    preview: "default",
    errMessage: "",
    loading: false,
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
    this.setState({ loading: true });
    e.preventDefault();
    console.log(this.state.image);
    try {
      const response = await fetch(process.env.REACT_APP_SERVER + "/post", {
        method: "POST",
        body: JSON.stringify({
          text: this.state.post.text,
          username: "ASMahmood",
          user_id: localStorage.getItem("profileID"),
          comments: [],
          image:
            typeof this.state.image !== "string" ? "default" : this.state.image,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      if (response.ok && typeof this.state.image !== "string") {
        let hope = await response.json();
        console.log(hope);
        await this.postImage(hope);
      } else if (response.ok) {
        this.setState({
          post: { text: "" },
          image: "default",
          preview: "default",
          errMessage: "",
        });
        this.props.fetchPosts();
        this.setState({ loading: false });
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
      await post.append("postPic", this.state.image);
      if (post) {
        let response = await fetch(
          process.env.REACT_APP_SERVER + "/post/" + postId + "/picture",
          {
            method: "POST",
            body: post,
            headers: new Headers({
              Accept: "application/json",
            }),
          }
        );
        console.log("post a pic");
        this.setState({ loading: false });
        this.handleClose();
        if (response.ok) {
          this.setState({
            post: { text: "" },
            image: "default",
            preview: "default",
            errMessage: "",
          });
          this.props.fetchPosts();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="d-flex align-items-center" onClick={this.handleShow}>
          <BsPencilSquare className="mr-3" />
          <Form.Control
            disabled
            size="lg"
            type="text"
            placeholder="Start a post"
          />
        </div>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
          id="createPost"
        >
          <Modal.Header closeButton>
            <Modal.Title>Create a post</Modal.Title>
          </Modal.Header>
          <Form onSubmit={(e) => this.submitPost(e)}>
            <Modal.Body>
              <Form.Row className="postTopRow">
                <div>
                  <img src={this.props.user.image} alt="userImage" />
                </div>
                <div className="nameBox">
                  <h6>
                    {this.props.user.name + " " + this.props.user.surname}{" "}
                  </h6>
                </div>
              </Form.Row>
              <Form.Row>
                <Form.Group className="w-100">
                  <Form.Control
                    size="lg"
                    as="textarea"
                    placeholder="What do you want to talk about?"
                    id="post"
                    rows={4}
                    value={this.state.text}
                    onChange={this.updatePostField}
                    required
                  />
                  <br />
                </Form.Group>
              </Form.Row>
              {this.state.preview !== "default" && (
                <div className="imagePreview">
                  <img
                    src={
                      typeof this.state.preview !== "string"
                        ? URL.createObjectURL(this.state.preview)
                        : this.state.preview
                    }
                    alt="img-preview"
                  />
                  <br />
                </div>
              )}
              <div className="mb-3">
                <span className="hashtag">Add hashtag </span>
              </div>
              <div className="d-flex justify-content-between">
                <div className="postIcons">
                  <CgMathPlus fill="rgba(0, 0, 0, 0.7)" />

                  <Form.Label htmlFor="postImage">
                    <AiOutlinePicture fill="rgba(0, 0, 0, 0.7)" />
                  </Form.Label>
                  <Form.Control
                    type="file"
                    className="visually-hidden"
                    id="postImage"
                    accept="image/*"
                    onChange={(e) =>
                      this.setState({
                        image: e.target.files[0],
                        preview: e.target.files[0],
                      })
                    }
                  />

                  <AiFillYoutube fill="rgba(0, 0, 0, 0.7)" />

                  <FaStickyNote fill="rgba(0, 0, 0, 0.7)" />
                </div>
                <div className="postButtonSection feed-btn-wrapper">
                  <Tenor
                    token={process.env.REACT_APP_TENOR_TOKEN}
                    onSelect={(result) =>
                      this.setState({
                        image: result.media[0].gif.url,
                        preview: result.media[0].gif.preview,
                      })
                    }
                  />
                  <Button
                    type="submit"
                    variant="outline-dark"
                    className="feed-btn"
                    onClick={(e) => this.submitPost(e)}
                  >
                    {this.state.loading ? (
                      <Spinner animation="border" size="sm" variant="dark" />
                    ) : (
                      "Post"
                    )}
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Form>
        </Modal>
      </>
    );
  }
}

export default StartPost;
