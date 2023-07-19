import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Container, Row, Col, Button } from "reactstrap";
import HackEDLogo from "./logos/HackED.png";
import About from "./Components/About";
import WhereToGo from "./Components/WhereToGo";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Sponsors from "./Components/Sponsors";
import Header from "./Components/NavigationBar";
import Schedule from "./Components/Schedule";
import PresentationSchedule from "./Components/PresentationSchedule";
import EventbriteRegistration from "./Components/EventbriteRegistration";
import "./constants";
import { EVENT_START_TIME, EVENT_END_TIME } from "./constants";
import {EVENT_LOCATION} from "./constants";

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
            <Col sm={15} md={15} lg={12} xl={9}>
              <div className="hero-logo">
                <Image src={HackEDLogo} fluid />
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="pt-4 pb-4">
              <h2 style={{ textAlign: "center", color: "#FFFFFF"}}>
                Alberta's Friendliest Beginner Hackathon
              </h2>
              <br />
              <h3 style={{ textAlign: "center", color: "#FFFFFF"}}>
                {EVENT_START_TIME.format("MMMM")}{" "}
                {EVENT_START_TIME.format("Do")}-{EVENT_END_TIME.format("Do")}
                <br />
                {EVENT_LOCATION}
              </h3>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "20vh" }}>
            <Col></Col>
            <Col className={"text-center"} md={8}>
            <h2 style={{ textAlign: "center", color: "#FFFFFF"}}>
                Registration opening soon!
              </h2>
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
              </Button>
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://www.eventbrite.ca/e/hacked-beta-2022-tickets-443859875837",
                    e
                  )
                }
                color="secondary"
                size="lg"
              >
                Register Here!
              </Button>
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeHfAIU7_Xx7TywxpMjT5AKH-Q2VWyMi_siHhdnQAE9j7gv2Q/viewform",
                    e
                  )
                }
                color="secondary"
                size="lg"
                className={"mx-2"}
              >
                Volunteer Here!
              </Button>
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeL2swY9CeaBcbDoy37m6ADxBdAz-plGC2iVsPynYIWWabTOQ/viewform",
                    e
                  )
                }
                color="secondary"
                size="lg"
              >
                Mentor Here!
              </Button> */}
            </Col>
            <Col></Col>
          </Row>
          
        </Container>
        <About />
        <WhereToGo />
        <Faq />
        {/* <PresentationSchedule /> */}
        {/* <Schedule /> */}
        {/* <EventbriteRegistration />*/}
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default App;
