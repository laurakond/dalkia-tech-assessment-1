/** Function that calculates the number of days left until holidays*/
function countDaysUntilHolidays(date) {
  var currentDate = new Date();
  var targetDate = new Date(date);

  return Math.round((targetDate - currentDate) / (1000 * 60 * 60 * 24));
}

/** Function that fetches the element from HTML */
function fetchElement(id) {
  return document.getElementById(id);
}

/** Function that allocates element text to the number of days left until
 * holidays */
function setElementText(element, date) {
  element.innerText = countDaysUntilHolidays(date);
}

/** The main function that assigns the number of days left until holidays to
 * the element variable and runs the variable through setElementText */
function updateElementText(id, date) {
  var element = fetchElement(id);
  setElementText(element, date);
}

/** Counts the days left until Christmas */
updateElementText("my-element", "2025-12-25");

/** Counts the days left until New Year's Eve */
updateElementText("my-element2", "2026-01-01");
