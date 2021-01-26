import React from "react";
import ProfileLeft from "./ProfileLeft";
import { Container, Row } from "react-bootstrap";
import RightSideColumn from "./RightSideColumn";

const ProfilePage = () => {
  return (
    <>
      <Container style={{ marginTop: '4rem' }}>
        <Row>
          <ProfileLeft />
          <RightSideColumn />
        </Row>
        <hr />
      </Container>
    </>
  );
};

export default ProfilePage;
