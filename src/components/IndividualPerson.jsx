import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./IndividualPerson.css";
import ShodyDivider from "./ShodyDivider";
import { withRouter } from "react-router-dom";

class IndividualPerson extends React.Component {
  render() {
    return (
      <Row id="person" className="d-flex align-items-center">
        <Container className="p-0">
          <Row>
            <Col xs={3} className="d-flex align-items-center">
              <img src={this.props.pic} alt="" width="56px" />
            </Col>

            <Col
              className="d-flex flex-column align-items-start"
              onClick={() =>
                this.props.history.push("/profile/" + this.props.userid)
              }
            >
              <h6>{this.props.name}</h6>
              <span>{this.props.job}</span>
            </Col>

            <Col xs={2} className="d-flex align-items-center">
              <div className="addFriendCircle d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
        {this.props.divider && <ShodyDivider />}
      </Row>
    );
  }
}

export default withRouter(IndividualPerson);
