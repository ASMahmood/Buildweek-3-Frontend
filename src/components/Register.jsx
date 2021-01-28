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
import { MdAddAPhoto } from "react-icons/md";
import "../styles/SignIn.css";

class Register extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
    image: null,
    username: "",
    password: "",
    validated: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    this.setState({ validated: true });
    if (this.state.validated) {
      this.postProfile();
    }
  };

  postProfile = async () => {
    try {
      let response = await fetch(process.env.REACT_APP_SERVER + "/profile/", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let profile = await response.json();
      this.postImage(profile._id);
    } catch (error) {
      console.log(error);
    }
  };

  postImage = async (id) => {
    try {
      let post = new FormData();
      await post.append("profilePic", this.state.image);
      await fetch(
        process.env.REACT_APP_SERVER + "/profile/" + id + "/picture",
        {
          method: "POST",
          body: post,
          headers: new Headers({
            Accept: "application/json",
          }),
        }
      );
      await localStorage.setItem("profileID", id);
      this.props.history.push("/feed");
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
          </Navbar>
          <Row className="mt-5">
            <Col xs={12}>
              <h1 className="welcomePage">Tell us about yourself</h1>
            </Col>
          </Row>
          <Row className="mt-4">
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={(e) => this.handleSubmit(e)}
              className="w-100 mt-4"
            >
              <Form.Row>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(e) =>
                        this.setState({ email: e.currentTarget.value })
                      }
                    />
                    <Form.Control.Feedback>
                      Looking Cool, Joker!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide an email
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.currentTarget.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      required
                      value={this.state.username}
                      onChange={(e) =>
                        this.setState({ username: e.currentTarget.value })
                      }
                    />
                  </Form.Group>
                  <Form.Row>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          required
                          value={this.state.name}
                          onChange={(e) =>
                            this.setState({ name: e.currentTarget.value })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Surname"
                          required
                          value={this.state.surname}
                          onChange={(e) =>
                            this.setState({ surname: e.currentTarget.value })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Col>
                <Col
                  xs={6}
                  className="d-flex flex-column align-items-center justify-content-end"
                >
                  <Form.Row className="h-100">
                    <img
                      className="preview img-fluid"
                      src={
                        this.state.image
                          ? URL.createObjectURL(this.state.image)
                          : "https://res.cloudinary.com/dhmw620tl/image/upload/v1611860794/benchmark3/kpixrojy3o5pwu6kz2eu.png"
                      }
                      alt="profile"
                    />
                  </Form.Row>
                  <Form.Row>
                    <Form.Label htmlFor="postImage">
                      <MdAddAPhoto />
                    </Form.Label>
                    <Form.Control
                      type="file"
                      className="visually-hidden"
                      id="postImage"
                      accept="image/*"
                      required
                      onChange={(e) =>
                        this.setState({ image: e.target.files[0] })
                      }
                    />
                  </Form.Row>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      value={this.state.title}
                      required
                      onChange={(e) =>
                        this.setState({ title: e.currentTarget.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Area"
                      value={this.state.area}
                      required
                      onChange={(e) =>
                        this.setState({ area: e.currentTarget.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      placeholder="Bio"
                      value={this.state.bio}
                      required
                      onChange={(e) =>
                        this.setState({ bio: e.currentTarget.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <hr />

              <Button className="submitRegister w-100" type="submit">
                Join now
              </Button>
            </Form>
          </Row>
        </Container>
        <div className="bg-colour-change"></div>
      </div>
    );
  }
}

export default Register;
