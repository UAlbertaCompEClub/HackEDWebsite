import React, { Component } from "react";
// import HackEDMap from "Components/Common/HackEDMap";

class WhereToGo extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", padding: 50 }}>ALL ONLINE</h1>
        <h4 style={{ textAlign: "center", paddingBottom: 50 }}>
          To keep everyone safe, HackED Beta will be held remotely in 2021.
        </h4>
        {/* <HackEDMap lat={53.545882} lng={-113.499052} /> */}
      </div>
    );
  }
}

export default WhereToGo;
