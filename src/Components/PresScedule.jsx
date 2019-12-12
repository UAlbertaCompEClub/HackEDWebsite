import React, { Component } from 'react';
import {Grid, List} from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'

// import PresScheduleImage from '../V2.png';
// const PRESENTATION_SCHEDULE_NUM_COLUMNS = 5;

const presentationSchedule = [
  [
    {
      header: "true",
      room: "Banff (DICE 8A-246)"
    },
    {
      team: "One Stop Photoshop",
      time: "01:45-01:50"
    },
    {
      team: "Geographic News Contextualizer",
      time: "01:45-01:50"
    },
    {
      team: "Rover the Explorer",
      time: "01:45-01:50"
    },
  ],
];

class PresSchedule extends Component {
  render() {
    return (
      <Grid
        centered
        className = "bg-white"
        columns={1}
        container
        stackable
        relaxed='very'>
        <Grid.Row centered>
          <Grid.Column centered>
            <h1>Presentation Schedule</h1>
            {/*<img src={PresScheduleImage}/>*/}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PresSchedule;