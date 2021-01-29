import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBagRemove } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { GrSchedulePlay } from "react-icons/gr";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkAlert from "./WorkAlert";
import { Container, Dropdown, Button } from "react-bootstrap";
import Search from "./Search";

import { withRouter, NavLink, Link } from "react-router-dom";

class NavbarApp extends React.Component {
  state = {
    user: {},
  };

  componentDidMount = () => {
    this.fetchProfile();
  };

  signOut = () => {
    localStorage.removeItem("profileID");
    this.props.history.push("/");
  };

  fetchProfile = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_SERVER +
          "/profile/" +
          localStorage.getItem("profileID")
      );
      const parsedResponse = await response.json();
      this.setState({ user: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid className="main-container">
        <div className="header container-lg">
          <div className="navbar-left">
            <Link to="/feed" className="Linkedin-icon">
              <AiFillLinkedin />
            </Link>

            <div className="search-input">
              <Search />
              {/*<AiOutlineSearch />
               <input type="text" placeholder="search" />*/}
            </div>
          </div>

          <div className="navbar-right">
            <NavLink to="/feed" activeClassName="active-link">
              <div
                className="navbar-home mx-3 text-center"
                onClick={() => this.props.history.push("/feed")}
              >
                <AiFillHome className="icon" style={{ marginTop: "0.5rem" }} />
                <h5
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: 0.3,
                    marginTop: 2,
                    textDecoration: "none",
                  }}
                >
                  Home
                </h5>
              </div>
            </NavLink>

            <div className="navbar-network mx-3 text-center">
              <BsFillPeopleFill className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 0.3,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Network
              </h5>
            </div>
            <div className="navbar-work mx-3 text-center">
              <IoBagRemove className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 0.3,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Work
              </h5>
            </div>
            <div className="navbar-msg mx-3 text-center">
              <AiFillMessage className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 0.3,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Messages
              </h5>
            </div>
            <div className="navbar-notifications mx-3 text-center">
              <IoMdNotifications className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 0.3,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Notifications
              </h5>
            </div>
            <div className="navbar-profile-menu mx-3 text-center">
              {/* <CgProfile className="icon" /> */}
              <img
                src={
                  this.state.user.image
                    ? this.state.user.image
                    : "https://res.cloudinary.com/dhmw620tl/image/upload/v1611823559/benchmark3/by5k88vrhdasow9oaqar.png"
                }
                alt=""
                style={{ objectFit: "cover" }}
              />
              <Dropdown alignRight>
                <Dropdown.Toggle id="dropdown-menu-align-right" title="Me">
                  Me
                </Dropdown.Toggle>
                <Dropdown.Menu id="meMenu" style={{ minWidth: "300px" }}>
                  {this.state.user ? (
                    <>
                      <Dropdown.Item
                        eventKey="1"
                        style={{ padding: "4px 12px" }}
                      >
                        <div className="d-flex">
                          <img
                            src={this.state.user.image}
                            style={{ objectFit: "cover" }}
                            alt=""
                            width="56px"
                            height="56px"
                          />

                          <div className="pl-1 d-flex flex-column justify-content-center">
                            <h6>
                              {this.state.user.name +
                                " " +
                                this.state.user.surname}
                            </h6>
                            <h6>{this.state.user.title}</h6>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item eventKey="1">Image</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Full Name</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Job Title</Dropdown.Item>
                    </>
                  )}

                  <Dropdown.Item eventKey="4">
                    <Button
                      id="profileButton"
                      onClick={() => this.props.history.push("/me")}
                    >
                      View Profile
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Account</Dropdown.Header>
                  <Dropdown.Item eventKey="5">Access My Premium</Dropdown.Item>
                  <Dropdown.Item eventKey="6">Settings & Privacy</Dropdown.Item>
                  <Dropdown.Item eventKey="7">Help</Dropdown.Item>
                  <Dropdown.Item eventKey="8">Language</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Manage</Dropdown.Header>
                  <Dropdown.Item eventKey="9">Posts & Activity</Dropdown.Item>
                  <Dropdown.Item eventKey="10">
                    Job Posting Account
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="11" onClick={this.signOut}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="side-menu mx-4">
              <WorkAlert />
              <div className="courses-menu text-center">
                <GrSchedulePlay className="icon" />
                <h5
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    marginTop: 4,
                    fontWeight: 400,
                  }}
                >
                  Courses
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(NavbarApp);
