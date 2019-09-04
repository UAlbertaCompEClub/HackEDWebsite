import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'

const PRESENTATION_SCHEDULE_NUM_COLUMNS = 4;

const scheduleItems = [
    {
        fullDate: "January 18, 2020 (Saturday)"
    },
    {
        title: "Doors open for Hackers",
        date: "Saturday 10:00am - Saturday 11:00am",
        icon: "lock open"
    },
    {
        title: "Opening Ceremonies Begin",
        date: "Saturday 11:00am - Saturday 12:00am",
        icon: 'star'
    },
    {
        title: "Hacking Begins",
        date: "Saturday 12:00pm",
        icon: 'hourglass start'
    },
    // {
    //     title: "SciKit Learn Workshop",
    //     date: "Saturday 1:00pm - Saturday 1:50pm",
    //     icon: 'pencil alternate',
    //     location: "ETLC E2-001",
    //     description: "Get a primer on classification as well as SciKit Learn. Great for those interested in AI. Part 1 in a 2 part series."
    // },
    // {
    //     title: "Intro to Git",
    //     date: "Saturday 1:00pm - Saturday 1:50pm",
    //     icon: 'pencil alternate',
    //     location: "ETLC E2-002",
    //     description: "Highly recommended for anyone who doesn't know git."
    // },
    // {
    //     title: "Team Finding Workshop",
    //     date: "Saturday 1:00pm - Saturday 1:50pm",
    //     icon: 'pencil alternate',
    //     location: "DICE 8-207",
    //     description: "For students who don't have teams yet to find a group."
    // },
    // {
    //     title: "Natural Language Processing Primer",
    //     date: "Saturday 2:00pm - Saturday 3:30pm",
    //     location: "ETLC E2-001",
    //     icon: 'pencil alternate',
    //     description: "Builds off of material covered in the SciKit Learn workshop. Part 2 of the 2 part series."
    // },
    // {
    //     title: "Intro to React",
    //     date: "Saturday 2:00pm - Saturday 3:30pm",
    //     location: "ETLC E2-002",
    //     icon: 'pencil alternate',
    //     description: "Great primer for anyone who wants to learn about React."
    // },
    // {
    //     title: "Intro to Android",
    //     date: "Saturday 2:00pm - Saturday 3:30pm",
    //     location: "DICE 8-207",
    //     icon: 'pencil alternate',
    //     description: "Great primer for anyone who wants to learn about Android."
    // },
    // {
    //     title: "JavaScript Basics",
    //     date: "Saturday 2:00pm - Saturday 3:30pm",
    //     location: "ETLC Solarium",
    //     icon: 'pencil alternate',
    //     description: "Great primer for anyone who wants to learn about JavaScript."
    // },
    // {
    //     title: "Pitching a Hackathon",
    //     date: "Saturday 3:30pm - Saturday 4:20pm",
    //     location: "DICE 8-207",
    //     icon: 'pencil alternate',
    //     description: "Getting serious about a hack? Learn how to pitch it to judges!"
    // },
    // {
    //     title: "How To Not Lose a Billion Dollars",
    //     date: "Saturday 4:30pm - Saturday 6:00pm",
    //     location: "ETLC E2-001",
    //     icon: 'pencil alternate',
    //     description: "A behind the scenes look of industrial SCADA systems"
    // },
    // {
    //     title: "Realtime Traffic Sign Detection Using YOLO",
    //     date: "Saturday 4:30pm - Saturday 6:00pm",
    //     location: "ETLC E2-002",
    //     icon: 'pencil alternate',
    // },
    // {
    //     title: "Introduction to Rx Java",
    //     date: "Saturday 4:30pm - Saturday 6:00pm",
    //     location: "DICE 8-207",
    //     icon: 'pencil alternate',
    // },
    // {
    //     title: "Coding Quality",
    //     date: "Saturday 4:30pm - Saturday 6:00pm",
    //     location: "ETLC Solarium",
    //     icon: 'pencil alternate',
    // },
    {
        title: "Dinner",
        date: "Saturday 5:30pm",
        icon: 'food'
    },
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
        fullDate: "January 19, 2020 (Sunday)"
    },
    // {
    //     title: "Ice Cream Sundays Presented by Intuit",
    //     date: "Sunday 12:00am",
    //     icon: 'food'
    // },
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
        title: "Judging",
        date: "Sunday 12:30pm - Sunday 2:30pm",
        icon: 'winner'
    },
    {
        title: "Closing Ceremony",
        date: "Sunday 3:00pm - Sunday 4:30pm",
        icon: 'star'
    },
    {
        title: "Event Ends",
        date: "Sunday 4:45pm",
        icon: 'clock'
    },
    {
        title: "Venue Closes For Participants",
        date: "Sunday 5:30pm",
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