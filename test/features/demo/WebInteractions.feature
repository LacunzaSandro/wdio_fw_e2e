Feature: Demo about web interactions

    My first test and we use this demo Feature.
    @webinteractions
    Scenario Outline: demo input web interactions
        Given a web page is open
        When perform web interaction

        Examples:
            | TestID | searchText | expectURL             |
            | TC001  | wdio       | https://webdriver.io/ |
