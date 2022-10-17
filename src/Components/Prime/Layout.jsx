import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Container, Row, Col, Button } from "reactstrap";
import HackEDLogo from "logos/HackED.svg";
// import HackEDLogoSponsor from "logos/HackEDIntuit.svg";
import About from "Components/Prime/About";
import Badge from "Components/Prime/Badge";
import WhereToGo from "Components/Prime/WhereToGo";
import Faq from "Components/Common/Faq";
import Footer from "Components/Common/Footer";
import Sponsors from "Components/Prime/Sponsors";
import Header from "Components/Prime/NavigationBar";
import EventSchedule from "Components/Common/EventSchedule";
// import PresentationSchedule from "Components/Common/PresentationSchedule";
import EventbriteRegistration from "Components/Common/EventbriteRegistration";
import {
  EVENT_LOCATION,
  EVENT_START_TIME,
  EVENT_END_TIME,
  LINK_REGISTER,
  LINK_VOLUNTEER,
  LINK_MENTOR,
  EVENTBRITE_EVENT_CODE,
} from "primeConstants";
// import { primePresentationSchedule } from "Components/Prime/Presentations";
import { primeEventItems } from "./Events";

class PrimeLayout extends Component {
  redirectToExternalUrl(url) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Badge />
        <Container className="bg-primary-gradient hero" fluid={true}>
          <Row style={{ paddingTop: "10vh" }}>
            <Col></Col>
            <Col sm={10} md={10} lg={8} xl={6}>
              <div className="hero-logo">
                <Image src={HackEDLogo} fluid />
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="pt-4 pb-4">
              <h2 className="text-center">
                One of Alberta's Largest Student Run Hackathons
              </h2>
              <h3 className="text-center">
                A virtual event from {EVENT_START_TIME.format("MMMM")}{" "}
                {EVENT_START_TIME.format("Do")}-{EVENT_END_TIME.format("Do")}
              </h3>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "20vh" }}>
            <Col></Col>
            <Col className={"text-center"} md={8}>
              <Button
                onClick={(e) => this.redirectToExternalUrl(LINK_REGISTER, e)}
                color="primary"
                size="lg"
              >
                Register!
              </Button>
              <Button
                onClick={(e) => this.redirectToExternalUrl(LINK_VOLUNTEER, e)}
                color="primary"
                size="lg"
                className={"mx-2"}
              >
                Volunteer Here!
              </Button>
              <Button
                onClick={(e) => this.redirectToExternalUrl(LINK_MENTOR, e)}
                color="primary"
                size="lg"
              >
                Mentor Here!
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <About />
        <WhereToGo />
        <Faq />
        <EventSchedule events={primeEventItems} />
        {/* <PresentationSchedule presentations={primePresentationSchedule} /> */}
        <EventbriteRegistration eventbrite_event_code={EVENTBRITE_EVENT_CODE} />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default PrimeLayout;
