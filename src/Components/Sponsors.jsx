import React, { Component } from "react";

import { Grid, Image, Divider } from "semantic-ui-react";

import IntuitLogo from "../Logos/Intuit.png";

import StartupEdmontonLogo from "../Logos/StartupEdmonton.png";
import ServusLogo from "../Logos/Servus.jpg";
import DevFactoLogo from "../Logos/DevFacto.png";
import WillowglenLogo from "../Logos/WillowglenSystems.jpg";
import TelusLogo from "../Logos/Telus.JPG";
import CityOfEdmontonLogo from "../Logos/CityOfEdmonton.png";

import JobberLogo from "../Logos/Jobber.jpg";
import ThePodLogo from "../Logos/ThePod.png";
import AmiiLogo from "../Logos/Amii.png";
import FacultyOfEngineeringLogo from "../Logos/FacultyOfEngineering.jpg";

import StickerMuleLogo from "../Logos/StickerMule.png";
import BrandMakersLogo from "../Logos/BrandMakers.png";
import {EVENT_NAME} from "../constants";

class Sponsors extends Component {
  render() {
    return (
      <Grid
        id="Sponsors"
        centered
        style={{
          background: "#FFFFFF",
          paddingTop: 60,
          paddingBottom: 60
        }}
        columns={3}
        container
        stackable
        relaxed="very"
      >
        <Grid.Row centered>
          <Grid.Column width={16}>
            <h1 style={{ textAlign: "center"}} className="text-primary">
              LAST YEAR'S SPONSORS
            </h1>
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>TITLE</Divider>
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
        </Grid.Row>
        <Divider horizontal>GOLD</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column>
            <Image
              src={ServusLogo}
              fluid
              as="a"
              href="https://www.servus.ca/life"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={StartupEdmontonLogo}
              fluid
              as="a"
              href="https://www.startupedmonton.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={WillowglenLogo}
              fluid
              as="a"
              href="https://www.willowglensystems.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={DevFactoLogo}
              fluid
              as="a"
              href="https://www.devfacto.com/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={CityOfEdmontonLogo}
              fluid
              as="a"
              href="https://www.edmonton.ca/"
              target="_blank"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={TelusLogo}
              fluid
              as="a"
              href="https://www.telus.com/en/"
              target="_blank"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider horizontal>SILVER</Divider>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column>
            <Image
              src={JobberLogo}
              fluid
              as="a"
              href="https://getjobber.com/"
              target="_blank"
            />
          </Grid.Column>
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
              src={FacultyOfEngineeringLogo}
              fluid
              as="a"
              href="https://www.ualberta.ca/electrical-computer-engineering"
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
        </Grid.Row>
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
