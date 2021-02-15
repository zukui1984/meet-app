import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
   // SCENARIO 1
  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('Number 32 as the default number from the data', () => {});

    let AppWrapper;
    when('User is giving the information on database', () => {
      AppWrapper = mount(<App />);
    });

    then('User will able to find the missing number/error on that data', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe('20');
    });
  });

  // SCENARIO 2
  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let NumberOfEventsWrapper;

    given('User has given access to main page', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    });

    when('User wanted to do some editing on events information', () => {
      NumberOfEventsWrapper.find('.number').simulate('number', { target: { value: 3 } });
    });

    then('User will see a better overview information that displayed on main page', () => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('10');
    });
  });
});