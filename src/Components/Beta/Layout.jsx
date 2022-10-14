import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Container, Row, Col, Button } from "reactstrap";
import HackEDLogo from "logos/HackEDBeta.png";
import About from "Components/Beta/About";
import WhereToGo from "Components/Beta/WhereToGo";
import Faq from "Components/Beta/Faq";
import Footer from "Components/Common/Footer";
import Sponsors from "Components/Beta/Sponsors";
import Header from "Components/Beta/NavigationBar";
// import Schedule from "Components/Schedule";
// import PresentationSchedule from "Components/PresentationSchedule";
import EventbriteRegistration from "Components/Common/EventbriteRegistration";
import "constants";
import { EVENT_START_TIME, EVENT_END_TIME } from "constants";

class App extends Component {
  redirectToExternalUrl(url) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="App">
        <Header />
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
                Alberta's Friendliest Beginner Hackathon
              </h2>
              <h3 className="text-center">
                {EVENT_START_TIME.format("MMMM")}{" "}
                {EVENT_START_TIME.format("Do")}-{EVENT_END_TIME.format("Do")}
                {/*  @ {EVENT_LOCATION} */}
              </h3>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "20vh" }}>
            <Col></Col>
            <Col className={"text-center"} md={8}>
              {/* <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdpfzrKI-bT5dtun6YfNbphbW8O_xJop_F8hdq2vareK8PoeA/viewform?usp=sf_link",
                    e
                  )
                }
                color="primary"
                size="lg"
              >
                Registrations Open Soon!
              </Button> */}
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://www.eventbrite.ca/e/hacked-beta-2021-tickets-204820803537",
                    e
                  )
                }
                color="primary"
                size="lg"
              >
                Register Here!
              </Button>
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLSduYvLxCbly1N9FeVwDCjPPvd7uipIlnzo9QeRMFTlOQBZoFQ/viewform?usp=sf_link",
                    e
                  )
                }
                color="primary"
                size="lg"
                className={"mx-2"}
              >
                Volunteer Here!
              </Button>
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeLNp_m_XwMgPclRQQIRIlAJfP0aNVk1QHNb7MbgN2eQ9bVQw/viewform?usp=sf_link",
                    e
                  )
                }
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
        <EventbriteRegistration />
        {/* <PresentationSchedule /> */}
        {/* <Schedule /> */}
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default App;
