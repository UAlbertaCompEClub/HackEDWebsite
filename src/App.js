import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { Container, Row, Col, Button } from "reactstrap";
import HackEDLogo from "./logos/HackEDhorizontalblue.png";
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
        <Container style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat", }}fluid={true} >
          <Row style={{ paddingTop: "5vh" }}>
            
            <Col style={{ paddingLeft: "4%" }} sm={15} md={15} lg={12} xl={6}>
              <div>
                <Image src={HackEDLogo} fluid />
              </div>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "8%" ,fontFamily: 'Open Sans',}}>
            <Col className="pt-4 pb-4">
              <h2 style={{ color: "#FFFFFF",fontFamily: 'Open Sans'}}>
                One of Alberta's Largest Student Run Hackathons
              </h2>
              <h1 style={{ color: "#FFFFFF",fontFamily: 'Open Sans'}}>
                January 6th-7th
              </h1> 
              <hr style={{color: "#FFFFFF", width: "40%", fontFamily: 'Open Sans'}}></hr>
              <h5 style={{ color: "#FFFFFF",fontFamily: 'Open Sans'}} >{EVENT_LOCATION}
              </h5>  

              <h3 style={{color: "#FFFFFF",fontFamily: 'Open Sans'}}>
              <br></br> 
                  Registration is now closed!
              </h3>
              
              
              <br></br>
              
              {/* <Button
                onClick={(e) =>
                  this.redirectToExternalUrl(
                    "https://docs.google.com/forms/d/e/1FAIpQLSf9PCmiH0cPLMaUsqo9GRQSZuJYJqxnJIgKfh9JZIeqywlaGg/viewform?usp=sf_link",
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
                    "https://forms.gle/fkzE6WzWrzacxUpq8",
                    e
                  )
                }
                color="secondary"
                size="lg"
                className={"mx-6"}
              >
                Volunteer Here!
                
              </Button> 

              */}
              <br></br>
              <br></br>
               <h5 style={{color: "#FFFFFF",fontFamily: 'Open Sans'}}>
              Can't wait? Check out <a style={{color: "#FFFFFF"}} href="https://hackedbeta.compeclub.com/">HackED Beta</a> in November.
              </h5>
            {/*</Col>
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
        <Schedule />
        <br></br><br></br>
        <br></br><br></br>

        <Faq />
        {/*<PresSchedule/>*/}
        {/*<EventbriteRegistration />*/}
        <Sponsors />
        <Footer />
      </div>
    );
  }
}


export default App;
