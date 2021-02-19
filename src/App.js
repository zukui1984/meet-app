import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations } from "./api";
import { InfoAlert } from './Alert';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    infoAlert: ''
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        (location === 'all')
          ? events
          : events.filter((event) => event.location === location);
      let counter = eventCount ? eventCount : this.state.numberOfEvents;
      const filteredEvents = locationEvents.slice(0, counter);

      this.setState({
        events: filteredEvents,
        numberOfEvents: counter,
        currentLocation: location,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events,
          locations: extractLocations(events),
        });
      }

      if (!navigator.onLine) {
        this.setState({
          infoAlert: 'This page is currently offline.  Please try again later.'
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
      <InfoAlert text={this.state.infoAlert} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
          currentLocation={this.state.currentLocation}
        />
      
      </div>
    );
  }
}

export default App;
