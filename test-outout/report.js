$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("kayak.feature");
formatter.feature({
  "line": 1,
  "name": "Kayak Search Page",
  "description": "",
  "id": "kayak-search-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Kayak Search Scenario",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Kayak Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Verify the PageTitle \"Search Flights, Hotels \u0026 Rental Cars | KAYAK\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Closes Defualt Selection and Enters From Location \"\u003cDeparture\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters To Location \"\u003cArrival\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Enter Start Date \"\u003cStartDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enter End Date \"\u003cEndDate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Selects Row in Search Selection",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario;",
  "rows": [
    {
      "cells": [
        "Departure",
        "Arrival",
        "StartDate",
        "EndDate"
      ],
      "line": 15,
      "id": "kayak-search-page;kayak-search-scenario;;1"
    },
    {
      "cells": [
        "Denver",
        "San Francisco",
        "04/17/2020",
        "04/20/2020"
      ],
      "line": 16,
      "id": "kayak-search-page;kayak-search-scenario;;2"
    },
    {
      "cells": [
        "Miami",
        "Atlanta",
        "04/18/2020",
        "04/21/2020"
      ],
      "line": 17,
      "id": "kayak-search-page;kayak-search-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Kayak Search Scenario",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Kayak Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Verify the PageTitle \"Search Flights, Hotels \u0026 Rental Cars | KAYAK\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Closes Defualt Selection and Enters From Location \"Denver\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters To Location \"San Francisco\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Enter Start Date \"04/17/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enter End Date \"04/20/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Selects Row in Search Selection",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefination.user_is_on_Kayak_Search_page()"
});
formatter.result({
  "duration": 6562825421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Flights, Hotels \u0026 Rental Cars | KAYAK",
      "offset": 27
    }
  ],
  "location": "HomePageStepDefination.user_Verify_the_PageTitle(String)"
});
formatter.result({
  "duration": 556480936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Denver",
      "offset": 56
    }
  ],
  "location": "HomePageStepDefination.user_Closes_Defualt_Selection_and_Enters_From_Location(String)"
});
formatter.result({
  "duration": 3407778210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "San Francisco",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefination.user_Enters_To_Location(String)"
});
formatter.result({
  "duration": 2421536506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/17/2020",
      "offset": 23
    }
  ],
  "location": "HomePageStepDefination.user_Enter_Start_Date(String)"
});
formatter.result({
  "duration": 1341889836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/20/2020",
      "offset": 21
    }
  ],
  "location": "HomePageStepDefination.user_Enter_End_Date(String)"
});
formatter.result({
  "duration": 4960390872,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.User_Selects_Row_in_Search_Selection()"
});
formatter.result({
  "duration": 1425243601,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.close_the_Browser()"
});
formatter.result({
  "duration": 86541214,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Kayak Search Scenario",
  "description": "",
  "id": "kayak-search-page;kayak-search-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Kayak Search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Verify the PageTitle \"Search Flights, Hotels \u0026 Rental Cars | KAYAK\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Closes Defualt Selection and Enters From Location \"Miami\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters To Location \"Atlanta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Enter Start Date \"04/18/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enter End Date \"04/21/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Selects Row in Search Selection",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefination.user_is_on_Kayak_Search_page()"
});
formatter.result({
  "duration": 7082265054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Flights, Hotels \u0026 Rental Cars | KAYAK",
      "offset": 27
    }
  ],
  "location": "HomePageStepDefination.user_Verify_the_PageTitle(String)"
});
formatter.result({
  "duration": 105799331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miami",
      "offset": 56
    }
  ],
  "location": "HomePageStepDefination.user_Closes_Defualt_Selection_and_Enters_From_Location(String)"
});
formatter.result({
  "duration": 3449865450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Atlanta",
      "offset": 25
    }
  ],
  "location": "HomePageStepDefination.user_Enters_To_Location(String)"
});
formatter.result({
  "duration": 2059746882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/18/2020",
      "offset": 23
    }
  ],
  "location": "HomePageStepDefination.user_Enter_Start_Date(String)"
});
formatter.result({
  "duration": 1377055543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/21/2020",
      "offset": 21
    }
  ],
  "location": "HomePageStepDefination.user_Enter_End_Date(String)"
});
formatter.result({
  "duration": 4373886341,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.User_Selects_Row_in_Search_Selection()"
});
formatter.result({
  "duration": 1808899842,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefination.close_the_Browser()"
});
formatter.result({
  "duration": 107588636,
  "status": "passed"
});
});