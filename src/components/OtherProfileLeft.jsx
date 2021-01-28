import React from "react";
import "../styles/ProfileLeft.css";
import { Button, Row, Col } from "react-bootstrap";

import ContactInfo from "./ContactInfo";

import { withRouter } from "react-router-dom";

class OtherProfileLeft extends React.Component {
  state = {
    user: {},
    experiences: [],
  };

  handleClose = () => this.setState({ modalShow: false });
  handleShow = () => this.setState({ modalShow: true });

  componentDidMount = () => {
    this.fetchProfile();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.userid !== this.props.userid) {
      console.log(this.state.user, "this.state.user");
      this.fetchProfile();
    }
  };

  fetchProfile = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVER + "/profile/" + this.props.userid
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({
        user: parsedResponse,
        experiences: parsedResponse.experiences,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="col-12 col-lg-8 mt-3">
        <div className="profile-card">
          <div
            className="profile-profile-section"
            style={{ maxHeight: "380px" }}
          >
            <div className="coverImgHolder">
              <img
                src="/assets/images/cover.jpg"
                alt="cover-img"
                className="fluid coverImg"
              />
            </div>
            <div className="profilePic">
              {this.state.user !== "" ? (
                <img src={this.state.user.image} alt="profilePic" />
              ) : (
                <img
                  src="/assets/images/user-placeholder.png"
                  alt="profilePic"
                />
              )}
            </div>
            <div className="profile-info">
              <div className="buttons-row">
                <Button id="dropdown-basic-button">Message</Button>
                <Button id="moreBtn">More...</Button>
              </div>
            </div>
            <div className="nameSurnameUni">
              {this.state.user !== "" ? (
                <h4>
                  {this.state.user.name} {this.state.user.surname}
                </h4>
              ) : (
                <h4>Name Surname</h4>
              )}
              {this.state.user !== "" ? (
                <p style={{ fontSize: "1.2rem" }}>{this.state.user.title} </p>
              ) : (
                <p style={{ fontSize: "1.2rem" }}>Software Engineer</p>
              )}
              {this.state.user !== "" ? (
                <p style={{ lineHeight: "0.01rem" }}>
                  {this.state.user.area} •{" "}
                  <ContactInfo userInfo={this.state.user} otherPeople={true} />
                </p>
              ) : (
                <p style={{ lineHeight: "0.01rem" }}>
                  New York •{" "}
                  <span style={{ color: "#0A66C2" }}>Contact info</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {this.state.experiences.length > 0 && (
          <div
            className="profile-card mt-3 profile-profile-section "
            style={{ padding: "20px" }}
          >
            <Row>
              <Col className="mb-2 pl-3">
                <h4 onClick={() => this.props.history.push("/experience")}>
                  Experience:{" "}
                </h4>
              </Col>
            </Row>
            {this.state.experiences.map((experience, index) => (
              <Row className="d-flex justify-content-between" key={index}>
                <Col xs={1}>
                  <img
                    src={
                      experience.image
                        ? experience.image
                        : "https://placehold.it/60x60"
                    }
                    alt="pic"
                    width="60px"
                    height="60px"
                    style={{ objectFit: "cover" }}
                  />
                </Col>
                <Col xs={9} className="pl-4">
                  <h6>{experience.role}</h6>
                  <p style={{ fontSize: "0.9rem" }}>{experience.company}</p>
                  <p style={{ fontSize: "0.7rem", marginTop: "-15px" }}>
                    {experience.startDate}
                  </p>
                </Col>
                <Button id="edit-btn"></Button>
              </Row>
            ))}
          </div>
        )}
        <div
          className="profile-card mt-3 profile-profile-section "
          style={{ padding: "20px" }}
        >
          <Row>
            <Col className="mb-2 pl-3">
              <h4>Activity</h4>
            </Col>
            <Col>
              <p style={{ color: "#0A66C2", float: "right" }}>See more</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <div className="acivity-course">
                <Row>
                  <Col xs={1}>
                    <img src="https://placehold.it/60x60" alt="placeholder" />
                  </Col>
                  <Col xs={7} className="ml-5">
                    <h6>Learning ECMAScript 6+ (ES6+)</h6>
                    <p style={{ fontSize: "0.8rem" }}>shared by Name</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="acivity-course">
                <Row>
                  <Col xs={1}>
                    <img src="https://placehold.it/60x60" alt="placeholder" />
                  </Col>
                  <Col xs={7} className="ml-5">
                    <h6>Learning ECMAScript 6+ (ES6+)</h6>
                    <p style={{ fontSize: "0.8rem" }}>shared by Name</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className="profile-card mt-3 profile-profile-section "
          style={{ padding: "20px", maxHeight: "515px !important" }}
        >
          <Row>
            <Col className="mb-2 pl-3">
              <h4>Education: </h4>
            </Col>
            <Col style={{ float: "right" }}></Col>
          </Row>
          <Row>
            <Col xs={1}>
              <img src="https://placehold.it/60x60" alt="placeholder" />
            </Col>
            <Col
              xs={{ span: 7, offset: 2 }}
              md={{ span: 10, offset: 0 }}
              className="pl-4"
            >
              <h6>University of Something</h6>
              <p style={{ fontSize: "0.9rem" }}>
                Bachelor of Computer Science, Computer Software Engineering
              </p>
              <p style={{ fontSize: "0.7rem", marginTop: "-15px" }}>
                2015-2019
              </p>
            </Col>
            <Col
              xs={{ span: 1, offset: 1 }}
              md={{ span: 1, offset: 0 }}
              style={{ float: "right" }}
            ></Col>
          </Row>
          <hr />
          <Row>
            <Col className="mb-2 pl-3">
              <h4>Licenses & certifications: </h4>
            </Col>
            <Col style={{ float: "right" }}></Col>
          </Row>
          <Row>
            <Col xs={1}>
              <img
                src="/assets/images/logo.png"
                style={{ height: "60px", width: "60px" }}
                alt="logo"
              />
            </Col>
            <Col
              xs={{ span: 7, offset: 2 }}
              md={{ span: 10, offset: 0 }}
              className="pl-4"
            >
              <h6>Learning ECMAScript 6+ (ES6+)</h6>
              <p style={{ fontSize: "0.9rem" }}>LinkedIn</p>
              <p style={{ fontSize: "0.7rem", marginTop: "-15px" }}>
                Issued Novermber 2020 • No expiration date
              </p>
            </Col>
            <Col
              xs={{ span: 1, offset: 1 }}
              md={{ span: 1, offset: 0 }}
              style={{ float: "right" }}
            ></Col>
          </Row>
          <Row>
            <Col xs={1}>
              <img
                src="/assets/images/logo.png"
                style={{ height: "60px", width: "60px" }}
                alt="logo"
              />
            </Col>
            <Col
              xs={{ span: 7, offset: 2 }}
              md={{ span: 10, offset: 0 }}
              className="pl-4"
            >
              <h6>CSS: Selectors</h6>
              <p style={{ fontSize: "0.9rem" }}>LinkedIn</p>
              <p style={{ fontSize: "0.7rem", marginTop: "-15px" }}>
                Issued Novermber 2020 • No expiration date
              </p>
            </Col>
            <Col
              xs={{ span: 1, offset: 1 }}
              md={{ span: 1, offset: 0 }}
              style={{ float: "right" }}
            ></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(OtherProfileLeft);
