import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import CreateFeed from "./CreateFeed";
import HomeProfile from "./HomeProfile";
import HomeRight from "./HomeRight";
import PostsColumn from "./PostsColumn";
import SavedPosts from "./SavedPosts";
import "./styles/FeedPage.css";

class FeedPage extends React.Component {
  state = {
    postArray: [],
   
  };

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
            {this.state.postArray.map(post => 
               (<Container className = "postContainer" >
                 123
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
    );
  }
}

export default FeedPage;
