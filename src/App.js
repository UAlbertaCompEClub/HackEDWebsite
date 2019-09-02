import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react'
import HackEDLogo from './logos/HackED.png';
import About from './Components/About'
import WhereToGo from './Components/WhereToGo'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Sponsors from './Components/Sponsors'
import Header from './Components/NavigationBar'
import Schedule from './Components/Schedule'
import PresentationSchedule from './Components/PresentationSchedule'
import './App.css';

class App extends Component {

  redirectToExternalUrl(url, e) {
    window.open(url, '_blank');
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Grid 
          verticalAlign='top'
          centered 
          style={{height: '100vh', background: "linear-gradient(180deg, #FFFFFF 70%, #d02120 90%)"}}>
          <Grid.Row>
            <Grid.Column mobile={12} tablet={12} computer={10} textAlign='center' style={{paddingTop: "10vh"}}>
              <Image src={HackEDLogo} fluid />
              <br></br>
              <br></br>
              <br></br>
              <h2>Alberta's Largest Student Run Hackathon</h2>
              <h3>January 18 - 19 @ The Donadeo Innovation Centre for Engineering</h3>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLSer_0IBKa5O0EFz4uLUtYa6tA5AqZcTpAFgfOxytpPU80HRoQ/viewform', e)} color='red' size='huge'>Pre-Register Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLScM3ggG6FtYT0prlH5F4p892FNoMFG_zgeela8HM2MTNoLXNA/viewform', e)} color='red' size='huge'>Volunteer Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLSeDlrVsFObjqKottNynGyRhRkxc7tehxwqMYy1T4QNTb9jSlQ/viewform', e)} color='red' size='huge'>Mentor Here!</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <About/>
        <WhereToGo/>
        <Faq/>
        <PresentationSchedule/>
        <Schedule/>
        <Sponsors/>
        <Footer/>
      </div>
    );
  }
}

export default App;
