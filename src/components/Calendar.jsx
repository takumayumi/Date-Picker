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
        "absolute bottom-0 left-1/2 w-max -translate-x-1/2 translate-y-[calc(100%_+_20px)] border-2 border-black/50 border-gray bg-white-1 text-sm transition-opacity duration-200 ease-in sm:text-base",
        openCalendar
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <span className="block-translate-x-1/2 absolute -top-1.5 left-1/2 rotate-45 border-8 border-solid border-white-1" />
      <CalendarHeader />
      <div
        className={`grid p-2.5 pt-1.5 sm:p-5 sm:pt-2.5 ${
          view === "date"
            ? "grid-cols-7 gap-1.5 sm:gap-2.5"
            : "grid-cols-4 gap-4 pb-6 sm:gap-8 sm:pb-12"
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
