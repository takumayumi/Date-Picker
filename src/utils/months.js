/**
 * Generates an array of month indices from 0 (January) to 11 (December).
 *
 * @returns {number[]} An array containing month indices.
 */
export const months = (() => {
  return Array.from({ length: 12 }, (_, i) => i);
})();

/**
 * Returns the names of the days of the week.
 *
 * @param {number} slice - Number to slice string.
 * @param {number} month - Index of month.
 * @returns {string} - String of month name.
 */
export const getMonth = (month, slice) => {
  const monthName = new Date(0, month).toLocaleString("default", {
    month: "long",
  });

  return slice ? monthName.slice(0, 3) : monthName;
};

/**
 * Checks if a given month is selected.
 *
 * @param {number} month - The month to check.
 * @param {string} selectedDate - The currently selected date.
 * @returns {boolean} - True if the month is selected, otherwise false.
 */
export const isMonthSelected = (month, selectedDate) => {
  const selected = new Date(selectedDate);
  return selected.getMonth() === month;
};

/**
 * Checks if a given month is this month.
 *
 * @param {number} month - The month to check.
 * @returns {boolean} - True if the month is this month, otherwise false.
 */
export const isMonthToday = (month) => {
  const today = new Date();

  return today.getMonth() === month;
};
