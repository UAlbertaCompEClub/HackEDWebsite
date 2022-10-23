import React, { Component } from 'react';
import { Row, Col, Container } from "reactstrap";

class EventbriteRegistration extends Component {
  //Uses scripts which are loaded in the index.html file
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">REGISTER</h2>
            <h3 className="text-center">Registration will be opening soon!</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="eventbrite-widget-container-230093153817"></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventbriteRegistration;