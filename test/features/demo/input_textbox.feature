Feature: Demo about web interactions

    My first test and we use this demo Feature.
    @textbox
    Scenario Outline: demo input web interactions
        Given a web page with textbox is open
        When perform textbox interaction

        Examples:
            | TestID | searchText | expectURL             |
            | TC001  | wdio       | https://webdriver.io/ |
