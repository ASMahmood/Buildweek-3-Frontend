import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/ProfileLeft.css";
import {
  Button,
  Container,
  Row,
  Col,
  ProgressBar,
  Table,
  Spinner,
} from "react-bootstrap";

import { BiPencil } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import Form from "../components/Form";
import DropdownProfileMenu from "./DropdownProfileMenu";
import ContactInfo from "./ContactInfo";
import EditIntro from "./EditIntro";

class ProfileLeft extends React.Component {
  state = {
    user: "",
    experiences: [],
    loading: true,
  };

  componentDidMount = () => {
    this.fetchProfile();
  };

  fetchProfile = async () => {
    try {
      let response = await fetch(
        process.env.REACT_APP_SERVER +
          "/profile/" +
          localStorage.getItem("profileID")
      );
      let parsedResponse = await response.json();

      this.setState({
        user: parsedResponse,
        experiences: parsedResponse.experiences,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="col-12 col-lg-8 mt-3">
        {this.state.loading ? (
          <div className="d-flex justify-content-center align-items-center h-50">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <>
            <div className="profile-card">
              <div
                className="profile-profile-section"
                style={{ maxHeight: "460px" }}
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
                  <div className="buttons-row align-items-center">
                    <DropdownProfileMenu username={this.state.user.username} />

                    <Button id="moreBtn">More...</Button>
                    {this.state.user ? (
                      <EditIntro
                        userInfo={this.state.user}
                        fetchProfile={this.fetchProfile}
                      />
                    ) : (
                      <BiPencil className="biPencil" />
                    )}
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
                    <p style={{ fontSize: "1.2rem" }}>
                      {this.state.user.title}{" "}
                    </p>
                  ) : (
                    <p style={{ fontSize: "1.2rem" }}>Software Engineer</p>
                  )}
                  {this.state.user !== "" ? (
                    <p style={{ lineHeight: "0.01rem" }}>
                      {this.state.user.area} •{" "}
                      <span style={{ color: "#0A66C2" }}>
                        {this.state.user ? (
                          <ContactInfo userInfo={this.state.user} />
                        ) : (
                          <>Contact Info</>
                        )}
                      </span>
                    </p>
                  ) : (
                    <p style={{ lineHeight: "0.01rem" }}>
                      New York •{" "}
                      <span style={{ color: "#0A66C2" }}>Contact info</span>
                    </p>
                  )}
                </div>
                <Container className="fluid boxes">
                  <Row className="row-cols-12 row-cols-md-12">
                    <Col>
                      <div className="profile-info-box">
                        <p>
                          <strong>Show recruiters you're open to work</strong> -
                          you control who sees this. •
                          <span style={{ color: "#0A66C2" }}>Get started</span>
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div className="profile-info-box">
                        <p>
                          <strong>Share that you're hiring</strong> - and
                          attract qualified candidates •
                          <span style={{ color: "#0A66C2" }}>Get started</span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div
              className="profile-card mt-3 profile-profile-section"
              style={{ padding: "15px" }}
            >
              <h4>
                Profile Strength: <strong>Intermediate</strong>
              </h4>
              <ProgressBar animated now={75} className="mt-4" />
            </div>
            <div className="profile-card mt-3">
              <div
                className="profile-profile-section mb-2"
                style={{ padding: "10px" }}
              >
                <div className="component-exp-wrapper">
                  <h4
                    style={{ texAlign: "left !important", paddingLeft: "10px" }}
                  >
                    Featured
                  </h4>
                </div>
                <div
                  className="profile-info-box"
                  style={{ margin: "0 auto", width: "98%" }}
                >
                  <p style={{ textAlign: "left" }}>
                    <strong>Showcase your work</strong> by featuring your best
                    posts, documents, media and websites.
                    <a href="#aaa" style={{ color: "#0A66C2" }}>
                      <br />
                      Add Featured
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
                <Col style={{ float: "right" }}>
                  <span
                    style={{
                      fontSize: "1.6rem",
                      float: "right",
                      color: "#0A66C2",
                    }}
                  >
                    <Form
                      userId={this.state.user._id}
                      username={this.state.user.username}
                      method="POST"
                      fetchProfile={this.fetchProfile}
                    />
                  </span>
                </Col>
              </Row>

              {this.state.experiences.map((experience, idx) => (
                <Row key={idx} className="d-flex justify-content-between">
                  {this.state.loading ? (
                    <Spinner animation="border" />
                  ) : (
                    <Col xs={2} md={1}>
                      <img
                        src={experience.image}
                        alt="pic"
                        style={{
                          margin: "5px 0",
                          height: "80px",
                          width: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                  )}
                  <Col xs={6} md={9} className="pl-4">
                    <div className="d-flex align-items-center">
                      <h6>{experience.role}</h6>

                      <h6 className="mx-1">at</h6>

                      <h6>{experience.company}</h6>
                    </div>
                    <p style={{ fontSize: "0.9rem", marginTop: "-5px" }}>
                      {experience.description}
                    </p>
                    <p
                      style={{ fontSize: "0.7rem", marginTop: "-13px" }}
                      title={experience.startDate}
                    >
                      {new Intl.DateTimeFormat("en-GB", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      }).format(new Date(experience.startDate))}
                    </p>
                  </Col>

                  <Form
                    userId={this.state.user._id}
                    experience={experience}
                    expId={experience._id}
                    method="PUT"
                    fetchProfile={this.fetchProfile}
                  />
                  {/* <Button id="edit-btn" onClick={() => this.editExperience()}>
                <BiPencil />
              </Button> */}
                </Row>
              ))}
            </div>

            <div
              className="profile-card mt-3 profile-profile-section mb-2"
              style={{ padding: "20px", backgroundColor: "#DCE6F1" }}
            >
              <h4>Your Dashboard</h4>
              <p>
                <em>Private to you</em>
              </p>
              <div className="dashboardHolder">
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <h2>2</h2>
                        <p>Who viewed your profile</p>
                      </td>
                      <td>
                        <h2>0</h2>
                        <p>Article views</p>
                      </td>
                      <td>
                        <h2>4</h2>
                        <p>Search appearances</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="dashboardHolder">
                <Row style={{ lineHeight: "0.7rem" }}>
                  <Col xs={1} className="mt-2 ml-1">
                    <BsFillBookmarkFill
                      style={{
                        fontSize: "1.6rem",
                        margin: "4px",
                        marginLeft: "10px",
                      }}
                    />
                  </Col>
                  <Col xs={10} className="mt-1">
                    <h6>My items</h6>
                    <p>Keep track of your jobs, courses and articles</p>
                  </Col>
                </Row>
              </div>
            </div>
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
                        <img
                          src="https://placehold.it/60x60"
                          alt="placeholder"
                        />
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
                        <img
                          src="https://placehold.it/60x60"
                          alt="placeholder"
                        />
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
                <Col style={{ float: "right" }}>
                  <AiOutlinePlus
                    style={{
                      fontSize: "1.6rem",
                      float: "right",
                      color: "#0A66C2",
                    }}
                  />
                </Col>
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
                >
                  <BiPencil style={{ color: "#0A66C2", fontSize: "1.6rem" }} />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col className="mb-2 pl-3">
                  <h4>Licenses & certifications: </h4>
                </Col>
                <Col style={{ float: "right" }}>
                  <AiOutlinePlus
                    style={{
                      fontSize: "1.6rem",
                      float: "right",
                      color: "#0A66C2",
                    }}
                  />
                </Col>
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
                >
                  <BiPencil style={{ color: "#0A66C2", fontSize: "1.6rem" }} />
                </Col>
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
                >
                  <BiPencil style={{ color: "#0A66C2", fontSize: "1.6rem" }} />
                </Col>
              </Row>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(ProfileLeft);
