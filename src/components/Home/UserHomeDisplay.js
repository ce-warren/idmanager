import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import AccountList from "./AccountList";
import IdList from "./IdList";

export default function UserHomeDisplay(props) {

  const tempAccounts = {
    'twitch': [
      {
        'type': 'twitch',
        'name': 'username 1',
        'link': 'link 1',
        'descriptionPublic': 'account desc pub 1',
        'descriptionPrivate': 'account desc pri 1',
        'id': '1'
      },
      {
        'type': 'twitch',
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
        'link': 'https://reactjs.org/tutorial/tutorial.html',
        'descriptionPublic': 'account desc pub 3',
        'descriptionPrivate': 'account desc pri 3',
        'id': '3'
      }
    ]
  };

  const tempIDs = [
    {
      'name': 'my first name',
      'accounts': [ tempAccounts.twitter[0], tempAccounts.twitch[1] ],
      'descriptionPublic': 'desc pub',
      'descriptionPrivate': 'desc pri',
      'id': '10'
    },
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <IdList ids={tempIDs}/>
        </Col>
        <Col xs={12} md={6}>
          <AccountList accounts={tempAccounts}/>
        </Col>
      </Row>
    </Container>
  );
}