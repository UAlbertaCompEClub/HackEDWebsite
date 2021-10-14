import React, {Component} from 'react';
import { Grid, Image, List } from 'semantic-ui-react'

import {EVENT_NAME} from "../constants";

import CompEClubLogo from "../logos/CompEClub.jpg";
import AdasTeamLogo from "../logos/AdasTeam.png";


class Footer extends Component {
    render() {
        return (
            <>
            <Grid
            id="Organizers"
            centered
            alignItems="center"
            style={{
            background: "#FFFFFF",
            marginTop: 0,
            marginBottom: 20
            }}
            columns={3}
            container
            stackable
            relaxed="very"
            >         
            {/* <Grid.Row centered>
                <Grid.Column width={2}>
                    <Image
                    src={AdasTeamLogo}
                    fluid
                    as="a"
                    href="https://www.adasteam.ca/"
                    target="_blank"
                    />
                </Grid.Column>
                <Grid.Column  width={2}>
                    <Image
                    src={CompEClubLogo}
                    fluid
                    as="a"
                    href="https://www.compeclub.com/"
                    target="_blank"
                    />
                </Grid.Column>
                <Grid.Column width={2}>
                    <a href="http://uacs.ca/" class="nav-link">
                        <h1
                        style={{
                            paddingTop: 11,
                            color: '#3EA45F',
                            fontWeight: 600,
                        }}
                        >UACS</h1>
                    </a>
                </Grid.Column>
            </Grid.Row> */}
        </Grid>
            <Grid 
            centered
            className = "bg-white"
            columns={4}
            container
            stackable
            relaxed='very'>
                <Grid.Row centered>
                <Grid.Column width={12}>

                    <h4>
                    The Computer Engineering Club would like to give a special thank you to Ada's Team and UACS, without whom {EVENT_NAME} would not be possible.
                    </h4>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered>
                    <Grid.Column>
                        <h4>
                            ETLC 2-040M<br/>
                            University of Alberta<br/>
                            Edmonton, AB<br/>
                        </h4>
                        
                    </Grid.Column>
                    <Grid.Column />
                    <Grid.Column>
                        <List>
                            <List.Item 
                                icon='linkify' 
                                content={<a href='http://www.compeclub.com/'>compeclub.com</a>} 
                            />
                            <List.Item
                                icon='mail'
                                content={<a href='mailto:hacked@compeclub.com'>hacked@compeclub.com</a>}
                            />
                            <List.Item
                                icon='twitter'
                                content={<a href='https://twitter.com/CompEClub'>@CompEClub</a>}
                            />
                            <List.Item
                                icon='facebook'
                                content={<a href='https://www.facebook.com/compeclub'>@CompEClub</a>}
                            />
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={16}>
                        <a style={{textAlign: "center"}} 
                            href="http://mlh.io/code-of-conduct" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <h4>MLH Code of Conduct</h4>
                        </a>
                        <p style={{textAlign: "center"}}>© University of Alberta Computer Engineering Club</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid></>
        );
    }
}

export default Footer;