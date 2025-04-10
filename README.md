# dalkia-tech-assessment-1

Step 1: Made the initial commit

Step 2: Refactored code following clean code concepts (DRY and one task per function):

1. Broke down `countDaysUntilHolidays`function to the following smaller functions:
   - `countDaysUntilHolidays` - calculated the difference between the target and current dates
   - `fetchElement` - fetches the element from HTML
   - `setElementText` - allocates the element's inner text to be the result of the `countDaysUntilHolidays` function
   - `updateElementText` - the main function that assigns `fetchElement` to a variable so it can be used for calling `setElementText`

Step 3: called `updateElementText` function with two chosen arguments:

- one to count the days left until Christmas
- one to count the days left until New Years eve
