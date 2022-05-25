Feature: API testing with https://gorest.co.in/

    Scenario: Testcase 1 - Create a new account using POST METHOD and verify the account exist on Database using GET METHOD
        When The user create a new account using POST METHOD
        Then A new account is create with a unique ID number
        And The user verify the account exist on Database using GET METHOD

    Scenario: Testcase 2 - Delete the above account using DELETE METHOD and verify it is no longer exist on Database using GET METHOD
        When The user Delete the above account using DELETE METHOD
        Then The account will be delete from Database
        And The user verify the account is no longer exist on Database using GET METHOD