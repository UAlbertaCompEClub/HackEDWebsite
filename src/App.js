import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Container, Row, Col, Button } from "reactstrap";
import HackEDLogo from "./logos/hacked.png";
import Background from "./logos/background2.jpg";
import HackEDLogoSponsor from "./logos/HackEDIntuit.svg";
import About from "./Components/About";
import WhereToGo from "./Components/WhereToGo";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Sponsors from "./Components/Sponsors";
import Header from "./Components/NavigationBar";
import Schedule from "./Components/Schedule";
import PresentationSchedule from "./Components/PresentationSchedule";
import PresSchedule from "./Components/PresScedule";
import EventbriteRegistration from "./Components/EventbriteRegistration";
import IntuitLogo from "./logos/Intuit.png";
import "./constants";
import {
  EVENT_LOCATION,
  EVENT_START_TIME,
  EVENT_END_TIME,
  LINK_REGISTER,
  LINK_VOLUNTEER,
  LINK_MENTOR,
} from "./constants";

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
                One of Alberta's Largest Student Run Hackathons
              </h2>
              <h1 style={{ color: "#FFFFFF"}}>
                January 6th-7th
              </h1> 
              <hr style={{color: "#FFFFFF", width: "40%", }}></hr>
              <h5 style={{ color: "#FFFFFF"}} >{EVENT_LOCATION}
              </h5>  
              
              <h3 style={{color: "#FFFFFF"}}>
              <br></br> <br></br>
                  Registration opening soon!
              </h3>
              <h5 style={{color: "#FFFFFF"}}>
              Can't wait? Check out <a style={{color: "#FFFFFF"}} href="https://hackedbeta.compeclub.com/">Hacked Beta</a> in November.
              </h5>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "20vh" }}>
            <Col></Col>
            <Col className={"text-center"} md={8}>
            
              {/*<Button
                onClick={(e) => this.redirectToExternalUrl(LINK_REGISTER, e)}
                color="secondary"
                size="lg"
              >
                Sign up!
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
              </Button>*/}

              
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <About />
        <WhereToGo />
        <br/>
        <Faq />
        {/*<PresSchedule/>*/}
        {/*<Schedule />*/}
        {/*<EventbriteRegistration />*/}
        <Sponsors />
        <Footer />
      </div>
    );
  }
}


export default App;
