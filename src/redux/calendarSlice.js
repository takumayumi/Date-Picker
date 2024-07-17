import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    currentDate: new Date().toISOString(),
    view: "date",
    selectedDate: new Date().toISOString(),
  },
  reducers: {
    setCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
    setView(state, action) {
      state.view = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export const { setCurrentDate, setView, setSelectedDate } =
  calendarSlice.actions;
export default calendarSlice.reducer;
