import React, { forwardRef } from "react";
import classNames from "classnames";

const DatePickerInput = forwardRef(
  ({ value, onChange, onKeyDown, onFocus, onBlur, maxLength, title }, ref) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      maxLength={maxLength}
      title={title}
      className={classNames(
        "date-picker-input",
        title === "YYYY" ? "w-12" : "w-7",
      )}
      ref={ref}
    />
  ),
);

export default DatePickerInput;
