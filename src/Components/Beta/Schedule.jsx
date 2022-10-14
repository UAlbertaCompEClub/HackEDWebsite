import React, { Component } from "react";
import { Grid, Icon } from "semantic-ui-react";

import { Container } from "semantic-ui-react";
import { EVENT_START_TIME, EVENT_END_TIME } from "../constants";

// const PRESENTATION_SCHEDULE_NUM_COLUMNS = 4;

const scheduleItems = [
  {
    fullDate: EVENT_START_TIME.format("MMMM Do, YYYY (dddd)"),
  },
  {
    title: "Opening Ceremonies Begin",
    date: "Saturday 12:00pm",
    icon: "star",
  },
  {
    title: "Hacking Begins",
    date: "Saturday 1:00pm",
    icon: "hourglass start",
  },
  {
    title: "Intro to Python Workshop",
    date: "Saturday 2:00pm",
    icon: "pencil alternate",
    location: "",
    description:
      "A quick refresher on python basics and for any questions you might have",
  },
  {
    title: "Github Tutorial",
    date: "Saturday 3:00pm",
    icon: "pencil alternate",
    location: "",
    description:
      "Highly recommended for anyone who doesn't know git, for working on code collaboratively",
  },
  {
    title: "NumPy/Pandas",
    date: "Saturday 5:00pm",
    icon: "pencil alternate",
    location: "",
    description: "Data analysis & machine learning tools for Python",
  },
  {
    title: "Internet of Things Demo",
    date: "Saturday 7:00pm",
    icon: "pencil alternate",
    location: "",
    description: "Join us for a deep dive into internet connected hardware",
  },
  {
    title: "Web Scraping",
    date: "Saturday 9:00pm",
    icon: "pencil alternate",
    location: "",
    description:
      "Moving data from the internet to your project can be easy with the right tricks",
  },
  // {
  //     title: "Intro to Git",
  //     date: "Saturday 1:00pm - Saturday 1:50pm",
  //     icon: 'pencil alternate',
  //     location: "ETLC E2-002",
  //     description: "Highly recommended for anyone who doesn't know git."
  // },
  // {
  //     title: "Hack your First Hackathon",
  //     date: "Saturday 12:30am",
  //     icon: 'pencil alternate',
  //     location: "",
  //     description: "Tips and tricks to survive your first hackathon"
  // },
  // {
  //     title: "Intro to React Workshop",
  //     date: "Saturday 2:00pm",
  //     icon: 'pencil alternate',
  //     location: "",
  //     description: "Create a simple app and get it to fetch data from an API"
  // },
  // {
  //     title: "Embedded Machine Learning on the Artemis Workshop",
  //     date: "Saturday 3:00pm",
  //     icon: 'pencil alternate',
  //     location: "",
  //     description: "Use hardware and machine learning to detect a spoken word and trigger an effect!"
  // },
  // {
  //     title: "Game Time",
  //     date: "Saturday 6:00pm",
  //     icon: 'gamepad',
  //     location: "",
  //     description: "A little break from coding to play some games and catch up with other groups"
  // },
  // {
  //     title: "Snack Time",
  //     date: "Saturday 11:00pm",
  //     icon: 'food',
  //     location: "",
  //     description: "Kick back and relax with a mug cake, or try some games and contests"
  // },
  // {
  //     title: "Closing Ceremonies",
  //     date: "Sunday 12:00",
  //     icon: 'star'
  // },
  {
    title: "Judging",
    date: "Sunday 1pm - Sunday 3:00pm",
    icon: "edit",
  },
  {
    title: "Winner Announcement",
    date: "Sunday 3:30pm",
    icon: "winner",
  },
];

class Schedule extends Component {
  renderScheduleItem(item) {
    if (item.fullDate) {
      return (
        <li className="list-group-item text-white bg-beta" key={item.fullDate}>
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
              <p className="bg-beta">{item.location}</p>
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
              <p className="text-black">{item.location}</p>
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
          <h3 style={{ textAlign: "center" }}>SCHEDULE</h3>
          <br />
          <ul className="list-group">
            {scheduleItems.map((item) => this.renderScheduleItem(item))}
          </ul>
        </Container>
      </div>
    );
  }
}

export default Schedule;
