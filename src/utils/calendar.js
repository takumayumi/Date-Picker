import {
  setCurrentDate,
  setSelectedDate,
  setView,
} from "../redux/calendarSlice";

/**
 * Handles month change event and updates the current date.
 *
 * @param {number} direction - The direction to change the month (-1 for previous month, 1 for next month).
 * @param {string} currentDate - The current date object.
 * @param {Function} dispatch - Redux dispatch function.
 */
export const handleMonthChange = (direction, currentDate, dispatch) => {
  const newDate = new Date(currentDate);
  newDate.setMonth(newDate.getMonth() + direction);
  dispatch(setCurrentDate(newDate.toISOString()));
};

/**
 * Handles year change event and updates the current date.
 *
 * @param {number} direction - The direction to change the year (-1 for previous year, 1 for next year).
 * @param {string} currentDate - The current date object.
 * @param {Function} dispatch - Redux dispatch function.
 */
export const handleYearChange = (direction, currentDate, dispatch) => {
  const newDate = new Date(currentDate);
  newDate.setFullYear(newDate.getFullYear() + direction);
  dispatch(setCurrentDate(newDate.toISOString()));
};

/**
 * Handles date click event and updates the selected date and view.
 *
 * @param {number} day - The day of the month to select.
 * @param {string} currentDate - The current date object.
 * @param {Function} dispatch - Redux dispatch function.
 */
export const handleDateClick = (day, currentDate, dispatch) => {
  if (day) {
    const current = new Date(currentDate);
    const newDate = new Date(current.getFullYear(), current.getMonth(), day);
    dispatch(setSelectedDate(newDate.toISOString()));
    dispatch(setView("date"));
  }
};

/**
 * Handles month click event and updates the current date and view.
 *
 * @param {number} month - The month to set (0 for January, 11 for December).
 * @param {string} currentDate - The current date object.
 * @param {Function} dispatch - Redux dispatch function.
 */
export const handleMonthClick = (month, currentDate, dispatch) => {
  const current = new Date(currentDate);
  const newDate = new Date(current.getFullYear(), month);
  dispatch(setCurrentDate(newDate.toISOString()));
  dispatch(setView("date"));
};

/**
 * Handles year click event and updates the current date and view.
 *
 * @param {number} year - The year to set.
 * @param {string} currentDate - The current date object.
 * @param {Function} dispatch - Redux dispatch function.
 */
export const handleYearClick = (year, currentDate, dispatch) => {
  const current = new Date(currentDate);
  const newDate = new Date(year, current.getMonth());
  dispatch(setCurrentDate(newDate.toISOString()));
  dispatch(setView("month"));
};
