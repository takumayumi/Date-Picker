import React, { lazy, Suspense } from "react";
import DatePicker from "./components/DatePicker";

const App = () => {
  return (
    <main className="relative flex w-full flex-col items-center gap-10 p-10">
      <DatePicker />
    </main>
  );
};

export default App;
