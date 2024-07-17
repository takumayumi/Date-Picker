import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {
  setSelectedDate,
  setOpenCalendar,
  toggleOpenCalendar,
} from "../redux/calendarSlice";
import DatePickerInput from "./DatePickerInput";
import Calendar from "./Calendar";

const DatePicker = () => {
  const dispatch = useDispatch();
  const { openCalendar } = useSelector((state) => state.calendar);
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear().toString());
  const [month, setMonth] = useState(
    (today.getMonth() + 1).toString().padStart(2, "0"),
  );
  const [day, setDay] = useState(today.getDate().toString().padStart(2, "0"));
  const [error, setError] = useState("");
  const datepickerRef = useRef(null);
  const inputRefs = useRef({
    yearRef: React.createRef(),
    monthRef: React.createRef(),
    dayRef: React.createRef(),
  });

  // Validate the date and ensure it is correct
  const validateDate = (year, month, day) => {
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

  // Handle changes to input fields and update state accordingly
  const handleChange = (setter, maxLength) => (e) => {
    const newChar = e.target.value.slice(-1);
    const key = e.nativeEvent.data;

    if (key === null) {
      setter((prev) => "0" + prev.slice(0, -1));
    } else if (/^\d$/.test(newChar)) {
      setter((prev) => prev.slice(1) + newChar);
    }
  };

  // Handle focus on input fields and open the calendar
  const handleFocus = (e) => {
    e.preventDefault();
    dispatch(setOpenCalendar(true));
  };

  // Handle key down events for input fields and close the calendar on Enter or Tab
  const handleKeyDown = (setter) => (e) => {
    if (
      e.nativeEvent.keyCode === 13 ||
      e.nativeEvent.keyCode === 9 ||
      e.key === "Enter" ||
      e.key === "Tab"
    ) {
      dispatch(setOpenCalendar(false));
    }
  };

  // Handle blur event and determine if the calendar should remain open
  const handleBlur = () => {
    const isAnyFocused = Object.values(inputRefs.current).some(
      (ref) => ref.current === document.activeElement,
    );
    dispatch(setOpenCalendar(isAnyFocused));
  };

  // Effect to validate date and update Redux store when date changes
  useEffect(() => {
    const validationError = validateDate(year, month, day);
    setError(validationError);

    const newDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
    );

    if (!isNaN(newDate)) {
      dispatch(setSelectedDate(newDate.toISOString()));
    }
  }, [year, month, day]);

  // Effect to handle clicks outside the datepicker and close the calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datepickerRef.current &&
        !datepickerRef.current.contains(event.target)
      ) {
        dispatch(setOpenCalendar(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <>
      {/* Display validation error */}
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
        {/* Button to toggle calendar visibility */}
        <button
          type="button"
          title="toggle calendar"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleOpenCalendar());
          }}
          className="relative z-10"
        >
          <FontAwesomeIcon icon={faCalendarDays} className="text-blue mr-1" />
        </button>

        {/* Input fields for year, month, and day */}
        <DatePickerInput
          value={year}
          onChange={handleChange(setYear, 5)}
          onKeyDown={handleKeyDown(setYear)}
          onFocus={(e) => handleFocus(e)}
          onBlur={handleBlur}
          maxLength={5}
          title="YYYY"
          ref={inputRefs.current.yearRef}
        />
        <span>-</span>
        <DatePickerInput
          value={month}
          onChange={handleChange(setMonth, 3)}
          onKeyDown={handleKeyDown(setMonth)}
          onFocus={(e) => handleFocus(e)}
          onBlur={handleBlur}
          maxLength={3}
          title="MM"
          ref={inputRefs.current.monthRef}
        />
        <span>-</span>
        <DatePickerInput
          value={day}
          onChange={handleChange(setDay, 3)}
          onKeyDown={handleKeyDown(setDay)}
          onFocus={(e) => handleFocus(e)}
          onBlur={handleBlur}
          maxLength={3}
          title="DD"
          ref={inputRefs.current.dayRef}
        />
        <Calendar />
      </div>
    </>
  );
};

export default DatePicker;
