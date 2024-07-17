import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { setView } from "../redux/calendarSlice";
import { handleMonthChange, handleYearChange } from "../utils/calendar";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { currentDate, view } = useSelector((state) => state.calendar);
  const current = new Date(currentDate);

  const handlePrevClick = () => {
    if (view === "month") {
      handleYearChange(-1, current, dispatch);
    } else {
      handleMonthChange(-1, current, dispatch);
    }
  };

  const handleNextClick = () => {
    if (view === "month") {
      handleYearChange(1, current, dispatch);
    } else {
      handleMonthChange(1, current, dispatch);
    }
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
        className="btn-calhead flex-1"
        onClick={() => dispatch(setView(view === "date" ? "month" : "year"))}
      >
        {view === "month"
          ? current.toLocaleString("default", { year: "numeric" })
          : current.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
      </button>
      <button className="btn-calhead" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronLeft} className="rotate-180" />
      </button>
    </div>
  );
};

export default CalendarHeader;
