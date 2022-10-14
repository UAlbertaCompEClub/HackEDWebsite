import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import { Container } from "semantic-ui-react";

class PresentationSchedule extends Component {
  renderPresentationScheduleItem(rows) {
    return (
      <li className="list-group-item">
        <Grid columns={4} divided>
          {rows.map((item) => this.renderPresentationScheduleItemCol(item))}
        </Grid>
      </li>
    );
  }

  renderPresentationScheduleItemCol(column) {
    if (column.header && column.room) {
      return (
        <Grid.Column className="bg-primary">
          <p>
            <b>{column.room}</b>
          </p>
        </Grid.Column>
      );
    } else if (column.header && column.time) {
      return (
        <Grid.Column className="bg-primary">
          <p>
            <b>{column.time}</b>
          </p>
        </Grid.Column>
      );
    }
    return (
      <Grid.Column>
        <p>{column.team}</p>
      </Grid.Column>
    );
  }

  render() {
    return (
      <div>
        <Grid
          id="presentationSchedule"
          style={{
            margin: 0,
            paddingBottom: 40,
          }}
          stackable
          relaxed="very"
        ></Grid>
        <Container>
          <br />
          <h1 style={{ textAlign: "center" }}>PRESENTATION SCHEDULE</h1>
          <p style={{ textAlign: "center" }}>
            You will have 2 minutes to present, and 2 minutes to answer
            questions
          </p>
          <br />
          <ul className="list-group">
            {this.props.schedule.map((item) =>
              this.renderPresentationScheduleItem(item)
            )}
          </ul>
        </Container>
      </div>
    );
  }
}

export default PresentationSchedule;
