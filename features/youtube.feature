@youtube @search
Feature: Youtube Search

Scenario: Search box exists on Youtube main page

  Given I open Youtube page
  Then the title is "YouTube"
  And the Youtube search box exists

Scenario: Search and play a video on Youtube

  Given I open Youtube page
  And I search for "abc Cali Killa Clowns defend local"
  Then the title is "abc Cali Killa Clowns defend local - YouTube"
  And the results contain video with title "Cali Killa Clowns defend local"

  Given I click on video with title "Cali Killa Clowns defend local"
  Then the next page should contain ".watch-title-container" with text "Cali Killa Clowns defend local"
  And the title contains "Cali Killa Clowns defend local scares"
