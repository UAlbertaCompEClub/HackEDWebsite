import React, { Component } from "react";

import { Grid, Image, Divider } from "semantic-ui-react";

import IntuitLogo from "../logos/Intuit.png";

import GeneralDynamicsLogo from "../logos/General-Dynamics-logo.png";
import mecSimCalc from "../logos/mecSimCalc.png"
import TelusLogo from "../logos/telus.png"
import LanternLogo from "../logos/lantern.png"
import SICLogo from "../logos/SIC.png"
import StartupEdmontonLogo from "../logos/StartupEdmonton.png";
import NventLogo from "../logos/Nvent.png";
import ServusLogo from "../logos/Servus.jpg";
import PasswordLogo from "../logos/OnePassword.png";
import AmiiLogo from "../logos/Amii.png";
import UofALogo from "../logos/UofA.png";

import EdmontonUnlimited from "../logos/EdmontonUnlimited.png";
import ECELogo from "../logos/ECELogo.png";
import ICELogo from "../logos/ICELogo.png";
import G2VLogo from "../logos/G2V.png";
import ECEDepartmentLogo from "../logos/ECEDepartmentLogo.png";
import IsaicLogo from "../logos/ISAIC.jpg"
import InnovateEdmontonLogo from "../logos/InnovateEdmonton.png"
import StickerMuleLogo from "../logos/StickerMule.png";
import BrandMakersLogo from "../logos/BrandMakers.png";
import SpartanControlLogo from "../logos/SpartanControls.jpg";
import DarkHorseLogo from "../logos/DarkhorseAnalytics.png";

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

        <Divider horizontal>SPECIAL THANKS TO</Divider>
        <Grid.Row verticalAlign="middle" centered>

        <Grid.Column width={12}>
            <Image
              src={LanternLogo}
              fluid
              as="a"
              href="https://www.devfacto.com/"
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

          
{/*
        
            
        <Grid.Column width={5}>
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
              src={EdmontonUnlimited}
              fluid
              as="a"
              href="https://edmontonunlimited.com/"
              target="_blank"
            />
            </Grid.Column>

        <Grid.Column width={5}>
            <Image
              src={PasswordLogo}
              fluid
              as="a"
              href="https://1password.com/"
              target="_blank"
            />
            </Grid.Column>

        </Grid.Row>
          
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
      </Grid.Column>*/}
      
        
        
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

          </Grid.Row>{/*
          <Grid.Column width={6}>
            <Image
              src={ICELogo}
              fluid
              as="a"
              href="https://www.iceincubator.com/"
              target="_blank"
            />
          </Grid.Column>

          <Grid.Column width={3}>
            <Image
              src={ECELogo}
              fluid
              as="a"
              href="https://www.ualberta.ca/engineering/electrical-computer-engineering/index.html"
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
    </Grid.Column>*/}
        
        
          {/*
          <Grid.Column width={5}>
            <Image
              src={InnovateEdmontonLogo}
              fluid
              as="a"
              href="https://innovateedmonton.com/"
              target="_blank"
            />
            <Image
              src={IsaicLogo}
              fluid
              as="a"
              href="https://isaic.ece.ualberta.ca/"
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
          </Grid.Column>*/}
        
        
        <Grid.Row centered columns={1}>
          <Grid.Column>
            <h3 className="text-center">Interested in sponsoring? </h3>
            <br />

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
