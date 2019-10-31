import React from 'react';

import HackEDInverted from '../Logos/HackEDInverted.png';

const navItemStyle = {
    fontSize: "1.25rem"
}

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" style={{paddingTop: 0, paddingBottom: 0}} href="#top">
                    <img src={HackEDInverted} height="40" className="d-inline-block align-top" alt="HackED Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto" style={navItemStyle}>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#FAQ">FAQ</a>
                        </li>
                        {/* 
                        <li className="nav-item">
                            <a className="nav-link" href="#presentationSchedule">Presentation Schedule</a>
                        </li>
                        */}
                        <li className="nav-item">
                            <a className="nav-link" href="#Schedule">Schedule</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Sponsors">Sponsors</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;