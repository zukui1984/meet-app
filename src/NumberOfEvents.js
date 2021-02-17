import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 32) {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    } else {
      return this.setState({
        numberOfEvents: value,
        errorText: "Please choose a number between 1 and 32",
      });
    }
    this.props.updateEvents(this.props.currentLocation, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <input
          type="number"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
