import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
   // SCENARIO 1

   test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given(/^Number (\d+) as the default number from the data$/, (arg0) => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });

    when('User is giving the information on database', () => {
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });

    then('User will able to find the missing number/error on that data', () => {
     expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  // SCENARIO 2
  test('User can change the number of events they want to see', ({ given, when, then }) => {
  let AppWrapper;
  let NumberOfEventsWrapper;
  given('User has given access to main page', () => {
    AppWrapper = mount(<App />);
    expect(AppWrapper.find('EventList')).toHaveLength(1);
  });

  when('User wanted to do some editing on events information', () => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    const eventObject = { target: { value: '10' }};
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
  });

  then('User will see a better overview information that displayed on main page', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('10');
    });
  });
});

