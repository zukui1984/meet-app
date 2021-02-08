import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0]; 
    EventWrapper = shallow(<Event event={event} />);
  });

  test('render the event div', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('render the Event component', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('render the event summary', () => {
    expect(event.summary).toBe('React is Fun');
  })

  test('render the event description', () => {
    expect(event.description).toHaveLength(284);
  })

  test('render the event location', () => {
    expect(event.location).toBe('Berlin, Germany');
  })

  test('render the event time', () => {
    expect(event.start.dateTime).toBe('2020-05-22T14:00:00+02:00');
  })

  test('render the event timezone', () => {
    expect(event.start.timeZone).toBe('Europe/Berlin');
  })

  test('render the details button', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  })

  test('change state when details button is clicked', () => {
    expect(EventWrapper.state('showDetails')).toEqual(false);
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('event details collapse when button is clicked', () => {
    expect(EventWrapper.state('showDetails')).toEqual(true);
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

});