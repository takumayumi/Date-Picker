import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { setView } from "../redux/calendarSlice";
import { handleYearChange, handleYearsChange } from "../utils/calendar";
import { getYears } from "../utils/years";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { currentDate, view } = useSelector((state) => state.calendar);
  const current = new Date(currentDate);
  const years = getYears(currentDate);

  const handlePrevClick = () => {
    if (view === "day") {
      handleMonthChange(-1, currentDate, dispatch);
    } else if (view === "month") {
      handleYearChange(-1, currentDate, dispatch);
    } else {
      handleYearsChange(-10, currentDate, dispatch);
    }
  };

  const handleNextClick = () => {
    if (view === "day") {
      handleMonthChange(1, currentDate, dispatch);
    } else if (view === "month") {
      handleYearChange(1, currentDate, dispatch);
    } else {
      handleYearsChange(10, currentDate, dispatch);
    }
  };

  const handleMidClick = () => {
    dispatch(setView(view === "date" ? "month" : "year"));
  };

  return (
    <div className="flex items-center justify-between gap-5 p-5">
      <button
        className="btn-calhead"
        onClick={handlePrevClick}
        title="prev button"
        type="button"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={classNames(
          "btn-calhead flex-1",
          view === "year" ? "pointer-events-none" : "",
        )}
        onClick={handleMidClick}
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
      <button className="btn-calhead" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronLeft} className="rotate-180" />
      </button>
    </div>
  );
};

export default CalendarHeader;
