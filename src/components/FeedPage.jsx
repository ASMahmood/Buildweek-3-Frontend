import React from "react";
import { Container, Row, Col, Spinner,Image,Button,Modal,Form } from "react-bootstrap";
import CreateFeed from "./CreateFeed";
import HomeProfile from "./HomeProfile";
import HomeRight from "./HomeRight";
import {RiPencilFill } from "react-icons/ri";
import {AiOutlineDelete } from "react-icons/ai";
import Moment from 'react-moment';

import "./styles/FeedPage.css";
class FeedPage extends React.Component {
  state = {
    postArray: [],
    show:false,
    postIdForEdit:"",
    currentPostForEdit:{},
    editedText:""
  };

  deletePost = async (id) => {
    await fetch(
      `https://buildweek-3.herokuapp.com/post/${id}`,
      {
        method: 'DELETE'
      }
    );
    this.fetchPosts()
  }
  openEditPostModal = async (id) => {
   console.log(id);
   
   try {
    let response = await fetch(
      `https://buildweek-3.herokuapp.com/post/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
        },
      }
    );
    let parsedResponse = await response.json();
    this.setState({ currentPostForEdit: parsedResponse}, () => {
      console.log(this.state.currentPostForEdit);
    });
    this.setState({show:true})
  } catch (error) {
    console.log("problem with getting psots ->", error);
  }
  }
  updatePost = async () => {
   let editedPost = this.state.currentPostForEdit
   editedPost.text = this.state.editedText
   this.setState({currentPostForEdit:editedPost})
   let requestBody = {text:this.state.editedText,username:this.state.currentPostForEdit.username,user_id:this.state.currentPostForEdit.user_id._id,image:this.state.currentPostForEdit.image}
   
   //fetching`
let response = await fetch(
  `https://buildweek-3.herokuapp.com/post/${this.state.currentPostForEdit._id}`,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  }
);
await this.fetchPosts()
  }
  componentDidMount = () => {
    this.fetchPosts();
   // this.fetchProfiles();
  };

  fetchPosts = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://buildweek-3.herokuapp.com/post",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
          },
        }
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({ postArray: parsedResponse}, () => {
        console.log(this.state.postArray);
      });
    } catch (error) {
      console.log("uh oh stinky when fetching all the posts", error);
    }
  };

 

  render() {
    return (
      <>
      <Container style={{ marginTop: "2rem" }}>
        <Row id="hopesAndDreams">
          <Col md={2}>
            <HomeProfile toggleSaved={this.toggleSaved} />
          </Col>
          <Col md={6} id="feedMiddleColumn">
            <Row id="posterBit" style={{ width: "112%", marginLeft: "-5%" }}>
              <CreateFeed fetchPosts={this.fetchPosts} />
            </Row>
            <hr
              style={{
                backgroundColor: "#deddda",
                margin: "1rem 0",
                width: "100%",
              }}
            />
            <Row className="d-flex justify-content-center">
            {this.state.postArray.reverse().map(post => 
               (<Container className = "postContainer" >
                 <Row className = "userPostRow" >
                   <Col sm ={2}><img src = {post.user_id.image} className = "profilePicPost"/> </Col>
                   <Col sm ={8}>
                     <Row className = "postUsername"><p>{post.user_id.username}</p></Row>
                     <Row className = "postCreatedAt"><p><Moment format ="YYYY/MM/DD">{post.createdAt}</Moment></p></Row>
                   </Col>
                   <Col sm ={1}><RiPencilFill className = "pen" onClick = {()=> this.openEditPostModal(post._id)}/></Col>
                   <Col sm ={1}><AiOutlineDelete className = "bin" onClick = {()=> this.deletePost(post._id)}/></Col>
                   </Row>
                   <Row>
                     <Col  className = "d-flex justify-content-center"> <p>{post.text}</p></Col>
                     </Row>
               <Row className = "imagePostRow">
                     <Col className = "d-flex justify-content-center"> <img className = "imageForPost" src = {post.image} /></Col>
                     </Row>
                 </Container> 
               )
            )}
            </Row>
          </Col>
          <Col md={3} id="feedRightColumn">
            <HomeRight />
          </Col>
        </Row>
        <hr />
      </Container>

      <Modal
        show={this.state.show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
   <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} defaultValue = {this.state.currentPostForEdit.text} onChange={(e) => this.setState({editedText:e.currentTarget.value})}/>
  </Form.Group>
  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick = {()=> this.setState({show:false})}>
            Close
          </Button>
          <Button variant="primary" onClick = {() => this.updatePost()}>Save</Button>
        </Modal.Footer>
      </Modal>

</>

//modal for edit post

    );
  }
}

export default FeedPage;
