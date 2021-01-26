import React from "react";
import { Col } from "react-bootstrap";

class ShodyDivider extends React.Component {
  render() {
    return (
      <>
        <Col xs={{ span: 10, offset: 2 }} id="divider" className="my-1"></Col>
      </>
    );
  }
}

export default ShodyDivider;
