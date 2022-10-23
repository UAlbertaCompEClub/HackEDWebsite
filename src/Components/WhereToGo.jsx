import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { EVENT_LOCATION, EVENT_LOCATION_ADDRESS } from '../constants';

import HackEDMap from './HackEDMap'

class WhereToGo extends Component {


    render() {
        return (
            <div>
                <Container>
                <h1 style={{ textAlign: 'center', padding: 50 }}>{EVENT_LOCATION}</h1>
                <h4 style={{ textAlign: 'center', paddingBottom: 50 }}>{EVENT_LOCATION_ADDRESS}</h4>
                </Container>


                <HackEDMap/>
            </div>
        );
    }
}

export default WhereToGo;