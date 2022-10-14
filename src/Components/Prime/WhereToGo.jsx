import React, { Component } from "react";
import { Container } from "semantic-ui-react";

// import Map from "../Common/Map";

class WhereToGo extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{ textAlign: "center", padding: 50 }}>VIRTUAL EVENT</h1>
          <h4 style={{ textAlign: "center", paddingBottom: 50 }}>
            Due to recent health measures taken by the university, HackED will
            operate as a virtual event in 2022. Any hackers who registered to
            attend in person will still be able to attend the virtual event
            using their ticket.
          </h4>
        </Container>

        {/* <Map lat={53.545882} lng={-113.499052} /> */}
      </div>
    );
  }
}

export default WhereToGo;
