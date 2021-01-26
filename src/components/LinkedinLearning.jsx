import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LinkedinLearning.css";
import PlayCircleOutlineTwoToneIcon from "@material-ui/icons/PlayCircleOutlineTwoTone";

class LinkedinLearning extends React.Component {
  render() {
    return (
      <Container id="LearningRecomend">
        <Row>
          <span className="learningLogo mr-1">in</span>
          <span className="wideLearning">LEARNING</span>
        </Row>
        <Row>
          <h6>Add new skills with these courses</h6>
        </Row>
        <Row className="RecomendItem">
          <Col xs={4}>
            <img src="/assets/images/learning1.gif" alt="" />
            <div className="playButton">
              <PlayCircleOutlineTwoToneIcon fontSize="large" />
            </div>
          </Col>
          <Col
            xs={8}
            className="d-flex flex-column justify-content-between pl-4"
          >
            <span>React.js: Building an Interface</span>
            <span className="text-muted">20,701 viewers</span>
          </Col>
        </Row>
        <hr />
        <Row className="RecomendItem">
          <Col xs={4}>
            <img src="/assets/images/learning2.gif" alt="" />
            <div className="playButton">
              <PlayCircleOutlineTwoToneIcon fontSize="large" />
            </div>
          </Col>
          <Col
            xs={8}
            className="d-flex flex-column justify-content-between pl-4"
          >
            <span>Vanilla JavaScrpit: Animations</span>
            <span className="text-muted">8,317 viewers</span>
          </Col>
        </Row>
        <hr />
        <Row className="RecomendItem lastItem">
          <Col xs={4}>
            <img src="/assets/images/learning3.gif" alt="" />
            <div className="playButton">
              <PlayCircleOutlineTwoToneIcon fontSize="large" />
            </div>
          </Col>
          <Col
            xs={8}
            className="d-flex flex-column justify-content-between pl-4"
          >
            <span>CSS Selectors for React Developers</span>
            <span className="text-muted">2,570 viewers</span>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-center"
          onClick={() =>
            window.location.assign(
              "https://www.linkedin.com/learning/me?trk=profileSelf_d_flagship3_profile_view_base_learningFeedsp204b%3A1%2Bsp204b%3A1_seeRecommendations_learning"
            )
          }
        >
          <h6>Show more on LinkedIn Learning</h6>
        </Row>
      </Container>
    );
  }
}

export default LinkedinLearning;
