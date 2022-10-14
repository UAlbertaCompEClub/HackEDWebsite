import React, { Component } from "react";

import { Grid, Image, Divider } from "semantic-ui-react";

import IntuitLogo from "logos/Intuit.png";

import GeneralDynamicsLogo from "logos/MissionSystems.jpg";
import StartupEdmontonLogo from "logos/StartupEdmonton.png";
import NventLogo from "logos/Nvent.png";
import ServusLogo from "logos/Servus.jpg";
import AmiiLogo from "logos/Amii.png";
import G2VLogo from "logos/G2V.png";
import ECEDepartmentLogo from "logos/ECEDepartmentLogo.png";
import IsaicLogo from "logos/ISAIC.jpg";
import InnovateEdmontonLogo from "logos/InnovateEdmonton.png";
// import StickerMuleLogo from "logos/StickerMule.png";
// import BrandMakersLogo from "logos/BrandMakers.png";
import { EVENT_NAME } from "constants";

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
        }}
        columns={2}
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
        <Divider horizontal>GOLD</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={7}>
            <Image
              src={IntuitLogo}
              fluid
              as="a"
              href="https://www.intuit.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <Image
              src={ServusLogo}
              fluid
              as="a"
              href="https://www.servus.ca/life"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Image
              src={NventLogo}
              fluid
              as="a"
              href="https://www.nvent.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <Image
              src={StartupEdmontonLogo}
              fluid
              as="a"
              href="https://www.startupedmonton.com/"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>SILVER</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={6}>
            <Image
              src={G2VLogo}
              fluid
              as="a"
              href="https://g2voptics.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Image
              src={GeneralDynamicsLogo}
              fluid
              as="a"
              href="https://www.gd.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Image
              src={AmiiLogo}
              fluid
              as="a"
              href="https://www.amii.ca/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image
              src={ECEDepartmentLogo}
              fluid
              as="a"
              href="https://www.ualberta.ca/engineering/electrical-computer-engineering/index.html"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>SPECIAL THANKS TO</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column width={5}>
            <Image
              src={IsaicLogo}
              fluid
              as="a"
              href="https://isaic.ece.ualberta.ca/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Image
              src={InnovateEdmontonLogo}
              fluid
              as="a"
              href="https://innovateedmonton.com/"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        {/* <Divider horizontal>SHIRTS PROVIDED BY</Divider>
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