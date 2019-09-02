import React, {Component} from 'react';

import HackEDMap from './HackEDMap'

class WhereToGo extends Component {
    

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', padding: 50}}>WHERE TO GO?</h1>
                <HackEDMap/>
            </div>
        );
    }
}

export default WhereToGo;