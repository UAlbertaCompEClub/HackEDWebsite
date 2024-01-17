import React, { Component } from "react";

import { Grid, Image, Divider } from "semantic-ui-react";

import IntuitLogo from "../logos/Intuit.png";

import GeneralDynamicsLogo from "../logos/General-Dynamics-logo.png";
import mecSimCalc from "../logos/mecSimCalc.png"
import TelusLogo from "../logos/telus.png"
import LanternLogo from "../logos/lantern.png"
import SICLogo from "../logos/SIC.png"
import garmin from "../logos/garmin.png"
import AltaML from "../logos/AltaML.jpg"
import AmiiLogo from "../logos/Amii.png";
import UofALogo from "../logos/UofA.png";
import chiropractor from "../logos/chropractor.png";


import EdmontonUnlimited from "../logos/EdmontonUnlimited.png";
import SpartanControlLogo from "../logos/SpartanControls.jpg";

import { EVENT_NAME } from "../constants";

class Sponsors extends Component {
  render() {
    return (
      <Grid
        id="Sponsors"
        centered
        style={{
          background: "#FFFFFF",
          marginTop: 40,
          marginBottom: 40,
          fontFamily: 'Open Sans',
        }}
        columns={2}
        container
        stackable
        relaxed="very"
      >
        <Grid.Row centered>
          <Grid.Column width={12}>
            <h1 style={{ textAlign: "center" ,fontFamily: 'Open Sans'}} className="text-primary">
              SPONSOR A SPECIAL WEEKEND
            </h1>
          </Grid.Column>
        </Grid.Row>

        <Divider horizontal >Title</Divider>
        <Grid.Row verticalAlign="middle" centered>

        <Grid.Column width={12}>
            <Image
              src={LanternLogo}
              fluid
              as="a"
              href="https://lanternstudios.com/"
              target="_blank"
            />
          </Grid.Column>
          
          </Grid.Row> 
      
        <Divider horizontal>GOLD</Divider>
        
        
        <Grid.Row verticalAlign="middle" centered>

        <Grid.Column width={11}>
            <Image
              src={GeneralDynamicsLogo}
              fluid
              as="a"
              href="https://www.gd.com/"
              target="_blank"
            />
                      <br></br>

          </Grid.Column>



        <Grid.Column width={7}>
            <Image
              src={UofALogo}
              fluid
              as="a"
              href="https://www.ualberta.ca/research/index.html"
              target="_blank"
            />
            <br></br>
          <br></br>
          </Grid.Column>
          

          <Grid.Column width={7}>
          <Image
              src={TelusLogo}
              fluid
              as="a"
              href="https://www.telus.com/en"
              target="_blank"
            />
          <br></br>
          <br></br>

          </Grid.Column>
        
          <Grid.Column width={6}>
            <Image
              src={SICLogo}
              fluid
              as="a"
              href="https://www.ualberta.ca/student-innovation-centre/index.html"
              target="_blank"
            />
          </Grid.Column>


          </Grid.Row>

      
        <Divider horizontal>SILVER</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={6}>
            <Image
              src={SpartanControlLogo}
              fluid
              as="a"
              href="https://www.spartancontrols.com/"
              target="_blank"
            />
          </Grid.Column>
          

          <Grid.Column width={4}>
            <Image
              src={AmiiLogo}
              fluid
              as="a"
              href="https://www.amii.ca/"
              target="_blank"
            />
            </Grid.Column>

            <Grid.Column width={5}>
            <Image
              src={mecSimCalc}
              fluid
              as="a"
              href="https://mecsimcalc.com/"
              target="_blank"
            />
          </Grid.Column>

          <Grid.Column width={6}>
            <br></br>
            <Image
              src={EdmontonUnlimited}
              fluid
              as="a"
              href="https://edmontonunlimited.com/"
              target="_blank"
            />
            <br></br>
            <br></br>
            </Grid.Column>

            <Grid.Column width={6}>
            <br></br>
            <Image
              src={garmin}
              fluid
              as="a"
              href="https://www.garmin.com/en-CA/"
              target="_blank"
            />
            <br></br>
            <br></br>
            </Grid.Column>

          </Grid.Row>

          <Divider horizontal>Special thanks to</Divider>
        <Grid.Row verticalAlign="middle" centered>

        <Grid.Column width={7}>
            <Image
              src={AltaML}
              fluid
              as="a"
              href="https://altaml.com/"
              target="_blank"
            />
          </Grid.Column>
          </Grid.Row> 

          <Divider horizontal>Dinner provided by</Divider>
        <Grid.Row verticalAlign="middle" centered>

        <Grid.Column width={4}>
            <Image
              src={chiropractor}
              fluid
              as="a"
              href="https://www.garneauchiropractic.ca/"
              target="_blank"
            />
          </Grid.Column>
          </Grid.Row> 

        <Grid.Row centered columns={1}>
          <Grid.Column>
            <h3 style={{ fontFamily: 'Open Sans'}} className="text-center">Interested in sponsoring? </h3>
            <br />

            <h4 style={{ fontFamily: 'Open Sans'}} >
              Each year, our sponsors help us unite our community of emerging
              developers, designers, makers and learners. Our sponsors empower
              our hackers to build something they're proud of!
              <br />
              <br />
              The {EVENT_NAME} sponsorship team can be reached at:{" "}
              <a href="mailto:hacked@compeclub.com">hacked@compeclub.com</a>
            </h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Sponsors;
