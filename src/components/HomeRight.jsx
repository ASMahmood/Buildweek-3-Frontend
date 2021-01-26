import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsInfoSquareFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "../styles/HomeRight.css";

const HomeRight = () => {
  return (
    <>
      <div className="recomandations ">
        <Row>
          <Col style={{ float: "left" }}>
            <p className="title">Add to your feed</p>
          </Col>
          <Col style={{ float: "right" }}>
            <BsInfoSquareFill
              style={{ fontSize: "0.9rem", float: "right", marginTop: "3px" }}
            />
          </Col>
        </Row>
        <div className="singleRecomandation">
          <Row>
            <Col xs={2}>
              <img src="/assets/images/stackoverflow.png" alt="ddd" />
            </Col>
            <Col xs={6}>
              <h6>Stackoverflow</h6>
              <p style={{ fontSize: "0.7rem" }}>Company</p>
            </Col>
            <Col xs={3}>
              <Row>
                <button>
                  <AiOutlinePlus
                    style={{
                      float: "left",
                      fontSize: "0.7rem",
                      marginTop: "15%",
                    }}
                  />
                  <span style={{ fontSize: "0.7rem" }} className="follow-btn">
                    Follow
                  </span>
                </button>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="singleRecomandation">
          <Row>
            <Col xs={2}>
              <img src="/assets/images/ffc.jpg" alt="ddd" />
            </Col>
            <Col xs={6}>
              <h6>FreeCodeCamp</h6>
              <p style={{ fontSize: "0.7rem" }}>Company</p>
            </Col>
            <Col xs={3}>
              <Row>
                <button>
                  <AiOutlinePlus
                    style={{
                      float: "left",
                      fontSize: "0.7rem",
                      marginTop: "15%",
                    }}
                  />
                  <span style={{ fontSize: "0.7rem" }} className="follow-btn">
                    Follow
                  </span>
                </button>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="singleRecomandation">
          <Row>
            <Col xs={2}>
              <img src="/assets/images/ibm.png" alt="ddd" />
            </Col>
            <Col xs={6}>
              <h6>IBM</h6>
              <p style={{ fontSize: "0.7rem" }}>Company</p>
            </Col>
            <Col xs={3}>
              <Row>
                <button>
                  <AiOutlinePlus
                    style={{
                      float: "left",
                      fontSize: "0.7rem",
                      marginTop: "16%",
                    }}
                  />
                  <span style={{ fontSize: "0.7rem" }} className="follow-btn">
                    Follow
                  </span>
                </button>
              </Row>
            </Col>
          </Row>
        </div>
        <h6 className="bottomh6">Click here for more recomandations</h6>
      </div>

      <div className="recomandations second" style={{ marginTop: "1rem" }}>
        <Row>
          <Col style={{ float: "left" }}>
            <p className="title">Today's most viewed courses</p>
          </Col>
          <Col style={{ float: "right" }}>
            <BsInfoSquareFill
              style={{ fontSize: "0.9rem", float: "right", marginTop: "3px" }}
            />
          </Col>
        </Row>
        <div className="singleRecomandation second">
          <Row>
            <h6>1. The Six Moring Habits Of High Perf..</h6>
            <p style={{ fontSize: "0.7rem" }}>
              Pete Mockaitis | How to be awsome at your..
            </p>
          </Row>
        </div>
        <div className="singleRecomandation second">
          <Row>
            <h6>2. JavaScript Essentials Training</h6>
            <p style={{ fontSize: "0.7rem", display: "block !important" }}>
              Morten Rand-Hendriksen
            </p>
          </Row>
        </div>
        <div className="singleRecomandation second">
          <Row>
            <h6>3. Time Managment for Busy People</h6>
            <p style={{ fontSize: "0.7rem" }}>Madecraft and Samantha Bennet</p>
          </Row>
        </div>
        <h6 className="bottomh6">Click here for more recomandations</h6>
      </div>
    </>
  );
};

export default HomeRight;
