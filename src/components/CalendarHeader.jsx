import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { setView } from "../redux/calendarSlice";
import {
  handleYearChange,
  handleYearsChange,
  handleMonthChange,
} from "../utils/calendar";
import { getYears } from "../utils/years";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { currentDate, view } = useSelector((state) => state.calendar);
  const current = new Date(currentDate);
  const years = getYears(currentDate);

  // Handle click for previous navigation
  const handlePrevClick = () => {
    if (view === "date") {
      // Go to the previous month
      handleMonthChange(-1, currentDate, dispatch);
    } else if (view === "month") {
      // Go to the previous year
      handleYearChange(-1, currentDate, dispatch);
    } else {
      // Go to the previous decade
      handleYearsChange(-10, currentDate, dispatch);
    }
  };

  // Handle click for next navigation
  const handleNextClick = () => {
    if (view === "date") {
      // Go to the next month
      handleMonthChange(1, currentDate, dispatch);
    } else if (view === "month") {
      // Go to the next year
      handleYearChange(1, currentDate, dispatch);
    } else {
      // Go to the next decade
      handleYearsChange(10, currentDate, dispatch);
    }
  };

  // Handle click to switch the view (date -> month -> year)
  const handleMidClick = () => {
    dispatch(setView(view === "date" ? "month" : "year"));
  };

  return (
    <div className="flex items-center justify-between gap-5 p-5">
      {/* Previous button */}
      <button
        className="btn-calhead"
        onClick={handlePrevClick}
        title="prev button"
        type="button"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Mid button to show current month/year or decade range */}
      <button
        className={classNames(
          "btn-calhead flex-1",
          view === "year" ? "pointer-events-none" : "",
        )}
        onClick={handleMidClick}
        title="header button"
        type="button"
      >
        {view === "date"
          ? current.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })
          : view === "month"
            ? current.toLocaleString("default", { year: "numeric" })
            : `${years[1]} - ${years[10]}`}
      </button>

      {/* Next button */}
      <button
        className="btn-calhead"
        onClick={handleNextClick}
        title="next button"
        type="button"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="rotate-180" />
      </button>
    </div>
  );
};

export default CalendarHeader;
