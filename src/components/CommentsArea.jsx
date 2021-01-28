import React, { Component } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";

export default class CommentsArea extends Component {
  state = {
    showComments: false,
  };

  showComments = () => {
    this.state.showComments
      ? this.setState({ showComments: false })
      : this.setState({ showComments: true });
  };

  render() {
    return (
      <>
        <p onClick={() => this.showComments()}>
          Comments {this.props.post.comments.length}
        </p>

        <Container className={this.state.showComments ? "" : "d-none"}>
          {this.props.post.comments.length > 0 &&
            this.props.post.comments.map((comment) => (
              <Row className="singleCommentRow">
                <img
                  src={comment.user_id[0].image}
                  className="commentProfilePic"
                  alt="profile"
                />
                {comment.user_id[0].username} : {comment.text}{" "}
              </Row>
            ))}
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Add a comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your comment"
                onChange={(e) =>
                  this.props.addCommentInState(e, this.props.post._id)
                }
              ></Form.Control>
              <Button
                className="addCommentBtn"
                onClick={() => this.props.addComment(this.props.post._id)}
              >
                Submit Comment{" "}
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}
