import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { EVENT_NAME, EVENT_NAME_FULL, EVENT_START_TIME } from "../constants";
class About extends Component {
    render() {
        return (
            <div id="about" className="bg-primary text-white py-5">
                <Container>
                    <h1 style={{ textAlign: 'center' , fontFamily: 'Open Sans'}}>BRING IT!</h1>
                    <h3 style={{ fontFamily: 'Open Sans'}}>Hackathons are for designing, creating, and building awesome projects. {EVENT_NAME} is the premiere annual 24-hour hackathon from the Computer Engineering Club of the University of Alberta.</h3>
                    <br />
                </Container>
                <Container>
                    <h2 style={{ fontFamily: 'Open Sans'}}>APPLY YOURSELF</h2>
                    <p style={{ fontFamily: 'Open Sans'}}>
                        This event is for hackers who choose to learn because they can, and build because they love it.
                        Bring your creativity and create solutions to the problems that you deem important and that you want to work towards.
                        Bring your team (up to five) and work together to overcome challenges, whether that’s in software, hardware, design or strategy.
                      {" " + EVENT_NAME} is about working together and applying yourself, your skills and your creativity.</p>
                    <br />
                </Container>
                <Container >
                    <h2 style={{ fontFamily: 'Open Sans'}}>WE GOT YOU</h2>
                    <p style={{ fontFamily: 'Open Sans'}}>
                        A box full of swag will be available to each participant, distributed at the beginning of the event, full of swag from our sponsors, and some special treats from us to keep you coding all night! There will be challenges, games, and trivia questions, and the winners will be eligible for mini prizes too!
                    </p>
                    <br />
                </Container>
                <Container>
                    <h2 style={{ fontFamily: 'Open Sans'}}>GET READY</h2>
                    <p style={{ fontFamily: 'Open Sans'}}>Join us over the weekend of January 7th to hack your way to something new, whether you're learning to code for the first time or flexing your hacking muscle trying to build the next big thing. Bring on the challenge, bring your ideas to life.</p>
                    <br/>
                </Container>
            </div>
        );
    }
}

export default About;