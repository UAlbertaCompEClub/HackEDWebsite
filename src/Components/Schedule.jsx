import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'
// import {EVENT_START_TIME, EVENT_END_TIME} from "../constants";
import {EVENT_START_TIME} from "../constants";

// const PRESENTATION_SCHEDULE_NUM_COLUMNS = 4;

const scheduleItems = [
    {
        fullDate: EVENT_START_TIME.format("MMMM Do, YYYY (dddd)")
    },
    {
        title: "Check back soon for more info!",
        icon: 'star'
    }
    // {
    //     title: "Doors open for Hackers",
    //     date: EVENT_START_TIME.format("dddd h:mma"),
    //     icon: "lock open"
    // },
    // {
    //     title: "Opening Ceremonies Begin",
    //     date: "Saturday 11:00am",
    //     icon: 'star'
    // },
    // {
    //     title: "Hacking Begins",
    //     date: "Saturday 12:00pm",
    //     icon: 'hourglass start'
    // },
    // {
    //     title: "Intro to Git Workshop",
    //     date: "Saturday 12:30am",
    //     icon: 'pencil alternate',
    //     location: "",
    //     description: "Intro to Git"
    // },
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
    //     title: "Intro to React",
    //     date: "Saturday 2:00pm",
    //     icon: 'pencil alternate',
    //     location: "",
    //     description: "Introduction to the React Framework"
    // },
    // {
    //     title: "Machine Learning on the Raspberry Pi",
    //     date: "Saturday 3:30pm",
    //     icon: 'pencil alternate',
    //     location: "",
    //     description: "Machine Learning on the Raspberry Pi - More Practice than Theory"
    // },
    // {
    //     title: "Dinner",
    //     date: "Saturday 5:30pm",
    //     icon: 'food'
    // },
    // {
    //     title: "Lunch",
    //     date: "Sunday 12:00pm",
    //     icon: 'food'
    // },
    // {
    //     title: "Judging",
    //     date: "Sunday 12:30pm - Sunday 2:30pm",
    //     icon: 'winner'
    // },
    // {
    //     title: "Closing Ceremony",
    //     date: "Sunday 3:00pm - Sunday 4:30pm",
    //     icon: 'star'
    // },
    // {
    //     title: "Event Ends",
    //     date: "Sunday 4:45pm",
    //     icon: 'clock'
    // },
    // {
    //     title: "Venue Closes For Participants",
    //     date: EVENT_END_TIME.format("dddd h:mma"),
    //     icon: 'lock'
    // },
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
                            <p className="text-black">{item.location}</p>
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
                    <h3 style={{textAlign: 'center'}}>SCHEDULE</h3>
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