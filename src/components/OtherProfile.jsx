import React from "react";
import OtherProfileLeft from "./OtherProfileLeft";
import { Container, Row } from "react-bootstrap";
import RightSideColumn from "./RightSideColumn";

class OtherProfile extends React.Component {
  render() {
    return (
      <>
        <Container style={{ marginTop: "4rem" }}>
          <Row>
            <OtherProfileLeft userid={this.props.match.params.id} />
            <RightSideColumn />
          </Row>
          <hr />
        </Container>
      </>
    );
  }
}

export default OtherProfile;
