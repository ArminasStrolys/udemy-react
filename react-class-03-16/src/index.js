import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude
        }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return (
        <div style={{ position: "relative", top: "250px", left: "40%" }}>
          Error: {this.state.errMsg}
        </div>
      );
    }
    if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner msg='PLZ accept location request' />;
  }

  render() {
    return <div>
    {this.renderContent()}
    </div>
  }

  
}

ReactDOM.render(<App />, document.querySelector("#root"));
