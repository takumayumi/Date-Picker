import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import classNames from "classnames";
import { getYears, isYearSelected, isYearToday } from "../utils/years";

const Years = ({ onYearClick }) => {
  const { currentDate, selectedDate } = useSelector((state) => state.calendar);
  const years = getYears(currentDate);

  return (
    <>
      {/* Render list of years (per decade) */}
      {years.map((year, index) => (
        <div
          key={nanoid()}
          className={classNames(
            "date year",
            isYearSelected(year, selectedDate) ? "selected" : "",
            isYearToday(year) ? "today" : "",
            index === 0 || index === years.length - 1 ? "disabled" : "",
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
