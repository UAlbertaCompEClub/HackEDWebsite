import React, { Component } from "react";

import { Grid, Image, Divider } from "semantic-ui-react";

import IntuitLogo from "../logos/Intuit.png";
import ServusLogo from "../logos/Servus.jpg";
import StartupLogo from "../logos/StartupEdmonton.png";

import ThePodLogo from "../logos/ThePod.png";
import AmiiLogo from "../logos/Amii.png";
import ScopeARLogo from "../logos/ScopeAR.jpeg";
import DrugbankLogo from "../logos/Drugbank.png";

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
          marginBottom: 40
        }}
        columns={3}
        container
        stackable
        relaxed="very"
      >
        <Grid.Row centered>
          <Grid.Column>
            <h1 style={{ textAlign: "center" }} className="text-primary">
              SPONSORS
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
          <Grid.Column>
            <Image
              src={StartupLogo}
              fluid
              as="a"
              href="https://www.startupedmonton.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={IntuitLogo}
              fluid
              as="a"
              href="https://www.intuit.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={ServusLogo}
              fluid
              as="a"
              href="https://www.servus.ca/life"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>SILVER</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column>
            <Image
              src={ThePodLogo}
              fluid
              as="a"
              href="https://www.pod-innovation.ca/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={AmiiLogo}
              fluid
              as="a"
              href="https://www.amii.ca/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={ScopeARLogo}
              fluid
              as="a"
              href="https://www.scopear.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={DrugbankLogo}
              fluid
              as="a"
              href="https://www.drugbank.ca/"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
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
            <h2>SPONSOR A SPECIAL WEEKEND</h2>
            <h4>
              Each year, our sponsors help us unite our community of emerging
              developers, designers, makers and learners. Our sponsors empower
              our hackers to build something they're proud of.
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
