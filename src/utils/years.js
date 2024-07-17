/**
 * Generates an array of 10 years starting from the nearest lower decade.
 *
 * @param {Date} currentDate - The current date used to determine the starting year.
 * @returns {number[]} An array containing 10 consecutive years.
 */
export const getYears = (currentDate) => {
  const startYear = Math.floor(currentDate.getFullYear() / 10) * 10;
  return Array.from({ length: 10 }, (_, i) => startYear + i);
};

/**
 * Checks if a given year is selected.
 *
 * @param {Date} selectedDate - The currently selected date.
 * @param {number} year - The year to check.
 * @returns {boolean} - True if the year is selected, otherwise false.
 */
export const isYearSelected = (selectedDate, year) => {
  return selectedDate.getFullYear() === year;
};

/**
 * Checks if a given year is this year.
 *
 * @param {number} month - The month to check.
 * @returns {boolean} - True if the year is this year, otherwise false.
 */
export const isYearToday = (year) => {
  const today = new Date();

  return today.getFullYear() === year;
};
