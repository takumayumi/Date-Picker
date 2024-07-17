import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import classNames from "classnames";
import { getWeek, getDays, isDaySelected, isDayToday } from "../utils/dates";

const Dates = ({ onDateClick }) => {
  const { currentDate, selectedDate } = useSelector((state) => state.calendar);
  const week = getWeek(2);
  const days = getDays(currentDate);

  return (
    <>
      {week.map((day) => (
        <div key={nanoid()} className="p-1 text-center font-bold">
          {day}
        </div>
      ))}
      {days.map(({ day, currentMonth }) => (
        <div
          key={nanoid()}
          className={classNames(
            "date day",
            currentMonth ? "" : "disabled",
            isDaySelected(day, currentDate, selectedDate) ? "selected" : "",
            isDayToday(day, currentDate) ? "today" : "",
          )}
          onClick={currentMonth ? () => onDateClick(day) : null}
        >
          {day}
        </div>
      ))}
    </>
  );
};

export default Dates;
