import { Row, Col, Container } from "react-bootstrap";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { AiFillQuestionCircle, AiOutlineSetting } from "react-icons/ai";

const LinkedIn = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{ color: "blue", fontSize: "25px" }}
    >
      <b>Linked</b>
      <FaLinkedin />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-4" style={{ zIndex: "0" }}>
      <Container>
        <Row className="mt-2">
          <Col md={{ span: 10, offset: 1 }}>
            <Row>
              <Col>
                <div>
                  <LinkedIn />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <a href="#ffffffffff">About</a>
                </div>
                <div>
                  <a href="#ffffffffff">Community Guidelines</a>
                </div>
                <div>
                  <a href="#fffffffffff">Privacy & Terms</a>
                </div>
                <div>
                  <a href="#ffffffff">Sales Solutions</a>
                </div>
                <div>
                  <a href="#ffffffff">Safety Center</a>
                </div>
                <div>
                  <small>LinkedIn Corporation © 2020</small>
                </div>
              </Col>
              <Col>
                <div>
                  <a href="#fff">Accessibility</a>
                </div>
                <div>
                  <a href="#ffffffffff">Careers</a>
                </div>
                <div>
                  <a href="#fffffffffff">Ad Choices</a>
                </div>
                <div>
                  <a href="#fffffffffff">Mobile</a>
                </div>
              </Col>
              <Col>
                <div>
                  <a href="#fff">Talent Solutions</a>
                </div>
                <div>
                  <a href="#ffffffffff">Marketing Solutions</a>
                </div>
                <div>
                  <a href="#Advertising">Advertising</a>
                </div>
                <div>
                  <a href="#Small Business">Small Business</a>
                </div>
              </Col>
              <Col>
                <div>
                  <a href="#Questions?">
                    <span style={{ fontSize: "24px" }}>
                      <AiFillQuestionCircle />
                    </span>{" "}
                    Questions?
                  </a>
                  <div>
                    <small className="m-0 p-0">Visit our Help Center.</small>
                  </div>
                </div>
                <div>
                  <a href="#privacy">
                    {" "}
                    <span style={{ fontSize: "24px" }}>
                      <AiOutlineSetting />
                    </span>
                    Manage your account and privacy
                  </a>
                  <div>
                    <small>Go to your Settings</small>
                  </div>
                </div>
                <div>
                  <a href="#fffffffffff">Contact Us</a>
                </div>
              </Col>
              <Col>
                <div>
                  <label htmlFor="cars">
                    <small>Select Language</small>
                  </label>
                  <select id="cars" name="cars">
                    <option value="volvo">English (English)</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
