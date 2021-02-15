import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  // SCENARIO 1

  test("An event element is collapsed by default", ({ given, when, then }) => {
  let AppWrapper;
  let EventWrapper;
  given('An event element is collapsed', () => {
    AppWrapper = mount(<App />);
    expect(AppWrapper.find('.EventList')).toHaveLength(1);
  });

  when('The user is testing the app', () => {
  });

  then('The user will have more overview about issues that makes the element collapsed', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      expect(EventWrapper.state('showDetails')).toEqual(false);
  });
});

  // SCENARIO 2

  test("User can expand an event to see its details",  ({ given, when, then }) => {
  let AppWrapper;
  let EventWrapper;
  given('The event details to user', () => {
    AppWrapper = mount(<App />);
  });

  when('User click the details button on the app', () => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.state('showDetails')).toEqual(false);
    EventWrapper.find('.details-btn').simulate('click');
  });

  then('User will see an expanded view on events details', () => {
    expect(EventWrapper.state('showDetails')).toBe(true);
  });
});

  // SCENARIO 3

  test('User can collapse an event to hide its details', ({given, when, then}) => {
  let EventWrapper;
  given('Hidden details to user', () => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  when('User wanted to hide the details information', () => {
    EventWrapper.find('.details-btn').simulate('click');
  });

  then('The user should see better overview of an events as they hide some of unnecessary details', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });
});
});