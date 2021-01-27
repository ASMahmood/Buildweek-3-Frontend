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
                Welcome to your professional community
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Form className="signInForm">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
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
