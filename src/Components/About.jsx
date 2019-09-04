import React, {Component} from 'react';
import { Container } from 'semantic-ui-react'
class About extends Component {
    render() {
        return (
            <div id ="about" className="bg-primary text-white py-5">
                <Container>
                    <h1 style={{textAlign: 'center'}}>BRING IT!</h1>
                    <h3>Hackathons are for designing, creating, and building awesome projects. HackED is the premiere annual 24-hour hackathon from the Computer Engineering Club of the University of Alberta.</h3>
                    <br/>
                </Container>
                <Container>
                    <h2>APPLY YOURSELF</h2>
                    <p>This event is for hackers who choose to learn because they can, and build because they love it. Bring your creativity and create solutions to the problems that you deem important and that you want to work towards. Bring your team (up to five) and work together to overcome challenges, whether that’s in software, hardware, design or strategy. HackED is about working together and applying yourself, your skills and your creativity.</p>
                    <br/>
                </Container>
                <Container>
                    <h2>WE GOT YOU</h2>
                    <p>To help your journey, we take care of the details. HackED 2020 features more food, more space, more prizes and more swag. We provide you with three meals and a ton of snacks to power you through your hack. We’re expanding into the eighth floor of Donadeo ICE to give your team more room to think and collaborate. We’re spending over $1k on prizes, split between winning at the end, trivia throughout the night and some surprises too. And this year, we’re releasing custom HackED T-shirts for the first time in HackED history.</p>
                    <br/>
                </Container>
                <Container>
                    <h2>BRING IT</h2>
                    <p>Join us over the weekend of January 18 to hack your way to something new, whether you’re learning to code for the first time or flexing your hacking muscle trying to build the next big thing. Bring on the challenge, bring your ideas to life.</p>
                    <br/>
                </Container>
            </div>
        );
    }
}

export default About;