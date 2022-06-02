Feature: API testing with https://gorest.co.in/

    Scenario: Testcase 1 - Create a new account using POST METHOD and verify the account exist on Database using GET METHOD
        When The user creates a new account using POST METHOD
        Then A new account is created with a unique ID number
        And The user will verify the account exist on Database using GET METHOD

    Scenario: Testcase 2 - Delete the above account using DELETE METHOD and verify it is no longer exist on Database using GET METHOD
        When The user deletes the above account using DELETE METHOD
        Then The account will be deleted from Database
        And The user will verify the account no longer exist on Database using GET METHOD
