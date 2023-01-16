Feature: Demo about web interactions

    My first test and we use this demo Feature.
    @dropdown
    Scenario: demo input web interactions
        Given a web page with dropdown is open
        When perform dropdown interaction

        Examples:
            | TestID | searchText | expectURL             |
            | TC001  | wdio       | https://webdriver.io/ |
