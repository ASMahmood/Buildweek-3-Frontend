import React, { Component } from "react";
import { Container, Row, Button, Form , Col} from "react-bootstrap";
import "./styles/FeedPage.css"

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
        <p className = "commentsButton"onClick={() => this.showComments()}>
          Comments {this.props.post.comments.length}
        </p>

        <Container className={this.state.showComments ? "" : "d-none"}>
          {this.props.post.comments.length > 0 &&
            this.props.post.comments.map((comment) => (
              <Row className="singleCommentRow">
                <Col sm={11}>
                <img
                  src={comment.user_id[0].image}
                  className="commentProfilePic"
                  alt="profile"
                />
                {comment.user_id[0].username} : {comment.text}{" "}
                </Col>
                {comment.user_id[0].username === this.props.username && (<Col sm={1} >
                  <p onClick={()=> this.props.deleteComment(comment._id)} >x</p>
                  </Col>)}
                
              </Row>
            ))}
          <Form>
          <Row noGutters = {true}>
            <Col sm = {10}>
            <Form.Group controlId="exampleForm.ControlInput1" >
          
              <Form.Control
                type="text"
                placeholder="Add a comment"
                onChange={(e) =>
                  this.props.addCommentInState(e, this.props.post._id)
                }
                className = "commentInputField"
              ></Form.Control>
              </Form.Group>
              </Col>
              <Col sm = {2}>
              <Button
                id="addCommentBtn"
                onClick={() => this.props.addComment(this.props.post._id)}
              >
                Submit{" "}
              </Button>
              </Col>
              </Row>
          </Form>
        </Container>
      </>
    );
  }
}
