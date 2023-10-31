import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Container, Row, Col, Button } from "reactstrap";
import HackEDLogo from "./logos/HackED.png";
import Background from "./logos/background2.jpg";
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
        <Container style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}fluid={true} >
          <Row style={{ paddingTop: "5vh" }}>
            
            <Col style={{ paddingLeft: "4%" }} sm={15} md={15} lg={12} xl={6}>
              <div>
                <Image src={HackEDLogo} fluid />
              </div>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "8%" }}>
            <Col className="pt-4 pb-4">
              <h2 style={{ color: "#FFFFFF"}}>
                Alberta's Friendliest Beginner Hackathon
                </h2>
              <h1 style={{ color: "#FFFFFF"}}>
                {EVENT_START_TIME.format("MMMM")}{" "}
                {EVENT_START_TIME.format("Do")}-{EVENT_END_TIME.format("Do")}</h1>
              <hr style={{color: "#FFFFFF", width: "40%", }}>
              </hr>
              <h5 style={{ color: "#FFFFFF"}} >{EVENT_LOCATION}
              </h5> 

              <h3 style={{color: "#FFFFFF"}}>
              <br></br> 
                  Registration is now open!
              </h3>
              
              
              <br></br>
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeYNzaRRa3A_f9lbcpF39HCQip1dqdoJxt6CWgRhVMmiG3Ogg/viewform",
                    e
                  )
                }
                color="secondary"
                size="lg"
                className={"mx-6"}
              >
                Register Here!
              </Button>
              <br></br>
              <br></br>
              <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLScmJqlIryQ51-GIum1T_ZZC4ZEEQ6-ZlhtwbsGXKqhl6KlpGg/viewform",
                    e
                  )
                }
                color="secondary"
                size="lg"
                className={"mx-6"}
              >
                Volunteer Here!
              </Button>
              <br></br>
              <br></br>
              <h5 style={{color: "#FFFFFF"}}>
              Looking for more events? Check out <a style={{color: "#FFFFFF"}} href="https://hacked.compeclub.com/">HackED</a> in January.
              </h5>

            </Col>
          </Row>
          <Row style={{ paddingBottom: "20vh" }}>
            
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
