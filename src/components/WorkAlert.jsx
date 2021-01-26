import React from "react";
import { Alert, Card, Container, Row } from "react-bootstrap";
import "./styles/WorkAlert.css";
import AddIcon from "@material-ui/icons/Add";
import { CgMenuGridR } from "react-icons/cg";

class WorkAlert extends React.Component {
  state = {
    show: false,
  };
  render() {
    if (this.state.show) {
      return (
        <>
          <div
            className="products-menu text-center"
            onClick={() => this.setState({ show: false })}
          >
            <CgMenuGridR className="icon mx-4" />
            <h5
              style={{
                fontSize: 10,
                letterSpacing: 1,
                marginTop: 4,
                fontWeight: 400,
              }}
            >
              Products
            </h5>
          </div>
          <Alert
            id="sideNav"
            onClose={() => this.setState({ show: false })}
            dismissible
          >
            <Card>
              <Card.Header>Visit More LinkedIn Products</Card.Header>
              <Card.Body>
                <Container fluid>
                  <Row>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-talent-insights-medium-a"
                              x1="34.05"
                              y1="44.47"
                              x2="13.67"
                              y2="19.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#665ed0"></stop>
                              <stop offset="1" stop-color="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                            fill="#caedff"
                          ></path>
                          <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                          <path
                            d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                            fill="url(#app-talent-insights-medium-a)"
                          ></path>
                        </svg>
                        <span>Insights</span>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-jobs-posting-@1-a"
                              x1="-6.68"
                              y1="-1"
                              x2="25.05"
                              y2="26.36"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#665ed0"></stop>
                              <stop offset="1" stop-color="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill="none"
                            stroke="#caedff"
                            stroke-miterlimit="10"
                            stroke-width="2"
                            d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                          ></path>
                          <rect
                            x="8"
                            y="14"
                            width="24"
                            height="16"
                            rx="1"
                            ry="1"
                            fill="url(#app-jobs-posting-@1-a)"
                          ></rect>
                          <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                          <path fill="#33aada" d="M15 23h10v3H15z"></path>
                          <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                        </svg>
                        <span>Post a Job</span>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-ads-@1-a"
                              x1="34.78"
                              y1="3.84"
                              x2="14.66"
                              y2="25.84"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#665ed0"></stop>
                              <stop offset="1" stop-color="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <g fill="url(#app-ads-@1-a)">
                            <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                            <circle cx="20" cy="20" r="4"></circle>
                          </g>
                          <circle
                            cx="20"
                            cy="20"
                            r="2"
                            transform="rotate(-45 20.002 19.995)"
                            fill="#33aada"
                          ></circle>
                          <path
                            fill="#33aada"
                            d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                          ></path>
                          <path
                            fill="#33aada"
                            d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                          ></path>
                        </svg>
                        <span>Advertise</span>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-sales-navigator-@1-a"
                              x1="40.53"
                              y1="-53.4"
                              x2="20.23"
                              y2="19.17"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#665ed0"></stop>
                              <stop offset="1" stop-color="#0073b1"></stop>
                            </linearGradient>
                          </defs>
                          <circle
                            cx="20"
                            cy="20"
                            r="14"
                            fill="url(#app-sales-navigator-@1-a)"
                          ></circle>
                          <path
                            d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                            fill="#fff"
                          ></path>
                          <path
                            d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                            fill="#98d8f4"
                          ></path>
                          <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                          <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                        </svg>
                        <span>Find Leads</span>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <defs>
                            <linearGradient
                              id="app-groups-@1-b"
                              x1="1.84"
                              y1="-24.59"
                              x2="20.66"
                              y2="25.05"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#665ed0"></stop>
                              <stop offset="1" stop-color="#0073b1"></stop>
                            </linearGradient>
                            <clipPath id="app-groups-@1-a">
                              <path
                                d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                                fill="none"
                              ></path>
                            </clipPath>
                          </defs>
                          <path
                            d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                            fill="#caedff"
                          ></path>
                          <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                          <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                          <g clip-path="url(#app-groups-@1-a)">
                            <path
                              d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                              fill="url(#app-groups-@1-b)"
                            ></path>
                            <path
                              fill="#0091ca"
                              d="M26 21h6v14h-6zM8 21h6v14H8z"
                            ></path>
                          </g>
                        </svg>
                        <span>Groups</span>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                          <path
                            d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                            fill="#0091ca"
                          ></path>
                          <path
                            d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                            fill="#33aada"
                            opacity=".8"
                          ></path>
                          <path
                            fill="#0073b1"
                            d="M19 26.34l4-4V18h-6v6.34l2 2z"
                          ></path>
                        </svg>
                        <span>ProFinder</span>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 40 40"
                          data-supported-dps="40x40"
                          width="40"
                          height="40"
                          focusable="false"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#0084bf"
                            d="M7 27h26v2H7z"
                          ></path>
                          <path
                            d="M31 32H9c-1.1 0-2-.9-2-2h26c0 1.1-.9 2-2 2z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="#33aada"
                          ></path>
                          <linearGradient
                            id="app-salary-@1-a"
                            gradientUnits="userSpaceOnUse"
                            x1="21.826"
                            y1="19.121"
                            x2="16.728"
                            y2="13.2"
                          >
                            <stop offset="0" stop-color="#1074af"></stop>
                            <stop offset="1" stop-color="#5251c0"></stop>
                          </linearGradient>
                          <circle
                            cx="20"
                            cy="17"
                            r="5"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="url(#app-salary-@1-a)"
                          ></circle>
                          <linearGradient
                            id="app-salary-@1-b"
                            gradientUnits="userSpaceOnUse"
                            x1="25.44"
                            y1="23.318"
                            x2="10.254"
                            y2="5.681"
                          >
                            <stop offset="0" stop-color="#1074af"></stop>
                            <stop offset="1" stop-color="#5251c0"></stop>
                          </linearGradient>
                          <path
                            d="M32 8H8c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zm-1 12c-1.9.7-3.3 2.2-4 4H13c-.7-1.9-2.2-3.3-4-4v-6c1.9-.7 3.3-2.2 4-4h14c.7 1.9 2.2 3.3 4 4v6z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            fill="url(#app-salary-@1-b)"
                          ></path>
                          <g clip-rule="evenodd">
                            <path
                              d="M16.5 20.5c2 2 5.1 2 7.1 0s2-5.1 0-7.1l-7.1 7.1z"
                              fill-rule="evenodd"
                              fill="#0084bf"
                            ></path>
                            <path
                              fill="none"
                              d="M20 9.929l7.071 7.07L20 24.072 12.929 17z"
                            ></path>
                          </g>
                        </svg>
                        <span>Salary</span>
                      </Card.Body>
                    </Card>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>LinkedIn Business Services</Card.Header>
              <Card.Body>
                <Row>
                  <h6>Talent Solutions</h6>
                  <span className="text-muted">
                    Find, attract, and recruit talent
                  </span>
                </Row>
                <Row>
                  <h6>Sales Solutions</h6>
                  <span className="text-muted">Unlock sales opportunities</span>
                </Row>
                <Row>
                  <h6>Post a job for free</h6>
                  <span className="text-muted">
                    Get your job in front of quality candidtates
                  </span>
                </Row>
                <Row>
                  <h6>Marketing Solutions</h6>
                  <span className="text-muted">
                    Acquire customers and grow your business
                  </span>
                </Row>
                <Row>
                  <h6>Learning Solutions</h6>
                  <span className="text-muted">
                    Develop talent across your organization
                  </span>
                </Row>
              </Card.Body>
              <Card.Footer>
                Create a Company Page <AddIcon fontSize="small" />{" "}
              </Card.Footer>
            </Card>
          </Alert>
          <div className="backgroundFade"></div>
        </>
      );
    } else {
      return (
        <div
          className="products-menu text-center"
          onClick={() => this.setState({ show: true })}
        >
          <CgMenuGridR className="icon mx-4" />
          <h5
            style={{
              fontSize: 10,
              letterSpacing: 1,
              marginTop: 4,
              fontWeight: 400,
            }}
          >
            Products
          </h5>
        </div>
      );
    }
  }
}

export default WorkAlert;
