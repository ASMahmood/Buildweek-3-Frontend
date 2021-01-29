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
    password: "",
  };

  fetchProfileId = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVER + "/profile/sign/in",
        {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const profileArray = await response.json();
      if (profileArray.length !== 0) {
        await localStorage.setItem("profileID", profileArray[0]._id);
        this.props.history.push("/feed");
      } else {
        alert("no profile with these credentials found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div id="signInPage">
        <Container>
          <Navbar>
            <Nav.Link to="/" className="Linkedin-icon d-flex mr-auto">
              <h6 className="logoTitle">Linked</h6>
              <AiFillLinkedin />
            </Nav.Link>
            <Button
              className="registerNav"
              onClick={(e) => {
                e.preventDefault();
                this.props.history.push("/register");
              }}
            >
              Join now
            </Button>
            <Button className="signInNav" onClick={this.fetchProfileId}>
              Sign in
            </Button>
          </Navbar>
          <Row className="mt-5">
            <Col xs={6}>
              <h1 className="welcomePage">
                Welcome to your professional community
              </h1>
            </Col>
          </Row>
          <Row className="position-relative">
            <Col xs={6} className="formCol">
              <Form className="signInForm" onSubmit={this.fetchProfileId}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) =>
                      this.setState({ email: e.currentTarget.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.currentTarget.value })
                    }
                  />
                </Form.Group>
                <span className="forgotPassword mb-3">Forgot password?</span>
                <Button
                  variant="primary"
                  className="submitSignIn"
                  type="submit"
                >
                  Sign in
                </Button>
                <hr />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push("/register");
                  }}
                  className="submitRegister"
                >
                  Join now
                </Button>
              </Form>
              <div className="bg-colour-change"></div>
            </Col>

            <div className="signInImage ml-auto">
              <img
                src="https://res.cloudinary.com/dhmw620tl/image/upload/v1611324427/m6d10/rhuirjdcbvfnaiwqmw6i.png"
                style={{ objectFit: "cover", width: "600px" }}
                alt="cover"
              />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignIn;
