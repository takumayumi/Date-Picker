import { setOpenCalendar } from "../redux/calendarSlice";

/**
 * Validates a given date based on year, month, and day.
 *
 * @param {string} year - The year to validate.
 * @param {string} month - The month to validate (01-12).
 * @param {string} day - The day to validate (01-31).
 * @returns {string} - An error message if invalid, or an empty string if valid.
 */
export const validateDate = (year, month, day) => {
  const monthNum = parseInt(month, 10);
  const dayNum = parseInt(day, 10);
  const yearNum = parseInt(year, 10);

  if (monthNum < 1 || monthNum > 12) {
    return "Month must be between 01 and 12.";
  }

  const maxDaysInMonth = new Date(yearNum, monthNum, 0).getDate();
  if (dayNum < 1 || dayNum > maxDaysInMonth) {
    return `Day must be between 01 and ${maxDaysInMonth}.`;
  }

  return "";
};

/**
 * Handles focus event to open the calendar.
 *
 * @param {object} event - The focus event.
 * @param {function} dispatch - Redux dispatch function.
 */
export const handleFocus = (e, dispatch) => {
  e.preventDefault();
  dispatch(setOpenCalendar(true));
};
