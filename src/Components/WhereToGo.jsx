import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { EVENT_LOCATION, EVENT_LOCATION_ADDRESS } from '../constants';

import HackEDMap from './HackEDMap'

class WhereToGo extends Component {


    render() {
        return (
            <div>
                <Container>
                <h1 style={{ textAlign: 'center', padding: 50 ,fontFamily: 'Open Sans'}}>{EVENT_LOCATION}</h1>
                <h4 style={{ textAlign: 'center', paddingBottom: 50 ,fontFamily: 'Open Sans'}}>{EVENT_LOCATION_ADDRESS}</h4>
                </Container>


                <HackEDMap/>
                <h4 style={{textAlign: 'center', padding: 50,fontFamily: 'Open Sans'}}>HackED 2024 is a hybrid event! Join us online on discord to get the full experience from anywhere you'd like.</h4>
            </div>
        );
    }
}

export default WhereToGo;