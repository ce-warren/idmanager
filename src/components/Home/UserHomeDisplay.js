import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import AccountList from "./AccountList";
import IdList from "./IdList";

export default function UserHomeDisplay(props) {

  const tempAccount = {
    'discord': [
      {
        'type': 'discord',
        'name': 'username 1',
        'link': 'link 1',
        'descriptionPublic': 'account desc pub 1',
        'descriptionPrivate': 'account desc pri 1',
        'id': '1'
      },
      {
        'type': 'discord',
        'name': 'username 2',
        'link': 'link 2',
        'descriptionPublic': 'account desc pub 2',
        'descriptionPrivate': 'account desc pri 2',
        'id': '2'
      }
    ],
    'twitter': [
      {
        'type': 'twitter',
        'name': 'username 3',
        'link': 'link 3',
        'descriptionPublic': 'account desc pub 3',
        'descriptionPrivate': 'account desc pri 3',
        'id': '3'
      }
    ]
  };

  const tempID = [
    {
      'name': 'my first name',
      'accounts': [ tempAccount.twitter[0], tempAccount.discord[1] ],
      'descriptionPublic': 'desc pub',
      'descriptionPrivate': 'desc pri',
      'id': '10'
    },
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <IdList ids={tempID}/>
        </Col>
        <Col xs={12} md={6}>
          <AccountList accounts={tempAccount}/>
        </Col>
      </Row>
    </Container>
  );
}