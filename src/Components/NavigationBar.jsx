import React from 'react';
import { Image } from "semantic-ui-react";
import HackEDLogo from "../logos/HackedCircle.png";


class Header extends React.Component {
    render() {
        return (
              <nav style={{fontFamily: 'Open Sans'}} className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"/>
                  </button>
                  <div className="circle-logo">
                            <Image src={HackEDLogo} size='tiny'
                            a href="https://hacked.compeclub.com/" />
                        </div>
                  <div className="collapse navbar-collapse" id="navbarText">
                      <ul className="navbar-nav mr-auto">
                      
                          <li style={{ paddingLeft: "5%", fontSize: 'large' }} className="nav-item">
                              <a className="nav-link" href="#about">About</a>
                          </li>
                          <li style={{ paddingLeft: "5%", fontSize: 'large' }} className="nav-item">
                              <a className="nav-link" href="#Schedule">Schedule</a>
                          </li>
                          <li style={{ paddingLeft: "5%", fontSize: 'large' }} className="nav-item">
                              <a className="nav-link" href="#FAQ">FAQ</a>
                          </li>
                          {/* <li className="nav-item">
                              <a className="nav-link" href="#presentationSchedule">Presentation Schedule</a>
                          </li> */}
                        
                          <li style={{ paddingLeft: "5%", fontSize: 'large' }} className="nav-item">
                              <a className="nav-link" href="#Sponsors">Sponsors</a>
                          </li>
                      </ul>
                  </div>
              </nav>
        );
    }
}

export default Header;