import React from 'react';

class Header extends React.Component {
    render() {
        return (
              <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"/>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="#about">About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#FAQ">FAQ</a>
                          </li>
                          {/* <li className="nav-item">
                              <a className="nav-link" href="#presentationSchedule">Presentation Schedule</a>
                          </li> 
                          <li className="nav-item">
                              <a className="nav-link" href="#Schedule">Schedule</a>
                          </li>*/}
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