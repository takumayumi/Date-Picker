import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    currentDate: new Date().toISOString(), // Current date in ISO format
    view: "date", // Current view of the calendar (date, month, or year)
    selectedDate: new Date().toISOString(), // Initially selected date
    openCalendar: false, // Flag to determine if the calendar is open
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
    setOpenCalendar(state, action) {
      state.openCalendar = action.payload;
    },
    toggleOpenCalendar(state) {
      state.openCalendar = !state.openCalendar;
    },
  },
});

// Export actions for use in components
export const {
  setCurrentDate,
  setView,
  setSelectedDate,
  setOpenCalendar,
  toggleOpenCalendar,
} = calendarSlice.actions;

// Export the reducer to be used in the store
export default calendarSlice.reducer;
