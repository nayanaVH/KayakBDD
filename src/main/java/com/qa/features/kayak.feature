Feature: Kayak Search Page

@smoke
Scenario Outline: Kayak Search Scenario
Given User is on Kayak Search page
When User Verify the PageTitle "Search Flights, Hotels & Rental Cars | KAYAK"
When User Closes Defualt Selection and Enters From Location "<Departure>"
Then User Enters To Location "<Arrival>"
Then User Enter Start Date "<StartDate>"
Then User Enter End Date "<EndDate>"
When User Selects Row in Search Selection
Then Close the Browser

Examples:
|  Departure  |    Arrival        |   StartDate        |  EndDate        |
|   Denver    |  San Francisco    |  04/17/2020        | 04/20/2020      |
|  Miami      |    Atlanta        |  04/18/2020        | 04/21/2020      |

 