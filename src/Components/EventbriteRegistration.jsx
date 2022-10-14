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
