import React, { Component } from "react";

import { Grid, Image, Divider, GridRow } from "semantic-ui-react";

import CyberaLogo from '../logos/Cybera.png'
import mecSim from '../logos/MecSim.png'
import ATBLogo from '../logos/ATB.jpg'
import ICELogo from '../logos/ICELogo.png'
import GarminLogo from '../logos/Garmin.png'
import RunWithItLogo from '../logos/RunWithIt.png'
import UniversityDepartmentLogo from '../logos/UniversityDepartment.png'


// import IntuitLogo from "../logos/Intuit.png";
// import ServusLogo from "../logos/Servus.jpg";
// import StartupLogo from "../logos/StartupEdmonton.png";

// import ThePodLogo from "../logos/ThePod.png";
import AmiiLogo from "../logos/Amii.png";
// import ScopeARLogo from "../logos/ScopeAR.jpeg";
// import DrugbankLogo from "../logos/Drugbank.png";

import { EVENT_NAME } from "../constants";

class Sponsors extends Component {
  render() {
    return (
      <Grid
        id="Sponsors"
        centered
        style={{
          background: "#FFFFFF",
          marginTop: 20,
          marginBottom: 40
        }}
        columns={3}
        container
        stackable
        relaxed="very"
      >
        <Grid.Row centered>
          <Grid.Column width={12}>
            <h1 style={{ textAlign: "center" }} className="text-secondary">
              SPONSOR A SPECIAL WEEKEND
            </h1>
          </Grid.Column>
        </Grid.Row>
        {/*<Divider horizontal>TITLE</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column>
            <Image
              src={IntuitLogo}
              fluid
              as="a"
              href="https://www.intuit.com/"
              target="_blank"
            />
          </Grid.Column>
      </Grid.Row>*/}
        <Divider horizontal>GOLD</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={5}>
            <Image
              src={ATBLogo}
              fluid
              as="a"
              href="https://www.atb.com/"
              target="_blank"
            />
          </Grid.Column>
          
        </Grid.Row>
        <Divider horizontal>SILVER</Divider>
        <Grid.Row verticalAlign="middle" centered >
          <Grid.Column width={11}>
            <Image
              src={ICELogo}
              fluid
              as="a"
              href="https://www.ualberta.ca/engineering/innovation-creativity-entrepreneurship/index.html?utm_medium=vanity&utm_source=rebrandly&utm_campaign=uab.ca%2F&utm_content=ice"
              target="_blank"
            />
          </Grid.Column>

          <Grid.Column width={5}>
            <Image
              src={mecSim}
              fluid
              as="a"
              href="https://mecsimcalc.com/"
              target="_blank"
            />
          </Grid.Column>

      </Grid.Row>
      
       {/* <Divider horizontal>BRONZE</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={3}>
            <Image
              src={AmiiLogo}
              fluid
              as="a"
              href="https://www.amii.ca/"
              target="_blank"
            />
          </Grid.Column>
          </Grid.Row>
        <Divider horizontal>STICKERS PROVIDED BY</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column>
            <Image
              src={StickerMuleLogo}
              fluid
              as="a"
              href="http://hackp.ac/mlh-stickermule-hackathons"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>SHIRTS PROVIDED BY</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column>
            <Image
              src={BrandMakersLogo}
              fluid
              as="a"
              href="https://www.brandmakers.com/"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row> */}
        <Grid.Row centered columns={1}>
          <Grid.Column>
            
            <h4 style={{ textAlign: "center"}}>
              Interested in sponsoring? 
              <br />
              <br />
              Each year, our sponsors help us unite our community of emerging
              developers, designers, makers and learners. 
              <br />
              Our sponsors empower our hackers to build something they're proud of!
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
