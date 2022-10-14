import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { EVENTBRITE_EVENT_CODE } from "../constants";

class EventbriteRegistration extends Component {
  //Uses scripts which are loaded in the index.html file
  render() {
    window.EBWidgets.createWidget({
      // Required
      widgetType: "checkout",
      eventId: EVENTBRITE_EVENT_CODE,
      iframeContainerId: "eventbrite-widget-container-" + EVENTBRITE_EVENT_CODE,

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
              id={"eventbrite-widget-container-" + EVENTBRITE_EVENT_CODE}
            ></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventbriteRegistration;
