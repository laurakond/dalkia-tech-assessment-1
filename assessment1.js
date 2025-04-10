/** Function that calculates the number of days left until holidays*/
function countDaysUntilHolidays(date) {
  var currentDate = new Date();
  var targetDate = new Date(date);

  return Math.round((targetDate - currentDate) / (1000 * 60 * 60 * 24));
}

/** Function that fetches the element from HTML */
function fetchElement(elementName) {
  return document.getElementById(elementName);
}

/** Function that allocates element text to the number of days left until
 * holidays
 */
function setElementText(elementName, date) {
  elementName.innerText = countDaysUntilHolidays(date);
}

/** The main function that assigns the number of days left until holidays to
 * the element variable and updates the element text with the number of days
 * left until holidays */
function updateElementText(elementName, date) {
  var element = fetchElement(elementName);
  setElementText(element, date);
}

/** Counts the days left until Christmas */
updateElementText("my-element", "2025-12-25");

/** Counts the days left until New Year's Eve */
updateElementText("my-element2", "2026-01-01");
