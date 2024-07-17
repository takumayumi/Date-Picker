import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const { currentDate, view } = useSelector((state) => state.calendar);

  return (
    <div className="border-2 border-black/50 border-gray bg-white-1">
      <CalendarHeader />
      <div
        className={`grid p-5 pt-2.5 ${view === "date" ? "grid-cols-7 gap-2.5" : "grid-cols-4 gap-8 pb-12"}`}
      >
        {view === "date" && (
          <Dates
            onDateClick={(day) => handleDateClick(day, currentDate, dispatch)}
          />
        )}
        {view === "month" && (
          <Months
            onMonthClick={(month) =>
              handleMonthClick(month, currentDate, dispatch)
            }
          />
        )}
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
