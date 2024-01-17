import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'
import { EVENT_START_TIME, EVENT_END_TIME } from "../constants";

// const PRESENTATION_SCHEDULE_NUM_COLUMNS = 4;

const scheduleItems = [
    {
        fullDate: "January 6, 2024 (Saturday)"
    },
    {
        title: "Sign in - Doors open",
        date: "Saturday 8:15am - 10:00am",
        icon: 'clipboard',
    },
    {
        title: "Opening Ceremonies",
        date: "Saturday - 10:00am",
        icon: 'star'
    },
    {
        title: "Hacking Begins",
        date: "Saturday - 11:00am!",
        icon: 'hourglass start'
    },
    {
        title: "Workshops and Sponsor Booths",
        date: "Saturday 11:00am - 5pm",
        icon: 'pencil alternate',
        description: "More details will be available at the event!"
    },
    {
        title: "Dinner",
        date: "Saturday - 7:00pm",
        icon: 'food',
    },
    // {
    //     title: "Sponsor Booth Event",
    //     date: "Saturday 3:00pm - 4:50pm",
    //     icon: 'suitcase',
    //     description: "Meet and mingle with our sponsors, and chat about career and software stuff! Hosted in virtual \"Wonder.me\" room.",
    // },
    // {
    //     title: "Workshop: Servus Credit Union Business Requirements",
    //     date: "Saturday 6:00pm - 6:50pm",
    //     icon: 'pencil alternate',
    //     description: "Learn the five steps to kickstart any project, and some career skills while you're there, from the experts at Servus Credit Union."
    // },
    // {
    //     title: "Workshop: ISAIC Julia",
    //     date: "Saturday 7:00pm - 7:50pm",
    //     icon: 'pencil alternate',
    //     description: "Julia is a high level language with a lot of speed under the hood, and machine learning engineers love it. Learn from the ML experts at ISAIC how to use this powerful language."
    // },

    {
        fullDate: "January 7, 2024 (Sunday)"
    },
    {
        title: "Breakfast",
        date: "Sunday - 9:00am",
        icon: 'food',
    },
    {
        title: "Registration for Judging and Devpost Submission Deadline",
        date: "Sunday - 11:00am",
        icon: 'exclamation triangle',
        description: "Must be done to be considered for prizes!"
    },
    {
        title: "Hacking Ends",
        date: "Sunday - 11:00am",
        icon: 'hourglass end'
    },
    {
        title: "Judging Begins",
        date: "Sunday - 11:15",
        icon: 'winner'
    },
    {
        title: "Judging Ends",
        date: "Sunday - 5:00pm (tentative)",
        icon: 'winner'
    },
    {
        title: "Closing Ceremonies (Winners declared)",
        date: "Sunday - 5:00pm (tentative)",
        icon: 'star'
    }
];

class Schedule extends Component {

    renderScheduleItem(item) {


        if (item.fullDate) {
            return <li className="list-group-item text-white bg-primary" key={item.fullDate}><b>{item.fullDate}</b></li>;
        }
        else if (item.description && item.location) {
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',fontFamily: 'Open Sans'  }}>
                            <Icon fitted size="big" name={item.icon} />
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15} style={{ fontFamily: 'Open Sans'  }}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                            <p className="bg-primary">{item.location}</p>
                        </Grid.Column>
                    </Grid>
                </li>
            );
        }
        else if (item.description) {
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Open Sans'  }}>
                            <Icon fitted size="big" name={item.icon} />
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15} style={{ fontFamily: 'Open Sans'  }}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p >{item.description}</p>
                        </Grid.Column>
                    </Grid>
                </li>
            );
        }
        else if (item.location) {
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,fontFamily: 'Open Sans' }}>
                            <Icon fitted size="big" name={item.icon} />
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15} style={{ fontFamily: 'Open Sans'  }}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p className="text-white">{item.location}</p>
                        </Grid.Column>
                    </Grid>
                </li>
            );
        }
        else {
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Open Sans'  }}>
                            <Icon fitted size="big" name={item.icon} />
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15} style={{ fontFamily: 'Open Sans'  }}>
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
                <Grid id="Schedule" style={{
                    margin: 0,
                    paddingBottom: 40,
                    width: "100%"
                }}
                    stackable
                    relaxed='very'
                    centered>
                </Grid>
                <Container>
                    <br />
                    <h1 style={{ textAlign: 'center' }}>SCHEDULE</h1>
                    <br />
                    <ul className="list-group">
                        {scheduleItems.map(item => this.renderScheduleItem(item))}
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Schedule;