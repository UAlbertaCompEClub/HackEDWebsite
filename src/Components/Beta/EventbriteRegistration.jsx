import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class EventbriteRegistration extends Component {
  //Uses scripts which are loaded in the index.html file
  render() {
    window.EBWidgets.createWidget({
      // Required
      widgetType: "checkout",
      eventId: this.props.eventbrite_event_code,
      iframeContainerId:
        "eventbrite-widget-container-" + this.props.eventbrite_event_code,

      // Optional
      iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
    });
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
              <br></br>Remember that you must be in your first or second year of
              university, and have been in no more than one prior hackathon in
              order to participate.
            </p>
            <p className="text-center">
              Rare exceptions can be made if participants have little to no
              prior experience with hacking or programming in general. If you
              believe you are a novice hacker despite not meeting these
              requirements, contact hacked@compeclub.com for more information.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              id={
                "eventbrite-widget-container-" +
                this.props.eventbrite_event_code
              }
            ></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventbriteRegistration;
