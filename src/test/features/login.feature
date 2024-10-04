Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User clicks on the login link

  Scenario: Login should be success
    Given User enters the username as 'ortoni"
    And User enters the password as "Pass1234"
    When User clicks on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enters the username as 'koushik"
    And User enters the password as "Passkoushik"
    When User clicks on the login button
    Then Login should fail
