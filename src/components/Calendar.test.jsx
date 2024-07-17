import React from "react";
import { render } from "@testing-library/react";
import Calendar from "./Calendar";

test("renders calendar", () => {
  const { getByText } = render(<Calendar />);
  const yearText = new Date().getFullYear().toString();
  expect(getByText(yearText)).toBeInTheDocument();
});
