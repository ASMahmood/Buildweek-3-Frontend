import React from "react";
import { Accordion, Card, Button, ListGroup, Dropdown } from "react-bootstrap";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./DropdownProfileMenu.css";
import { withRouter } from "react-router-dom";

class DropdownProfileMenu extends React.Component {
  generateCV = async () => {
    try {
      window.open(
        process.env.REACT_APP_SERVER +
          "/profile/" +
          localStorage.getItem("profileID") +
          "/profilePDF"
      );
    } catch (error) {
      console.log(error);
    }
  };
  experienceCSV = async () => {
    try {
      window.open(
        process.env.REACT_APP_SERVER +
          "/experience/export/csv/" +
          this.props.username
      );
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic-button" title="Add profile section">
          Add profile section
        </Dropdown.Toggle>

        <Dropdown.Menu id="profileDrop">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Intro</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <ListGroup variant="flush">
                  <ListGroup.Item>Profile photo</ListGroup.Item>
                  <ListGroup.Item>Looking for a new job</ListGroup.Item>
                  <ListGroup.Item>Share that you're hiring</ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>About</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <ListGroup variant="flush">
                  <ListGroup.Item>Summary</ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Featured</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <ListGroup variant="flush">
                  <ListGroup.Item>Posts</ListGroup.Item>
                  <ListGroup.Item>Articles</ListGroup.Item>
                  <ListGroup.Item>Links</ListGroup.Item>
                  <ListGroup.Item>Media</ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Background</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <ListGroup variant="flush">
                  <ListGroup.Item
                    onClick={() => this.props.history.push("/experience")}
                  >
                    Work Experience
                  </ListGroup.Item>
                  <ListGroup.Item>Education</ListGroup.Item>
                  <ListGroup.Item>Licenses & certificates</ListGroup.Item>
                  <ListGroup.Item>Volunteer experience</ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Skills</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <ListGroup variant="flush">
                  <ListGroup.Item>Skills</ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Accomplishments</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <ListGroup variant="flush">
                  <ListGroup.Item>Publications</ListGroup.Item>
                  <ListGroup.Item>Patents</ListGroup.Item>
                  <ListGroup.Item>Courses</ListGroup.Item>
                  <ListGroup.Item>Projects</ListGroup.Item>
                  <ListGroup.Item>Honors & awards</ListGroup.Item>
                  <ListGroup.Item>Test scores</ListGroup.Item>
                  <ListGroup.Item>Languages</ListGroup.Item>
                  <ListGroup.Item>Organizations</ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Additional information</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <ListGroup variant="flush">
                  <ListGroup.Item>Request a recommendation</ListGroup.Item>
                  <ListGroup.Item onClick={() => this.generateCV()}>
                    Generate a CV
                  </ListGroup.Item>
                  <ListGroup.Item onClick={() => this.experienceCSV()}>
                    Export experiences into a CSV
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span>Supported languages</span>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  <ExpandMoreIcon />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Add a profile in another language
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default withRouter(DropdownProfileMenu);
