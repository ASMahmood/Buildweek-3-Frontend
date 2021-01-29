import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/HomeProfile.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { withRouter } from "react-router-dom";

class HomeProfile extends React.Component {
  state = {
    user: "",
  };

  render() {
    return (
      <div id="wrapper">
        <div className="profile-wrapper">
          <img src="/assets/images/cover.jpg" alt="cover" class="cover-img" />
          <img src={this.props.user.image} alt="profile" class="profile-img" />
          <div
            class="profile-info"
            onClick={() => this.props.history.push("/me")}
            style={{ cursor: "pointer" }}
          >
            <h6>
              {this.props.user.name} {this.props.user.surname}
            </h6>
            <p>{this.props.user.title}</p>
          </div>
          <hr />
          <Row className="growNetwork prof-section">
            <Col xs={9}>
              <Row style={{ opacity: "0.6" }}>Connections</Row>
              <Row>Grow your network</Row>
            </Col>
            <Col xs={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
                style={{ marginTop: "5px" }}
              >
                <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
              </svg>
            </Col>
          </Row>
          <hr />
          <div class="profile-saved-items">
            <Row>
              <Col xs={1}>
                <BsFillBookmarkFill
                  style={{
                    fontSize: "1rem",
                    marginTop: "0px",
                    position: "relative",
                    left: "15px",
                    float: "right",
                  }}
                />
              </Col>
              <Col xs={10}>
                <h6 style={{ fontSize: "0.8rem" }}>Saved Items</h6>
              </Col>
            </Row>
          </div>
        </div>
        <div className="groups-wrapper">
          <Row style={{ position: "relative", left: "20px" }}>
            <h6>Groups</h6>
          </Row>
          <Row>
            <Col xs={9}>
              <h6 style={{ marginLeft: "5px" }}>Events</h6>
            </Col>
            <Col xs={1}>
              <AiOutlinePlus
                className="aiOutlinePlus"
                style={{
                  fontSize: "1.5rem",
                  color: "#4B4B4B",
                  marginTop: "-5px",
                }}
              />
            </Col>
          </Row>
          <Row style={{ position: "relative", left: "20px" }}>
            <h6>Followed hashtags</h6>
          </Row>
          <hr />
          <span
            style={{
              textAlign: "center",
              padding: "0px",
              color: "#4B4B4B",
              margin: "0 auto",
              fontSize: "0.8rem",
            }}
          >
            <h6>Discover more</h6>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeProfile);
