import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'

// const PRESENTATION_SCHEDULE_NUM_COLUMNS = 5;

const presentationSchedule = [
    // [
    //     {
    //     },
    //     {
    //         header: "true",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         header: "true",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         header: "true",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "12:45-12:50"
    //     },
    //     {
    //         team: "MovieBot",
    //         time: "00:45-00:50",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "git-emotional",
    //         time: "00:45-00:50",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "EyeMouse",
    //         time: "00:45-00:50",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "12:50-12:55"
    //     },
    //     {
    //         team: "ARMageddon",
    //         time: "00:50-00:55",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Room Searcher",
    //         time: "00:50-00:55",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Profolio Hack",
    //         time: "00:50-00:55",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "12:55-01:00"
    //     },
    //     {
    //         team: "Android-App-1",
    //         time: "00:55-01:00",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Space Jump",
    //         time: "00:55-01:00",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "UofA-advisor",
    //         time: "00:55-01:00",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:00-01:05"
    //     },
    //     {
    //         team: "uAlberta5Star",
    //         time: "01:00-01:05",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Make-me-laugh",
    //         time: "01:00-01:05",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Feelsbook",
    //         time: "01:00-01:05",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:05-01:10"
    //     },
    //     {
    //         team: "CloudCity",
    //         time: "01:05-01:10",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "balloonpowers",
    //         time: "01:05-01:10",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "ChemARstry",
    //         time: "01:05-01:10",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:10-01:15"
    //     },
    //     {
    //         team: "shouldnt.js",
    //         time: "01:10-01:15",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Search for the Best Garfield Comic",
    //         time: "01:10-01:15",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "DreamMeme",
    //         time: "01:10-01:15",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:15-01:20"
    //     },
    //     {
    //         team: "HackED-2019-Not!!EchoSock",
    //         time: "01:15-01:20",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "WhatWear",
    //         time: "01:15-01:20",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "EulerTikz",
    //         time: "01:15-01:20",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:20-01:25"
    //     },
    //     {
    //         team: "Internet Tracker",
    //         time: "01:20-01:25",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Crowd Density Estimator",
    //         time: "01:20-01:25",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Student Gradebook",
    //         time: "01:20-01:25",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:25-01:30"
    //     },
    //     {
    //         team: "Gesture Controlled Desktop Robotic Arm",
    //         time: "01:25-01:30",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Yah-fi-API",
    //         time: "01:25-01:30",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Pipe",
    //         time: "01:25-01:30",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:30-01:35"
    //     },
    //     {
    //         team: "course prerequisites",
    //         time: "01:30-01:35",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "petah-royale",
    //         time: "01:30-01:35",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "BotSpotr",
    //         time: "01:30-01:35",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:35-01:40"
    //     },
    //     {
    //         team: "Tuber",
    //         time: "01:35-01:40",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Boppo",
    //         time: "01:35-01:40",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Eraser",
    //         time: "01:35-01:40",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:40-01:45"
    //     },
    //     {
    //         team: "MyHealth",
    //         time: "01:40-01:45",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "WineSuggest",
    //         time: "01:40-01:45",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "enigma-shell",
    //         time: "01:40-01:45",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:45-01:50"
    //     },
    //     {
    //         team: "One Stop Photoshop",
    //         time: "01:45-01:50",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Geographic News Contextualizer",
    //         time: "01:45-01:50",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Rover the Explorer",
    //         time: "01:45-01:50",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:50-01:55"
    //     },
    //     {
    //         team: "HACKED2019",
    //         time: "01:50-01:55",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "HackED2019",
    //         time: "01:50-01:55",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Shade",
    //         time: "01:50-01:55",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "01:55-02:00"
    //     },
    //     {
    //         team: "Roommates",
    //         time: "01:55-02:00",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //         team: "Beat The Odds",
    //         time: "01:55-02:00",
    //         room: "Jasper (8-236)"
    //     },
    //     {
    //         team: "Divergence",
    //         time: "01:55-02:00",
    //         room: "Lake Louise (DICE 8A-242)"
    //     },
    // ],
    // [
    //     {
    //         header: "true",
    //         time: "02:00-02:05"
    //     },
    //     {
    //         team: "RapidRenter",
    //         time: "02:00-02:05",
    //         room: "Banff (DICE 8A-246)"
    //     },
    //     {
    //     },
    //     {
    //     },
    // ]        
];

class PresentationSchedule extends Component {
    // renderPresentationScheduleItem(item){
    //     if (item.header){
    //         return (
    //         <li style={this.dateHeaderStyle} className="list-group-item" key={item.team}>
    //             <Grid columns={3} divided>
    //                 <Grid.Column>
    //                     <h3><b>{item.team}</b></h3>
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                     <h3><b>{item.time}</b></h3>
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                     <h3><b>{item.room}</b></h3>
    //                 </Grid.Column>
    //             </Grid>
    //         </li>
    //         );
    //         }
    //     else{
    //         return (
    //         <li className="list-group-item" key={item.team}>
    //         <Grid columns={3} divided>
    //             <Grid.Column>
    //                 <p>{item.team}</p>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <p>{item.time}</p>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <p>{item.room}</p>
    //             </Grid.Column>
    //         </Grid>
    //     </li>
    //         );
    //     }
    // }

    renderPresentationScheduleItem(rows) {
        return (
            <li className="list-group-item">
                <Grid columns={4} divided>
                    {rows.map(item => this.renderPresentationScheduleItemCol(item))}
                </Grid>
            </li>
        );
    }

    renderPresentationScheduleItemCol(column) {
        if (column.header && column.room) {
            return (
                <Grid.Column className="bg-primary">
                    <p><b>{column.room}</b></p>
                </Grid.Column>
            )
        }
        else if (column.header && column.time) {
            return (
                <Grid.Column className="bg-primary">
                    <p><b>{column.time}</b></p>
                </Grid.Column>
            )
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
                <Grid id="presentationSchedule"
                style={{
                    margin: 0,
                    paddingBottom: 40,
                }}
                stackable
                relaxed='very'
                >
                </Grid>
                <Container>
                    <br />
                    <h1 style={{ textAlign: 'center' }}>PRESENTATION SCHEDULE</h1>
                    <p style={{ textAlign: 'center' }}>You will have 2 minutes to present, and 2 minutes to answer questions</p>
                    <br />
                    <ul className="list-group">
                        {presentationSchedule.map(item => this.renderPresentationScheduleItem(item))}
                    </ul>
                </Container>
            </div>
        );
    }
}

export default PresentationSchedule;