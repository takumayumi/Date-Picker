/**
 * Generates an array of 10 years starting from the nearest lower decade.
 *
 * @param {string} currentDate - The current date used to determine the starting year.
 * @returns {number[]} An array containing 10 consecutive years.
 */
export const getYears = (currentDate) => {
  const current = new Date(currentDate);
  const startYear = Math.floor(current.getFullYear() / 10) * 10 - 1;
  return Array.from({ length: 12 }, (_, i) => startYear + i);
};

/**
 * Checks if a given year is selected.
 *
 * @param {number} year - The year to check.
 * @param {string} selectedDate - The currently selected date.
 * @returns {boolean} - True if the year is selected, otherwise false.
 */
export const isYearSelected = (year, selectedDate) => {
  const selected = new Date(selectedDate);
  return selected.getFullYear() === year;
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
