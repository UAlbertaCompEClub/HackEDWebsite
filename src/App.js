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
              <h2 className="text-center">Alberta's Largest Student Run Hackathon</h2>
              <h3 className="text-center">January 18 - 19 @ The Donadeo Innovation Centre for Engineering</h3>
            </Col>
          </Row>
          <Row style={{paddingBottom: "20vh"}}>
            <Col>
            </Col>
            <Col className={"text-center"} md={8}>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLSer_0IBKa5O0EFz4uLUtYa6tA5AqZcTpAFgfOxytpPU80HRoQ/viewform', e)} color='primary' size='lg'>Pre-Register Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLScM3ggG6FtYT0prlH5F4p892FNoMFG_zgeela8HM2MTNoLXNA/viewform', e)} color='primary' size='lg' className={"mx-2"}>Volunteer Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLSeDlrVsFObjqKottNynGyRhRkxc7tehxwqMYy1T4QNTb9jSlQ/viewform', e)} color='primary' size='lg'>Mentor Here!</Button>
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
