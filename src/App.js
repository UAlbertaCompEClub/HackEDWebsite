import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Container, Row, Col, Button } from 'reactstrap';
import HackEDLogo from './logos/HackED.png';
import About from './Components/About'
import WhereToGo from './Components/WhereToGo'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Sponsors from './Components/Sponsors'
import Header from './Components/NavigationBar'
import Schedule from './Components/Schedule'
import PresentationSchedule from './Components/PresentationSchedule'
import EventbriteRegistration from "./Components/EventbriteRegistration";
import "./constants";
import {EVENT_LOCATION, EVENT_START_TIME, EVENT_END_TIME} from "./constants";

class App extends Component {

  redirectToExternalUrl(url) {
    window.open(url, '_blank');
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Container className="bg-primary-gradient hero" fluid={true}>
          <Row style={{paddingTop: "10vh"}}>
            <Col>
            </Col>
            <Col sm={10} md={10} lg={8} xl={6}>
              <div className="hero-logo">
                <Image src={HackEDLogo} fluid />
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col className="pt-4 pb-4">
              <h2 className="text-center">Alberta's Friendliest Student Run Beginner Hackathon</h2>
              <h3 className="text-center">{EVENT_START_TIME.format('MMMM')} {EVENT_START_TIME.format('Do')}-{EVENT_END_TIME.format('Do')} @ {EVENT_LOCATION}</h3>
            </Col>
          </Row>
          <Row style={{paddingBottom: "20vh"}}>
            <Col>
            </Col>
            <Col className={"text-center"} md={8}>
              <Button onClick={(e) => this.redirectToExternalUrl('https://www.eventbrite.ca/e/hacked-beta-2019-tickets-75763084425', e)} color='primary' size='lg'>Register Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLSe07E5OUYiw41SzKsHdtTOeY6YdTFQCxB6MA58Us58X4-JEJA/viewform?usp=sf_link', e)} color='primary' size='lg' className={"mx-2"}>Volunteer Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLSeExeBNJJ_AG7qhs-vtMcJTPRd7inX1siUKX410SXjTcAHyEw/viewform?usp=sf_link', e)} color='primary' size='lg'>Mentor Here!</Button>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
        <About/>
        <WhereToGo/>
        <Faq/>
        <PresentationSchedule/>
        <Schedule/>
        <EventbriteRegistration/>
        <Sponsors/>
        <Footer/>
      </div>
    );
  }
}

export default App;
