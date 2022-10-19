import React, {Component} from 'react';
import { Container } from 'semantic-ui-react'
import {EVENT_NAME, EVENT_NAME_FULL, EVENT_START_TIME} from "../constants";
class About extends Component {
    render() {
        return (
            <div id ="about" className="bg-primary text-white py-5">
                <Container>
                    <h1  style={{textAlign: 'center', paddingBottom: 50}}>BRING IT!</h1>
                    <h3>Hackathons are for designing, creating, and building awesome projects. {EVENT_NAME} is the premiere annual 24-hour hackathon from the Computer Engineering Club of the University of Alberta.</h3>
                    <br/>
                </Container>
                <Container>
                    <h2>APPLY YOURSELF</h2>
                    <p>
                      This event is for hackers who choose to learn because they can, and build because they love it.
                      Bring your creativity and create solutions to the problems that you deem important and that you want to work towards.
                      Bring your team (up to five) and work together to overcome challenges, whether that’s in software, hardware, design or strategy.
                      {" "+EVENT_NAME} is about working together and applying yourself, your skills and your creativity.</p>
                    <br/>
                </Container>
                <Container>
                    <h2>WE GOT YOU</h2>
                    <p>
                      {" "+EVENT_NAME_FULL} is happening both in person and remotely, but don't worry, either way it will still feature snacks, prizes, and swag!
                      {}
                    </p>
                    <br/>
                </Container>
                {/* <Container>
                    <h2>WE GOT YOU</h2>
                    <p>
                      To help your journey, we take care of the details.
                      {" "+EVENT_NAME_FULL} will still feature snacks, prizes, and swag!
                      {" "+EVENT_NAME_FULL} features more food, more space, more prizes and more swag.
                      We provide you with three meals and a ton of snacks to power you through your hack.
                      Tons of new prizes will be given out, be it for winning the hackathon, winning a round of lightning trivia,
                      or even winning in an all new coding challenge.
                    </p>
                    <br/>
                </Container> */}
                <Container>
                    <h2>GET READY</h2>
                    <p>Join us over the weekend of {EVENT_START_TIME.format("MMMM Do")} to hack your way to something new, whether you’re learning to code for the first time or flexing your hacking muscle trying to build the next big thing. Bring on the challenge, bring your ideas to life.</p>
                    <br/>
                </Container>
            </div>
        );
    }
}

export default About;