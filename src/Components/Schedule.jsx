import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'
import { EVENT_START_TIME, EVENT_END_TIME } from "../constants";

// const PRESENTATION_SCHEDULE_NUM_COLUMNS = 4;

const scheduleItems = [
    {
        fullDate: EVENT_START_TIME.format("MMMM Do, YYYY (dddd)")
    },
    // {
    //     title: "Doors open for Hackers",
    //     date: EVENT_START_TIME.format("dddd h:mma"),
    //     icon: "lock open"
    // },
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
    // {-
    //     title: "Workshops begin",
    //     date: "Saturday 12:30am",
    //     icon: 'pencil alternate',
    // },
    {
        title: "Workshop: Intro to Git",
        date: "Saturday 1:00pm - 1:50pm",
        icon: 'pencil alternate',
        description: "Highly recommended for anyone who doesn't know git."
    },
    {
        title: "Workshop: ISAIC - Accessing the AI garage",
        date: "Saturday 3:00pm - 3:50pm",
        icon: 'pencil alternate',
        description: "Join this workshop to learn about and access ISAIC's AI computing resources. Especially recommended for AI training hacks! If you plan to attend, {{LINK}} to let us know how many to prepare for",
        link: "https://forms.gle/7YN3iUQWpuMv9XiQ9",
        link_text: "sign up here"
    },
    {
        title: "Workshop: CTF Workshop",
        date: "Saturday 4:00pm - 4:50pm",
        icon: 'pencil alternate',
        description: "Come learn about Capture the Flag and how to tackle different types of Capture the Flag questions!"
    },
    {
        title: "Workshop: Presenting your hack!",
        date: "Saturday 5:00pm - 5:50pm",
        icon: 'pencil alternate',
        description: "It doesn't matter how cool your hack is, you still gotta present it. Hear from one of our judges how make a great hack into an awesome presentation, and how to apply those skills in the real world."
    },
    {
        title: "Activity: Bob Ross MS Paint Night",
        date: "Saturday 7:00pm - 7:50pm",
        icon: 'paint brush',
        description: "Channel your inner creative and follow along with beloved artist Bob Ross using MS Paint. Remember, there's no such thing as CTRL-Z, just happy accidents."
    },
    {
        title: "Activity: Project Swap",
        date: "Saturday 8:00pm - 8:50pm",
        icon: 'exchange',
        description: "Partner up with a team or two and get some real users to test out your project. Or just brag about finally getting that button working"
    },
    {
        title: "Activity: Among Us Break",
        date: "Saturday 10:00pm - 10:50pm",
        icon: 'space shuttle',
        description: "We're not too proud to hop on this trend. Play Among Us with your fellow hackers. \n Can someone explain how to go in a vent like pink?"
    },
    {
        title: "Activity: JackBox Break",
        date: "Saturday 12:00pm - 12:50pm",
        icon: 'tv',
        description: "It's late, we're all tired, and I just wanna meet some strangers and lie to them. We're going to be running a lobby or two of Jackbox! Even if you dont feel funny, audience members are always welcome."
    },
    // {
    //     title: "Intro to React",
    //     date: "Saturday 3:30pm",
    //     icon: 'pencil alternate',
    //     location: "",
    //     description: "Introduction to the React Framework"
    // },
    // {
    //     title: "Dinner",
    //     date: "Saturday 6:00pm",
    //     icon: 'food'
    // },
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
    // {
    //     title: "Midnight Snack Presented by Intuit",
    //     date: "Sunday 12:00am",
    //     icon: 'food'
    // },
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
        title: "Judging Begins",
        date: "Sunday 12:30pm",
        icon: 'winner'
    },
    {
        title: "Judging Ends",
        date: "Sunday 3:30pm",
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

];

class Schedule extends Component {

    renderScheduleItem(item) {

        // Hello I'm so sorry
        // Hacky way to get a link to show up
        // Please dont do it
        let description
        if (item.link) {
            const [front, back] = item.description.split("{{LINK}}")
            description = <p>{front}<a href={item.link}>{item.link_text}</a>{back}</p>
        } else {
            description = <p>{item.description}</p>
        }

        if (item.fullDate) {
            return <li className="list-group-item text-white bg-primary" key={item.fullDate}><b>{item.fullDate}</b></li>;
        }
        else if (item.description && item.location) {
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1}>
                            <Icon fitted size="big" name={item.icon} />
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            {description}
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
                        <Grid.Column mobile={3} tablet={3} computer={1}>
                            <Icon fitted size="big" name={item.icon} />
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            {description}
                        </Grid.Column>
                    </Grid>
                </li>
            );
        }
        else if (item.location) {
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
        }
        else {
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