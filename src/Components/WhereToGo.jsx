import React, {Component} from 'react';

import HackEDMap from './HackEDMap'

class WhereToGo extends Component {
    

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', padding: 50}}>DICE 8th Floor, 116 Street Northwest, Edmonton, AB</h1>
                <HackEDMap/> 
                <h4 style={{textAlign: 'center', padding: 50}}>Hacked Beta 2022 is a hybrid event! Join us online on discord to get the full experience from anywhere you'd like.</h4>
            </div>
        );
    }
}

export default WhereToGo;