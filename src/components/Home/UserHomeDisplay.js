import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import AccountList from "./AccountList";
import IdList from "./IdList";

export default function UserHomeDisplay(props) {

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <IdList/>
        </Col>
        <Col xs={12} md={6}>
          <AccountList/>
        </Col>
      </Row>
    </Container>
  );
}