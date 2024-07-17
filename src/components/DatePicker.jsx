import React, { lazy, Suspense, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {
  setSelectedDate,
  setOpenCalendar,
  toggleOpenCalendar,
} from "../redux/calendarSlice";
import { validateDate, handleFocus } from "../utils/datepicker";

const Calendar = lazy(() => import("./Calendar"));
const DatePickerInput = lazy(() => import("./DatePickerInput"));
const Loading = lazy(() => import("./Loading"));

const DatePicker = () => {
  const dispatch = useDispatch();
  const { openCalendar, selectedDate } = useSelector((state) => state.calendar);
  const today = new Date();

  // Extract year, month, and day from the selected date
  const year = selectedDate
    ? new Date(selectedDate).getFullYear().toString()
    : today.getFullYear().toString();
  const month = selectedDate
    ? (new Date(selectedDate).getMonth() + 1).toString().padStart(2, "0")
    : (today.getMonth() + 1).toString().padStart(2, "0");
  const day = selectedDate
    ? new Date(selectedDate).getDate().toString().padStart(2, "0")
    : today.getDate().toString().padStart(2, "0");

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

    const newDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
    );

    if (!isNaN(newDate)) {
      dispatch(setSelectedDate(newDate.toISOString()));
    }
  }, [year, month, day, dispatch]);

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
          onChange={() =>
            dispatch(
              setSelectedDate(
                new Date(`${e.target.value}-${month}-${day}`).toISOString(),
              ),
            )
          }
          onFocus={(event) => handleFocus(event, dispatch)}
          maxLength={5}
          title="YYYY"
          ref={inputRefs.current.yearRef}
        />
        <span>-</span>
        <DatePickerInput
          value={month}
          onChange={(e) =>
            dispatch(
              setSelectedDate(
                new Date(`${year}-${e.target.value}-${day}`).toISOString(),
              ),
            )
          }
          onFocus={(event) => handleFocus(event, dispatch)}
          maxLength={3}
          title="MM"
          ref={inputRefs.current.monthRef}
        />
        <span>-</span>
        <DatePickerInput
          value={day}
          onChange={(e) =>
            dispatch(
              setSelectedDate(
                new Date(`${year}-${month}-${e.target.value}`).toISOString(),
              ),
            )
          }
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
