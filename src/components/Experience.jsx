import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RightSideColumn from "./RightSideColumn";
import ExperiencePage from "./ExperiencePage";

class Experience extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "4rem" }}>
        <Row>
          <Col xs={12} md={8}>
            <ExperiencePage />
          </Col>
          <Col xs={12} md={4}>
            <RightSideColumn />
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

export default Experience;
