import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/ProfileLeft.css';
import { BiPencil } from "react-icons/bi";
import Form from './Form';

const ExperiencePage = () => {
  return (
    <>
      <div
        className="profile-card mt-3 profile-profile-section "
        style={{ padding: "20px" }}
      >
        <Row>
          <Col className="mb-2 pl-3">
            <h4>Experience: </h4>
          </Col>
          <Col style={{ float: "right" }}>
            {/*<AiOutlinePlus
              style={{ fontSize: "1.6rem", float: "right", color: "#0A66C2" }}
            />*/}
            <span style={{ fontSize: "1.6rem", float: "right", color: "#0A66C2" }}><Form /></span>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <img src="https://placehold.it/60x60" alt='img' />
          </Col>
          <Col xs={10} className="pl-4">
            <h6>Web Developer</h6>
            <p style={{ fontSize: "0.9rem" }}>
              Google, LLC
            </p>
            <p style={{ fontSize: "0.7rem", marginTop: "-15px" }}>
              2019-Present
            </p>
          </Col>
          <Col xs={1} style={{ float: "right" }}>
            <BiPencil style={{ color: "#0A66C2", fontSize: "1.6rem" }} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ExperiencePage;