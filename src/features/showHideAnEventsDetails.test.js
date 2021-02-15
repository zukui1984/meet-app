import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  // SCENARIO 1
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("An event element is collapsed", () => {});
   
    let AppWrapper;
    when("The user is testing the app", () => {
      AppWrapper = mount(<App />);
    });

    then(
      "The user will have more overview about issues that makes the element collapsed",
      () => {
        AppWrapper.update();
        expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
      }
    );
  });

  // SCENARIO 2
  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => { given("The event details to user", () => {});

    let EventWrapper;
    when("User click the details button on the app", () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".event").find(".details-btn").simulate("click");
    });

    then("User will see an expanded view on events details", () => {
      expect(EventWrapper.find(".event")
      .find(".event .details-btn")).toHaveLength(1);
    });
  });

  // SCENARIO 3
  test("User can collapse an event to hide its details", ({
    given, when, then}) => {
    let EventWrapper;
    given("Hidden details to user", () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".event").find(".details-btn").simulate("click");
    });

    when("User wanted to hide the details information", () => {
      EventWrapper.find(".event").find(".details-btn").simulate("click");
    });

    then("The user should see better overview of an events as they hide some of unnecessary details", () => {
      expect(
        EventWrapper.find(".event").find(".details-btn")).toHaveLength(1);
    });
  });
});
