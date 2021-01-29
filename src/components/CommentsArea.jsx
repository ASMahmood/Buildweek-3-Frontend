import React, { Component } from "react";
import { Container, Row, Button, Form , Col,Modal} from "react-bootstrap";
import "./styles/FeedPage.css"
import {TiPencil} from 'react-icons/ti'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { AiOutlineComment } from "react-icons/ai";


export default class CommentsArea extends Component {
  state = {
    showComments: false,
    show:false,
    newText:"",
    currentText:"",
    text:"",
    currentEditId:""
  };

  showComments = () => {
    this.state.showComments
      ? this.setState({ showComments: false })
      : this.setState({ showComments: true });
  };
  changeComment = (text,id) => {
    this.setState({show:true,currentText:text})
    this.setState({currentEditId:id})
  }
changeTheComment = async (e) => 
{
this.setState({text:e.currentTarget.value})
}
saveChangedComment = async () => {
  await fetch(
    process.env.REACT_APP_SERVER +
      `/comment/${this.state.currentEditId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text:this.state.text}),
    }
  );
  this.props.fetchPosts()
  this.setState({show:false})
}
  render() {
    return (
      <>

        <p className = "commentsButton"onClick={() => this.showComments()}>
          <AiOutlineComment color={"#3F3F3F"}/>{this.props.post.comments.length}

        </p>

        <Container className={this.state.showComments ? "" : "d-none"}>
          {this.props.post.comments.length > 0 &&
            this.props.post.comments.map((comment) => (
              <Row className="singleCommentRow">

                <div className="commentImageBorder">

                <img
                  src={comment.user_id[0].image}
                  className="commentProfilePic"
                  alt="profile"
                />

               
                

                </div>
                <p className="mr-1" style={{fontWeight:"700"}}>{comment.user_id[0].username}:</p>
                <p >{comment.text}</p>
         {comment.user_id[0].username === this.props.username && (<><Col sm={1} >
                  <p onClick={()=> this.props.deleteComment(comment._id)} ><RiDeleteBin6Line className = "emoji"/></p> 
                  </Col> 
                  <Col><TiPencil className = "emoji" onClick={()=>this.changeComment(comment.text,comment._id)}/> </Col>
                  </>
                  ) }
                

              </Row>
            ))}
          <Form>
          <Row noGutters = {true}>
            <Col sm = {10}>
            <Form.Group  className="commentInputField" controlId="exampleForm.ControlInput1" >
          
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
              <Col sm={2}>
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
        <Modal show={this.state.show}>
        <Modal.Header closeButton>
          <Modal.Title>You changed your thoughts?</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Control
                type="text"
                placeholder="New text for your comment"
                className = "commentInputField"
                defaultValue = {this.state.currentText}
                onChange = {(e) => {this.changeTheComment(e)}}
              ></Form.Control></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.setState({show:false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.saveChangedComment()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}
