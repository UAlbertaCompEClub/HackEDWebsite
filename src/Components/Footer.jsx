import React, {Component} from 'react';

import { Grid, List } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <Grid 
            centered
            className = "bg-white"
            columns={4}
            container
            stackable
            relaxed='very'>
                <Grid.Row centered>
                    <Grid.Column>
                        <h4 style={{fontFamily: 'Open Sans'}}>
                        Mechanical Engineering Building, 5th Floor<br/>
                            University of Alberta<br/>
                            Edmonton, AB<br/>
                        </h4>
                        
                    </Grid.Column>
                    <Grid.Column />
                    <Grid.Column style={{fontFamily: 'Open Sans'}}>
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
                                icon='instagram'
                                content={<a href='https://www.instagram.com/compeclub/'>@CompEClub</a>}
                            />
                            <List.Item
                                icon='instagram'
                                content={<a href='https://www.instagram.com/hacked_compeclub/'>@hacked_compeclub</a>}
                            />
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={16}>
                        {/* <a style={{textAlign: "center"}} 
                            href="http://mlh.io/code-of-conduct" 
                            target="_blank"
                            rel="noopener noreferrer">
                                <h4>MLH Code of Conduct</h4>
                            </a> */}
                        <p style={{textAlign: "center", fontFamily: 'Open Sans'}}>© University of Alberta Computer Engineering Club</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Footer;