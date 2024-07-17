import React, { lazy, Suspense } from "react";

const DatePicker = lazy(() => import("./components/DatePicker"));
const Loading = lazy(() => import("./components/Loading"));

const App = () => {
  return (
    <main className="relative flex w-full flex-col items-center gap-10 p-10">
      <Suspense fallback={<Loading />}>
        <DatePicker />
      </Suspense>
    </main>
  );
};

export default App;
