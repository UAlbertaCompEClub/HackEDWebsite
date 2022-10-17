import React, { Component } from "react";
import PrimeLayout from "Components/Prime/Layout";
import BetaLayout from "Components/Beta/Layout";

class App extends Component {
  redirectToExternalUrl(url) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="App">
        <BetaLayout/>
      </div>
    );
  }
}

export default App;
