import {
  applicationPanels,
  generalPanels,
  hackingPanels,
  helpPanels,
  logisticsPanels,
} from "Components/Prime/Questions";
import React, { Component } from "react";

import { Grid, Accordion } from "semantic-ui-react";

class Faq extends Component {
  render() {
    return (
      <Grid
        id="FAQ"
        style={{
          margin: 0,
          paddingBottom: 40,
        }}
        className="bg-primary"
        columns={3}
        stackable
        relaxed="very"
        centered
      >
        <Grid.Row>
          <Grid.Column>
            <h1
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                paddingTop: "20px",
              }}
            >
              FAQ
            </h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h2
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                paddingTop: "20px",
              }}
            >
              General
            </h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={generalPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                paddingTop: "20px",
              }}
            >
              Logistics
            </h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={logisticsPanels}
              exclusive={false}
              inverted
              fluid
            />
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column>
            <h2
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                paddingTop: "20px",
              }}
            >
              Application
            </h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={applicationPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                paddingTop: "20px",
              }}
            >
              Hacking
            </h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={hackingPanels}
              exclusive={false}
              inverted
              fluid
            />

            <h2
              style={{
                textAlign: "center",
                color: "#FFFFFF",
                paddingTop: "20px",
              }}
            >
              Help!
            </h2>
            <Accordion
              style={{ color: "#f2f2f2" }}
              panels={helpPanels}
              exclusive={false}
              inverted
              fluid
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Faq;
