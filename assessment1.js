/** Function that calculates the number of days left until holidays*/
function countDaysUntilHolidays(date) {
  var currentDate = new Date();
  var targetDate = new Date(date);

  return Math.round((q - p) / (1000 * 60 * 60 * 24));
}

// var variable2 = document.getElementById(elementName);
// variable2.innerText = variable;

/** Counts the days left until Christmas */
countDaysUntilHolidays("2025-12-25", "my-element");

/** Counts the days left until New Year's Eve */
countDaysUntilHolidays("2026-01-01", "my-element2");
