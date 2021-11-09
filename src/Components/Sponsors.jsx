import React, { Component } from "react";

import { Grid, Image, Divider } from "semantic-ui-react";

import CyberaLogo from '../logos/Cybera.png'
import GarminLogo from '../logos/Garmin.png'
import RunWithItLogo from '../logos/RunWithIt.png'
import UniversityDepartmentLogo from '../logos/UniversityDepartment.png'

// import IntuitLogo from "../logos/Intuit.png";
// import ServusLogo from "../logos/Servus.jpg";
// import StartupLogo from "../logos/StartupEdmonton.png";

// import ThePodLogo from "../logos/ThePod.png";
// import AmiiLogo from "../logos/Amii.png";
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
            <h1 style={{ textAlign: "center" }} className="text-primary">
              SPONSOR A SPECIAL WEEKEND
            </h1>
          </Grid.Column>
        </Grid.Row>
        {/*<Divider horizontal>TITLE</Divider>*/}
        {/*<Grid.Row verticalAlign="middle" centered>*/}
        {/*  <Grid.Column>*/}
        {/*    <Image*/}
        {/*      src={IntuitLogo}*/}
        {/*      fluid*/}
        {/*      as="a"*/}
        {/*      href="https://www.intuit.com/"*/}
        {/*      target="_blank"*/}
        {/*    />*/}
        {/*  </Grid.Column>*/}
        {/*</Grid.Row>*/}
        <Divider horizontal>GOLD</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={6}>
            <Image
              src={CyberaLogo}
              fluid
              as="a"
              href="https://www.cybera.ca/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              src={GarminLogo}
              fluid
              as="a"
              href="https://www.garmin.com/en-CA/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image
              src={RunWithItLogo}
              fluid
              rounded
              as="a"
              href="https://rwisynthetics.com/"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>SILVER</Divider>
        <Grid.Row verticalAlign="middle" centered >
          <Grid.Column width={4}>
            <Image
              src={UniversityDepartmentLogo}
              fluid
              as="a"
              href="https://www.ualberta.ca/engineering/electrical-computer-engineering/index.html"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        {/* <Divider horizontal>BRONZE</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={3}>
            <Image
              src={UniversityDepartmentLogo}
              fluid
              as="a"
              href="https://www.amii.ca/"
              target="_blank"
            />
          </Grid.Column>
          </Grid.Row> */}
        {/*<Divider horizontal>STICKERS PROVIDED BY</Divider>*/}
        {/*<Grid.Row verticalAlign="middle" centered>*/}
        {/*  <Grid.Column>*/}
        {/*    <Image*/}
        {/*      src={StickerMuleLogo}*/}
        {/*      fluid*/}
        {/*      as="a"*/}
        {/*      href="http://hackp.ac/mlh-stickermule-hackathons"*/}
        {/*      target="_blank"*/}
        {/*    />*/}
        {/*  </Grid.Column>*/}
        {/*</Grid.Row>*/}
        {/*<Divider horizontal>SHIRTS PROVIDED BY</Divider>*/}
        {/*<Grid.Row verticalAlign="middle" centered>*/}
        {/*  <Grid.Column>*/}
        {/*    <Image*/}
        {/*      src={BrandMakersLogo}*/}
        {/*      fluid*/}
        {/*      as="a"*/}
        {/*      href="https://www.brandmakers.com/"*/}
        {/*      target="_blank"*/}
        {/*    />*/}
        {/*  </Grid.Column>*/}
        {/*</Grid.Row>*/}
        <Grid.Row centered columns={1}>
          <Grid.Column>
            {/* <h2>SPONSOR A SPECIAL WEEKEND</h2> */}
            <h4>
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
