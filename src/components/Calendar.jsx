import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import {
  handleDateClick,
  handleMonthClick,
  handleYearClick,
} from "../utils/calendar";
import CalendarHeader from "./CalendarHeader";
import Dates from "./Dates";
import Months from "./Months";
import Years from "./Years";

const Calendar = () => {
  const dispatch = useDispatch();
  const { currentDate, view, openCalendar } = useSelector(
    (state) => state.calendar,
  );

  return (
    <div
      className={classNames(
        "absolute bottom-0 left-1/2 w-max -translate-x-1/2 translate-y-[calc(100%_+_20px)] border-2 border-black/50 border-gray bg-white-1 transition-opacity duration-200 ease-in",
        openCalendar
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <CalendarHeader />
      <div
        className={`grid p-5 pt-2.5 ${
          view === "date" ? "grid-cols-7 gap-2.5" : "grid-cols-4 gap-8 pb-12"
        }`}
      >
        {/* Day view */}
        {view === "date" && (
          <Dates
            onDateClick={(day) => handleDateClick(day, currentDate, dispatch)}
          />
        )}

        {/* Month view */}
        {view === "month" && (
          <Months
            onMonthClick={(month) =>
              handleMonthClick(month, currentDate, dispatch)
            }
          />
        )}

        {/* Year view */}
        {view === "year" && (
          <Years
            onYearClick={(year) => handleYearClick(year, currentDate, dispatch)}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
