Feature: Specify number of events 

Scenario: When user hasn’t specified a number, 32 is the default number
  Given Number 32 as the default number from the data
  When User is giving the information on database
  Then User will able to find the missing number/error on that data

Scenario: User can change the number of events they want to see
  Given User has given access to main page
  When User wanted to do some editing on events information 
  Then User will see a better overview information that displayed on main page
