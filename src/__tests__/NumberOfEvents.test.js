import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("NumberOfEvents component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render number input", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number")
    .prop("value")).toBe(numberOfEvents);
  });

  test("render state when text input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: "32",
    });
    const eventObject = { target: { value: "10" } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe("10");
  });
});
