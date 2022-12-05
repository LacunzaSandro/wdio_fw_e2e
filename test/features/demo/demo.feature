Feature: Demo Feature

    My first test and we use this demo Feature.
    @demo
    Scenario Outline: Run first demo feature
        Given Google page opens
        When search with <searchText>
        Then click on the first link result
        Then URL should match <expectURL>
        Examples:
            | TestID | searchText | expectURL             |
            | TC001  | wdio       | https://webdriver.io/ |
