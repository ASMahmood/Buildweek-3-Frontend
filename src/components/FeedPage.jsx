import React from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import CreateFeed from "./CreateFeed";
import HomeProfile from "./HomeProfile";
import HomeRight from "./HomeRight";
import Moment from "react-moment";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Likes from "./Likes";
import PostDropdown from "./PostDropdown";
import CommentsArea from "./CommentsArea";
import "./styles/FeedPage.css";
import { withRouter } from "react-router-dom";

class FeedPage extends React.Component {
  state = {
    postArray: [],
    show: false,
    postIdForEdit: "",
    currentPostForEdit: {},
    editedText: "",
    user: {},
    image: null,
    commentToAdd: "",
    postImageEdit: false,
  };

  deletePost = async (id) => {
    await fetch(process.env.REACT_APP_SERVER + `/post/${id}`, {
      method: "DELETE",
    });
    this.fetchPosts();
  };
  openEditPostModal = async (id) => {
    console.log(id);

    try {
      let response = await fetch(process.env.REACT_APP_SERVER + `/post/${id}`);
      let parsedResponse = await response.json();
      this.setState({ currentPostForEdit: parsedResponse }, () => {
        console.log(this.state.currentPostForEdit);
      });
      this.setState({ show: true });
    } catch (error) {
      console.log("problem with getting psots ->", error);
    }
  };
  deleteComment = async (commentId) => {
    await fetch(process.env.REACT_APP_SERVER + `/comment/${commentId}`, {
      method: "DELETE",
    });
    this.fetchPosts();
  };
  editComment = async (commentId, commentText) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER + `/comment/${commentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentText),
        }
      );
    } catch (e) {
      console.log(e);
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
        if (response.ok) {
          this.setState({
            image: null,
          });
          this.fetchPosts();
          this.setState({ show: false });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  updatePost = async () => {
    let editedPost = this.state.currentPostForEdit;
    editedPost.text = this.state.editedText;
    this.setState({ currentPostForEdit: editedPost });
    let requestBody = {
      text: this.state.editedText,
      username: this.state.currentPostForEdit.username,
      user_id: this.state.currentPostForEdit.user_id._id,
    };

    //fetching`
    await fetch(
      process.env.REACT_APP_SERVER +
        `/post/${this.state.currentPostForEdit._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (this.state.image) {
      console.log("i am in");
      await this.postImage(this.state.currentPostForEdit._id);
    } else {
      await this.fetchPosts();
      this.setState({ show: false });
    }
  };
  componentDidMount = () => {
    this.fetchPosts();
    this.fetchUser();
    // this.fetchProfiles();
  };

  fetchPosts = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(process.env.REACT_APP_SERVER + "/post");
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      parsedResponse = await parsedResponse.reverse();
      this.setState({ postArray: parsedResponse }, () => {
        console.log(this.state.postArray);
      });
    } catch (error) {
      console.log("uh oh stinky when fetching all the posts", error);
    }
  };

  fetchUser = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVER +
          "/profile/" +
          localStorage.getItem("profileID")
      );
      let parsedResponse = await response.json();
      this.setState({ user: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  addCommentInState = async (e, postID) => {
    this.setState({ commentToAdd: e.currentTarget.value });
  };
  addComment = async (postID) => {
    const comment = {
      text: this.state.commentToAdd,
      username: "default",
      user_id: this.state.user._id,
      post_id: postID,
    };

    try {
      const response = await fetch(process.env.REACT_APP_SERVER + "/comment", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      console.log(response);
      this.setState({
        commentToAdd: "",
      });
      this.fetchPosts();
    } catch (e) {
      console.log(e); // Error
    }
  };
  render() {
    return (
      <>
        <Container style={{ marginTop: "2rem" }}>
          <Row id="hopesAndDreams">
            <Col md={2}>
              <HomeProfile user={this.state.user} />
            </Col>
            <Col md={6} id="feedMiddleColumn">
              <Row id="posterBit" style={{ width: "112%", marginLeft: "-5%" }}>
                <CreateFeed
                  fetchPosts={this.fetchPosts}
                  user={this.state.user}
                />
              </Row>
              <hr
                style={{
                  backgroundColor: "#deddda",
                  margin: "1rem 0",
                  width: "100%",
                }}
              />
              <Row className="d-flex justify-content-center">
                {this.state.postArray.map((post) => (
                  <Container
                    className="postContainer"
                    style={{ backgroundColor: "white" }}
                  >
                    <Row className="userPostRow mt-2">
                      <Col
                        sm={2}
                        className="containerProPicPost"
                        onClick={() =>
                          this.props.history.push(
                            "/profile/" + post.user_id._id
                          )
                        }
                      >
                        <img
                          src={post.user_id.image}
                          className="profilePicPost"
                          style={{ objectFit: "cover", marginTop: "0.5rem" }}
                          alt="profile pic"
                        />
                      </Col>
                      <Col
                        sm={9}
                        className="containerAuthorPost"
                        onClick={() =>
                          this.props.history.push(
                            "/profile/" + post.user_id._id
                          )
                        }
                      >
                        <Row className="postUsername">
                          <p>{post.user_id.username}</p>
                        </Row>
                        <Row className="postTitle">
                          <p>{post.user_id.title}</p>
                        </Row>
                        <Row className="postCreatedAt">
                          <p>
                            <Moment format="YYYY/MM/DD">
                              {post.createdAt}
                            </Moment>
                          </p>
                        </Row>
                      </Col>

                      <Col sm={1}>
                        <PostDropdown
                          postID={post._id}
                          postBody={post.text}
                          user={post.user_id}
                          openEditModal={this.openEditPostModal}
                          fetchPosts={this.fetchPosts}
                          deletePost={this.deletePost}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="postText">
                        <p>{post.text}</p>
                      </Col>
                    </Row>
                    <Row className="imagePostRow">
                      <Col className="d-flex justify-content-center p-0">
                        {" "}
                        {post.image !== "default" && (
                          <img
                            className="img-fluid"
                            style={{
                              objectFit: "contain",
                              width: "100%",
                              height: "auto",
                            }}
                            crossorigin="anonymous"
                            src={post.image}
                            alt="post"
                          />
                        )}
                      </Col>
                    </Row>

                    <Row style={{ paddingLeft: "14px", marginTop: "10px" }}>
                      <Likes
                        likes={post.likes}
                        postID={post._id}
                        fetchPosts={this.fetchPosts}
                      />

                      <CommentsArea
                        fetchPosts={this.fetchPosts}
                        username={this.state.user.username}
                        className="commentPost"
                        post={post}
                        deleteComment={this.deleteComment}
                        addCommentInState={this.addCommentInState}
                        addComment={this.addComment}
                        editComment={this.editComment}
                      />
                    </Row>
                  </Container>
                ))}
              </Row>
            </Col>
            <Col md={3} id="feedRightColumn">
              <HomeRight />
            </Col>
          </Row>
          <hr />
        </Container>

        <Modal show={this.state.show} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Edit your caption</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={this.state.currentPostForEdit.text}
                  onChange={(e) =>
                    this.setState({ editedText: e.currentTarget.value })
                  }
                />
              </Form.Group>
            </Form>

            {this.state.postImageEdit && (
              <Row className="d-flex justify-content-center">
                {" "}
                <img
                  className="previewEditImage "
                  src={URL.createObjectURL(
                    document.querySelector("#postImage").files[0]
                  )}
                  alt="img-preview"
                />{" "}
              </Row>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Form.Label htmlFor="postImage">
              <AttachFileIcon />
            </Form.Label>
            <Form.Control
              type="file"
              className="visually-hidden"
              id="postImage"
              accept="image/*"
              onChange={(e) =>
                this.setState({ image: e.target.files[0], postImageEdit: true })
              }
            />
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
            >
              Close
            </Button>
            <Button variant="primary" onClick={() => this.updatePost()}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      //modal for edit post
    );
  }
}

export default withRouter(FeedPage);
