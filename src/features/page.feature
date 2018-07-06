Feature: using feature files in jest
  As a developer
  I want to write tests in cucumber
  So that the business can understand my tests

  # Scenario: I want see the Google Page
  #   Given user navigates to "http://www.google.com.br"
  #   When fills "Search Input" by replacing text with "led zeppelin wikipedia"
  #   And clicks on "Site Link"
  #   And waits for 1 seconds
  #   And take screenshot

  Scenario: I want see the Cadastro Easynvest Page
    Given user navigates to "https://cadastro.easynvest.com.br"
    And ca
    And waits for 1 seconds
    Then take screenshot
    And no wrror in console