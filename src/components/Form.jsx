import React from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { GrAdd } from "react-icons/gr";
import { BiPencil } from "react-icons/bi";
import "./styles/Form.css";

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loading: false,
      selectedFile: null,
      experience:
        this.props.method === "PUT"
          ? this.props.experience
          : {
              role: "",
              company: "",
              startDate: "",
              endDate: "",
              description: "",
              area: "",
              username: this.props.username,
              profileID: this.props.userId,
            },
    };
    this.fileRef = React.createRef();
  }

  sendData = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.props.method === "POST") {
      await this.postExperience();
      await this.fetchExpImg(this.state.experience._id);
      // await this.cheekyFetch();
    } else {
      await this.editExperience();
      await this.fetchExpImg(this.props.expId);
      // await this.cheekyFetch();
    }
    this.props.fetchProfile();
  };

  postExperience = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVER + `/experience/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.experience),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        let message = await response.json();
        this.setState({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });

        this.setState({ experience: message, loading: false });
        this.handleClose();
        this.props.fetchProfile();
      }
    } catch (error) {
      console.log(error);
    }
  };

  editExperience = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVER + `/experience/${this.props.expId}`,
        {
          method: "PUT",
          body: JSON.stringify(this.state.experience),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        this.handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  updateFormField = (e) => {
    this.setState({
      experience: {
        ...this.state.experience,
        [e.currentTarget.id]: e.currentTarget.value,
      },
    });
  };

  handleDelete = async (expId, e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVER + `/experience/${this.props.expId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok && this.props.expId !== expId) {
        this.handleClose();
        this.props.fetchProfile();
      }
    } catch (error) {
      console.log(error);
    }
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  fetchExpImg = async (expID) => {
    const formData = new FormData();
    formData.append("profilePic", this.state.selectedFile);
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER + `/experience/${expID}/picture`,
        {
          body: formData,
          method: "POST",
        }
      );
      if (response.ok) {
        await response.json();
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
  };

  render() {
    const { show } = this.state;
    const { experience } = this.state;
    return (
      <>
        {/* <Button id="edit-btn" onClick={() => this.editExperience()}>
                <BiPencil />
              </Button> */}
        <Button
          id={this.props.method === "POST" ? "modal-button" : "edit-btn"}
          onClick={this.handleShow}
        >
          {this.props.method === "POST" ? <GrAdd /> : <BiPencil />}
        </Button>

        <Modal
          show={show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Experiencies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Role *</Form.Label>
                <Form.Control
                  type="text"
                  id="role"
                  onChange={this.updateFormField}
                  value={this.state.experience.role}
                  placeholder="Es: Reatail Sales Manager"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  id="company"
                  onChange={this.updateFormField}
                  value={this.state.experience.company}
                  placeholder="Es: Google"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Check
                  className="my-2"
                  type="checkbox"
                  label="I'm currently working here"
                />
                <Form.Label>Start Date *</Form.Label>
                <Form.Control
                  type="date"
                  id="startDate"
                  onChange={this.updateFormField}
                  value={this.state.experience.startDate.split("T")[0]}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>End Date </Form.Label>
                <Form.Control
                  type="date"
                  id="endDate"
                  onChange={this.updateFormField}
                  value={this.state.experience.endDate}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>description</Form.Label>
                <Form.Control
                  as="textarea"
                  id="description"
                  onChange={this.updateFormField}
                  value={this.state.experience.description}
                  rows={4}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  id="area"
                  onChange={this.updateFormField}
                  value={this.state.experience.area}
                  placeholder="Es: Milano"
                />
              </Form.Group>
              <input
                name="image"
                type="file"
                id="expImage"
                accept="image/*"
                ref={(fileInput) => (this.fileRef = fileInput)}
                onChange={this.onFileChange}
                hidden
              />
            </Form>
            <div className="button-modal-wrapper">
              <Button id="upload-btn" onClick={() => this.fileRef.click()}>
                Upload
              </Button>
              <Button id="link-btn">Link</Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant={this.props.method === "POST" ? "secondary" : "danger"}
              onClick={(e) => this.handleDelete(experience.expId, e)}
            >
              Delete
            </Button>
            <Button variant="primary" onClick={(e) => this.sendData(e)}>
              {this.state.loading ? (
                <Spinner animation="border" size="sm" variant="light" />
              ) : (
                "Save"
              )}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FormModal;
