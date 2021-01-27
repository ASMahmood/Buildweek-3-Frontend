import React from "react";
import {
  Container,
  Navbar,
  Row,
  Nav,
  Button,
  Col,
  Form,
} from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/SignIn.css";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  }

  fetchProfileId = async(e) => {
    e.preventDefault()
    try {
      let response = await fetch(process.env.REACT_APP_SERVER + "/profile/sign/in", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response)
      const profileArray = await response.json()
      if (profileArray.length !== 0) {
        await localStorage.setItem('profileID', profileArray[0]._id)
        this.props.history.push("/feed")
      } else {
        alert("no profile with these credentials found")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div id="signInPage">
        <Container>
          <Navbar>
            <Nav.Link to="/" className="Linkedin-icon d-flex mr-auto">
              <h6 className="logoTitle">Linked</h6>
              <AiFillLinkedin />
            </Nav.Link>
            <Button className="registerNav">Join now</Button>
            <Button className="signInNav">Sign in</Button>
          </Navbar>
          <Row>
            <Col xs={6}>
              <h1 className="welcomePage">
                Welcome to your professional community {localStorage.getItem('profileID')}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Form className="signInForm" onSubmit={this.fetchProfileId}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.currentTarget.value})}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.currentTarget.value})}/>
                </Form.Group>
                <span className="forgotPassord">Forgot password?</span>
                <Button
                  variant="primary"
                  className="submitSignIn"
                  type="submit"
                >
                  Sign in
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignIn;
