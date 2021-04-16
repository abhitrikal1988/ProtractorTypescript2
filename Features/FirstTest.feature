Feature: Validating the Calculator.

Scenario Outline: Add two numbers.

Given Calculator Application is open
When Insert two numbers "<A>" and "<B>"
Then Validate the Result

Examples:
    | A | B | 
    | 3 | 5 | 
    |7  | 6 |
