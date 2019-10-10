import React, {Component} from 'react';
import {Row,Col,Container} from "reactstrap";

class EventbriteRegistration extends Component {
  //Uses scripts which are loaded in the index.html file
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center">REGISTER</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              Remember that you must be in highschool or in your first or second year of university, and have been in no more than one prior hackathon in order to participate.
            </p>
            <p className="text-center">
              Rare exceptions can be made if participants have little to no prior experience with hacking or programming in general.
              If you believe you are a novice hacker, contact hacked@compeclub.com for more information.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="eventbrite-widget-container-75763084425" className="mt-5"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventbriteRegistration;