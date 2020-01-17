import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'
import {EVENT_START_TIME, EVENT_END_TIME} from "../constants";

// const PRESENTATION_SCHEDULE_NUM_COLUMNS = 4;

const scheduleItems = [
    {
        fullDate: EVENT_START_TIME.format("MMMM Do, YYYY (dddd)")
    },
    {
        title: "Doors open for Hackers",
        date: EVENT_START_TIME.format("dddd h:mma"),
        icon: "lock open"
    },
    {
        title: "Opening Ceremonies Begin",
        date: "Saturday 11:00am",
        icon: 'star'
    },
    {
        title: "Hacking Begins",
        date: "Saturday 12:00pm",
        icon: 'hourglass start'
    },
    {
        title: "Workshops begin",
        date: "Saturday 12:30am",
        icon: 'pencil alternate',
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
    //     date: "Saturday 2:00pm",
    //     icon: 'pencil alternate',
    //     location: "",
    //     description: "Tips and tricks to survive your first hackathon"
    // },
    // {
    //     title: "Intro to React",
    //     date: "Saturday 3:30pm",
    //     icon: 'pencil alternate',
    //     location: "",
    //     description: "Introduction to the React Framework"
    // },
    {
        title: "Dinner",
        date: "Saturday 6:00pm",
        icon: 'food'
    },
    // {
    //     title: "Machine Learning on the Raspberry Pi",
    //     date: "Saturday 6:30pm",
    //     icon: 'pencil alternate',
    //     location: "",
    //     description: "Machine Learning on the Raspberry Pi - More Practice than Theory"
    // },
    // {
    //     title: "Hardware Debugging - Tips & Tricks",
    //     date: "Saturday 8:00pm - Saturday 9:30pm",
    //     location: "ETLC E2-001",
    //     icon: 'pencil alternate',
    //     description: "An example driven conversation about how to approach embedded debugging and creative problem solving"
    // },
    // {
    //     title: "Open Data and API Endpoints For your Apps",
    //     date: "Saturday 8:00pm - Saturday 9:30pm",
    //     location: "ETLC E2-002",
    //     icon: 'pencil alternate'
    // },
    // {
    //     title: "Intro to Docker",
    //     date: "Saturday 8:00pm - Saturday 9:30pm",
    //     location: "DICE 8-207",
    //     icon: 'pencil alternate'
    // },
    // {
    //     title: "Design for Delight",
    //     date: "Saturday 8:00pm - Saturday 9:30pm",
    //     location: "ETLC Solarium",
    //     icon: 'pencil alternate'
    // },
    // {
    //     title: "MLH Cup Stacking",
    //     date: "Saturday 9:00pm",
    //     location: "ETLC Solarium",
    //     icon: 'gamepad'
    // },
    {
        fullDate: EVENT_END_TIME.format("MMMM Do, YYYY (dddd)")
    },
    {
        title: "Midnight Snack Presented by Intuit",
        date: "Sunday 12:00am",
        icon: 'food'
    },
    {
        title: "Breakfast Is Served",
        date: "Sunday 7:30am",
        icon: 'food'
    },
    {
        title: "Submissions Due on DevPost",
        date: "Sunday 11:00pm",
        icon: 'exclamation triangle',
        description: "Hacking hasn't ended yet!"
    },
    {
        title: "Hacking Ends",
        date: "Sunday 12:00pm",
        icon: 'hourglass end'
    },
    {
        title: "Lunch",
        date: "Sunday 12:00pm",
        icon: 'food'
    },
    {
        title: "Judging Begins",
        date: "Sunday 12:30pm",
        icon: 'winner'
    },
    {
        title: "Judging Ends",
        date: "Sunday 3:00pm",
        icon: 'winner'
    },
    {
        title: "Closing Ceremony",
        date: "Sunday 3:30pm",
        icon: 'star'
    },
    {
        title: "Event Ends",
        date: "Sunday 5:00pm",
        icon: 'clock'
    },
    {
        title: "Venue Closes For Participants",
        date: EVENT_END_TIME.format("dddd h:mma"),
        icon: 'lock'
    },
];

class Schedule extends Component {
    renderScheduleItem(item){
        if (item.fullDate){
            return <li className="list-group-item text-white bg-primary" key={item.fullDate}><b>{item.fullDate}</b></li>;
        }
        else if (item.description && item.location){
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1}>
                            <Icon fitted size="big" name={item.icon}/>
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
        }
        else if (item.description){
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1}>
                            <Icon fitted size="big" name={item.icon}/>
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                        </Grid.Column>
                    </Grid>
                </li>
                );
        }
        else if (item.location){
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1}>
                            <Icon fitted size="big" name={item.icon}/>
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p className="text-white">{item.location}</p>
                        </Grid.Column>
                    </Grid>
                </li>
                );
        }
        else{
            return (
            <li className="list-group-item" key={item.title}>
                <Grid columns={2} divided>
                    <Grid.Column mobile={3} tablet={3} computer={1}>
                        <Icon fitted size="big" name={item.icon}/>
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
                <Grid id="Schedule" style={{
                    margin: 0,
                    paddingBottom: 40,
                    width:"100%"
                }}
                stackable
                relaxed='very'
                centered>
                </Grid>
                <Container>
                    <br/>
                    <h1 style={{textAlign: 'center'}}>SCHEDULE</h1>
                    <br/>
                    <ul className="list-group"> 
                        {scheduleItems.map(item => this.renderScheduleItem(item))}
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Schedule;