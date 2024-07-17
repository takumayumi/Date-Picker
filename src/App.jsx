import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Calendar from "./components/Calendar";
import DatePicker from "./components/DatePicker";

const App = () => {
  return (
    <Provider store={store}>
      <main className="flex w-full flex-col items-center gap-10 p-10">
        <DatePicker />
        <Calendar />
      </main>
    </Provider>
  );
};

export default App;
