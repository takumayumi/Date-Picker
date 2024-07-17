import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {
  setSelectedDate,
  setOpenCalendar,
  toggleOpenCalendar,
} from "../redux/calendarSlice";
import {
  validateDate,
  handleChange,
  handleKeyDown,
  handleFocus,
} from "../utils/datepicker";

const Calendar = lazy(() => import("./Calendar"));
const DatePickerInput = lazy(() => import("./DatePickerInput"));
const Loading = lazy(() => import("./Loading"));

const DatePicker = () => {
  const dispatch = useDispatch();
  const { openCalendar, selectedDate } = useSelector((state) => state.calendar);
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear().toString());
  const [month, setMonth] = useState(
    (today.getMonth() + 1).toString().padStart(2, "0"),
  );
  const [day, setDay] = useState(today.getDate().toString().padStart(2, "0"));

  const [error, setError] = React.useState("");
  const datepickerRef = useRef(null);
  const inputRefs = useRef({
    yearRef: React.createRef(),
    monthRef: React.createRef(),
    dayRef: React.createRef(),
  });

  // Effect to validate date and update Redux store when date changes
  useEffect(() => {
    const validationError = validateDate(year, month, day);
    setError(validationError);

    // Update selected date only if all fields are filled
    const newDate = new Date(`${year}-${month}-${day}`);
    if (!!!validationError && !isNaN(newDate)) {
      dispatch(setSelectedDate(newDate.toISOString()));
    }
  }, [year, month, day, dispatch]);

  // Update year, month, and day based on selectedDate or current date
  useEffect(() => {
    const selected = selectedDate ? new Date(selectedDate) : new Date();

    setYear(selected.getFullYear().toString());
    setMonth((selected.getMonth() + 1).toString().padStart(2, "0"));
    setDay(selected.getDate().toString().padStart(2, "0"));
  }, [selectedDate]);

  return (
    <Suspense fallback={<Loading />}>
      {/* Error Message */}
      <div className="text-red-1">&nbsp;{error}&nbsp;</div>

      {/* Date Picker */}
      <div
        className={classNames(
          "relative inline-flex w-min items-center gap-2 rounded-sm border-2 border-solid bg-white p-2 pl-3 transition-colors duration-200 ease-in",
          !!error
            ? "border-red"
            : openCalendar
              ? "border-blue"
              : "border-transparent",
        )}
        onClick={() => {
          if (!openCalendar) {
            dispatch(setOpenCalendar(true));
          }
        }}
        ref={datepickerRef}
      >
        <button
          type="button"
          title="toggle calendar"
          onClick={(event) => {
            event.stopPropagation();
            dispatch(toggleOpenCalendar());
          }}
          className="relative z-10"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="mr-1 text-blue" />
        </button>

        {/* Date Picker Input Fields */}
        <DatePickerInput
          value={year}
          onChange={handleChange(setYear, 5)}
          onKeyDown={handleKeyDown(dispatch)}
          onFocus={(event) => handleFocus(event, dispatch)}
          maxLength={5}
          title="YYYY"
          ref={inputRefs.current.yearRef}
        />
        <span>-</span>
        <DatePickerInput
          value={month}
          onChange={handleChange(setMonth, 3)}
          onKeyDown={handleKeyDown(dispatch)}
          onFocus={(event) => handleFocus(event, dispatch)}
          maxLength={3}
          title="MM"
          ref={inputRefs.current.monthRef}
        />
        <span>-</span>
        <DatePickerInput
          value={day}
          onChange={handleChange(setDay, 3)}
          onKeyDown={handleKeyDown(dispatch)}
          onFocus={(event) => handleFocus(event, dispatch)}
          maxLength={3}
          title="DD"
          ref={inputRefs.current.dayRef}
        />

        {/* Calendar */}
        <Calendar />
      </div>
    </Suspense>
  );
};

export default DatePicker;
