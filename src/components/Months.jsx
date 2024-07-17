import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import classNames from "classnames";
import {
  months,
  getMonth,
  isMonthSelected,
  isMonthToday,
} from "../utils/months";

const Months = ({ onMonthClick }) => {
  const { selectedDate } = useSelector((state) => state.calendar);

  return (
    <>
      {months.map((month) => (
        <div
          key={nanoid()}
          className={classNames(
            "date month",
            isMonthSelected(month, selectedDate) ? "selected" : "",
            isMonthToday(month) ? "today" : "",
          )}
          onClick={() => onMonthClick(month)}
        >
          {getMonth(month, 3)}
        </div>
      ))}
    </>
  );
};

export default Months;
