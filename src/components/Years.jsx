import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import classNames from "classnames";
import { getYears, isYearSelected, isYearToday } from "../utils/years";

const Years = ({ onYearClick }) => {
  const { currentDate, selectedDate } = useSelector((state) => state.calendar);
  const selected = new Date(selectedDate);
  const years = getYears(new Date(currentDate));

  return (
    <>
      {years.map((year) => (
        <div
          key={nanoid()}
          className={classNames(
            "date year",
            isYearSelected(selected, year) ? "selected" : "",
            isYearToday(year) ? "today" : "",
          )}
          onClick={() => onYearClick(year)}
        >
          {year}
        </div>
      ))}
    </>
  );
};

export default Years;
