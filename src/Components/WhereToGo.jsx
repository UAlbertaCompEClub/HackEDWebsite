import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import HackEDMap from './HackEDMap'

class WhereToGo extends Component {


    render() {
        return (
            <div>
                <Container>
                <h1 style={{ textAlign: 'center', padding: 50 }}>HYBRID EVENT</h1>
                <h4 style={{ textAlign: 'center', paddingBottom: 50 }}>To keep everyone safe, HackED hopes to operate as a hybrid event in 2022.  We will have virtual as well as in person tickets, to allow as many participants as possible while maintaining social distance at the venue</h4>
                </Container>


                {/* <HackEDMap/> */}
            </div>
        );
    }
}

export default WhereToGo;