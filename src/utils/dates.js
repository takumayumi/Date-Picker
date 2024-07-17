/**
 * Returns the names of the days of the week.
 *
 * @param {number} slice - Number to slice string.
 * @returns {Array} - An array of day names.
 */
export const getWeek = (slice) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const abbreviate = (day) => (slice ? day.slice(0, slice) : day);

  return days.map(abbreviate);
};

/**
 * Gets the number of days in the specified month and year.
 *
 * @param {Date} currentDate - The date to determine the month and year.
 * @returns {number} - The total number of days in the month.
 */
export const getTotalDays = (currentDate) => {
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
};

/**
 * Gets the starting day of the month (0 = Sunday, 6 = Saturday).
 *
 * @param {Date} currentDate - The date to determine the month and year.
 * @returns {number} - The starting day of the month.
 */
export const getStartDay = (currentDate) => {
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();
};

/**
 * Gets an array of days for the specified month and year.
 *
 * @param {string} currentDate - The date to determine the month and year.
 * @returns {Array} - An array of days for the month, with nulls for empty slots.
 */
export const getDays = (currentDate) => {
  const current = new Date(currentDate);
  const daysInMonth = getTotalDays(current);
  const startDay = getStartDay(current);

  const days = Array.from({ length: 42 }, (_, i) => {
    const day = i - startDay + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  return days;
};

/**
 * Checks if a given day is selected.
 *
 * @param {number} day - The day to check.
 * @param {string} currentDate - The current date being viewed.
 * @param {string} selectedDate - The currently selected date.
 * @returns {boolean} - True if the day is selected, otherwise false.
 */
export const isDaySelected = (day, currentDate, selectedDate) => {
  const current = new Date(currentDate);
  const selected = new Date(selectedDate);

  return (
    selected.getDate() === day &&
    selected.getMonth() === current.getMonth() &&
    selected.getFullYear() === current.getFullYear()
  );
};

/**
 * Checks if a given day is today.
 *
 * @param {number} day - The day to check.
 * @param {string} currentDate - The current date being viewed.
 * @returns {boolean} - True if the day is today, otherwise false.
 */
export const isDayToday = (day, currentDate) => {
  const current = new Date(currentDate);
  const today = new Date();

  return (
    today.getDate() === day &&
    today.getMonth() === current.getMonth() &&
    today.getFullYear() === current.getFullYear()
  );
};
