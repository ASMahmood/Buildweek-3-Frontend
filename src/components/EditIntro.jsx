import { Component } from "react";
import { Image, Modal, Form, Col, Button, Spinner } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

class EditIntro extends Component {
  state = {
    show: false,
    user: this.props.userInfo,
    userImage: null,
    loading: false,
  };

  setModalShow = (bool) => this.setState({ show: bool });

  updateFormField = (e) => {
    const updatedUserInfos = { ...this.state.user };
    updatedUserInfos[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ user: updatedUserInfos });
  };

  EditUserInfos = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.updateProfilePic();

    const url =
      process.env.REACT_APP_SERVER +
      "/profile/" +
      localStorage.getItem("profileID");
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(this.state.user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const parsedResponse = await response.json();
      console.log("parsedResponse edti intro", parsedResponse);
      if (response.ok) {
        setTimeout(() => {
          this.props.fetchProfile();
          this.setState({ loading: false });
          this.setModalShow(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateUserIMG = (e) => {
    this.setState({ userImage: e.target.files[0] });
  };

  updateProfilePic = async () => {
    const FormImage = new FormData();
    FormImage.append("profilePic", this.state.userImage);
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER +
          `/profile/${localStorage.getItem("profileID")}/picture`,
        {
          method: "POST",
          headers: new Headers({
            Accept: "application/json",
          }),
          body: FormImage,
        }
      );
      if (response.ok) {
        const parRes = await response.json();
        console.log(parRes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Link
          onClick={() => {
            this.setModalShow(true);
          }}
        >
          <BiPencil />
        </Link>

        <Modal
          show={this.state.show}
          onHide={() => this.setModalShow(false)}
          aria-labelledby="example-custom-modal-styling-title"
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Edit Intro
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.EditUserInfos}>
              <div className="coverImgHolder">
                <Image
                  src="/assets/images/cover.jpg"
                  alt="cover-img"
                  className="fluid coverImg"
                />
              </div>
              <div className="profilePic">
                {this.props.userInfo !== "" ? (
                  <img
                    src={
                      this.state.userImage
                        ? URL.createObjectURL(this.state.userImage)
                        : this.props.userInfo.image
                    }
                    alt="profilePic"
                  />
                ) : (
                  <img
                    src="/assets/images/user-placeholder.png"
                    alt="profilePic"
                  />
                )}
                <>
                  <input
                    type="file"
                    id="user-image"
                    accept="image/*"
                    onChange={(e) => this.updateUserIMG(e)}
                  />
                </>
              </div>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    onChange={this.updateFormField}
                    value={this.state.user.name}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    type="text"
                    id="surname"
                    value={this.state.user.surname}
                    onChange={this.updateFormField}
                    required
                  />
                  <Link to="#aaaa">Add former name</Link>
                </Form.Group>
              </Form.Row>
              <br />
              <Form.Row>
                <Link disabled className="text-secondary">
                  {" "}
                  + Record name pronunciation
                </Link>
              </Form.Row>

              <Form.Row>
                <b className="text-danger">
                  Name pronunciation can only be added using your mobile app.
                </b>
              </Form.Row>
              <br />

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Headline *</Form.Label>
                <Form.Control
                  type="text"
                  id="title"
                  onChange={this.updateFormField}
                  value={this.state.user.title}
                  required
                />
              </Form.Group>

              <Form.Row>
                <Link className="w-100">
                  <div className="d-flex justify-content-between">
                    <AiOutlinePlus />
                    <h5>Add current position</h5>
                  </div>
                </Link>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Show education in my intro"
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Education *</Form.Label>
                <Form.Control value="Education Field" disabled />
              </Form.Group>

              <Form.Group controlId="formGridAddress3">
                <Form.Label>Locations in this Country/Region</Form.Label>
                <Form.Control
                  id="area"
                  value={this.state.user.area}
                  onChange={this.updateFormField}
                  required
                />
              </Form.Group>

              <div className="text-right">
                <Button variant="primary" type="submit">
                  {this.state.loading ? (
                    <Spinner animation="border" size="sm" variant="light" />
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EditIntro;
