import React, { Component } from "react";
import { Grid, Icon } from "semantic-ui-react";

import { Container } from "semantic-ui-react";

class EventSchedule extends Component {
  renderScheduleItem(item) {
    if (item.fullDate) {
      return (
        <li
          className="list-group-item text-white bg-primary"
          key={item.fullDate}
        >
          <b>{item.fullDate}</b>
        </li>
      );
    } else if (item.description && item.location) {
      return (
        <li className="list-group-item" key={item.title}>
          <Grid columns={2} divided>
            <Grid.Column mobile={3} tablet={3} computer={1}>
              <Icon fitted size="big" name={item.icon} />
            </Grid.Column>
            <Grid.Column mobile={13} tablet={13} computer={15}>
              <b>{item.title}</b>
              <p>{item.date}</p>
              <p>{item.description}</p>
              <p className="bg-primary">{item.location}</p>
            </Grid.Column>
          </Grid>
        </li>
      );
    } else if (item.description) {
      return (
        <li className="list-group-item" key={item.title}>
          <Grid columns={2} divided>
            <Grid.Column mobile={3} tablet={3} computer={1}>
              <Icon fitted size="big" name={item.icon} />
            </Grid.Column>
            <Grid.Column mobile={13} tablet={13} computer={15}>
              <b>{item.title}</b>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </Grid.Column>
          </Grid>
        </li>
      );
    } else if (item.location) {
      return (
        <li className="list-group-item" key={item.title}>
          <Grid columns={2} divided>
            <Grid.Column mobile={3} tablet={3} computer={1}>
              <Icon fitted size="big" name={item.icon} />
            </Grid.Column>
            <Grid.Column mobile={13} tablet={13} computer={15}>
              <b>{item.title}</b>
              <p>{item.date}</p>
              <p className="text-white">{item.location}</p>
            </Grid.Column>
          </Grid>
        </li>
      );
    } else {
      return (
        <li className="list-group-item" key={item.title}>
          <Grid columns={2} divided>
            <Grid.Column mobile={3} tablet={3} computer={1}>
              <Icon fitted size="big" name={item.icon} />
            </Grid.Column>
            <Grid.Column mobile={13} tablet={13} computer={15}>
              <b>{item.title}</b>
              <p>{item.date}</p>
            </Grid.Column>
          </Grid>
        </li>
      );
    }
  }

  render() {
    return (
      <div>
        <Grid
          id="Schedule"
          style={{
            margin: 0,
            paddingBottom: 40,
            width: "100%",
          }}
          stackable
          relaxed="very"
          centered
        ></Grid>
        <Container>
          <br />
          <h1 style={{ textAlign: "center" }}>SCHEDULE</h1>
          <br />
          <ul className="list-group">
            {this.props.events.map((item) => this.renderScheduleItem(item))}
          </ul>
        </Container>
      </div>
    );
  }
}

export default EventSchedule;
