import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleButtonClick = () => {
    if (this.state.showDetails === false) {
      this.setState({showDetails: true });
    } else {
      this.setState({showDetails: false});
    }
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;
    if (!showDetails) {
      return (
        <div className="event">
          <h2 className="summary">{event.summary}</h2>
          <p className="time">{event.start.dateTime}</p>
          <p className="timezone">{event.start.timeZone}</p>
          <p className="location">{event.location}</p>
          <button
            className="details-btn"
            onClick={() => this.handleButtonClick()}
          >
            {this.state.buttonText}
          </button>
        </div>
      );
    } else {
      return (
        <div className="event">
          <h2 className="summary">{event.summary}</h2>
          <p className="time">{event.start.dateTime}</p>
          <p className="timezone">{event.start.timeZone}</p>
          <p className="location">{event.location}</p>
          <a href={event.htmlLink}>
          Click on the button
          </a>
          <p className="description">{event.description}</p>
          <button
            className="details-btn"
            onClick={() => this.handleButtonClick()}
          >
            {this.state.buttonText}
          </button>
        </div>
      );
    }
  }
}
export default Event;
