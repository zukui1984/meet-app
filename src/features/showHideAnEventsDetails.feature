Feature: Show/hide event details

Scenario: An event element is collapsed by default
  Given An event element is collapsed
  When The user is testing the app
  Then The user will have more overview about issues that makes the element collapsed

Scenario: User can expand an event to see its details 
  Given The event details to user
  When User click the details button on the app
  Then User will see an expanded view on events details
  
Scenario: User can collapse an event to hide its details
  Given Hidden details to user
  When User wanted to hide the details information
  Then The user should see better overview of an events as they hide some of unnecessary details
  
  