import React, { Component } from "react";
import PrimeLayout from "Components/Prime/Layout";

class App extends Component {
  redirectToExternalUrl(url) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="App">
        <PrimeLayout/>
      </div>
    );
  }
}

export default App;
