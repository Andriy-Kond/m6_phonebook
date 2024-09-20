import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "components/Layout";
import { HomePage } from "pages";

const lazyImport = componentName =>
  lazy(() =>
    import("pages").then(module => ({
      ...module,
      default: module[componentName],
    })),
  );

// const Counter = lazy(() => import("pages/Counter"));
// const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

const CounterPage = lazyImport("CounterPage");
const PhonebookPage = lazyImport("PhonebookPage");
const NotFoundPage = lazyImport("NotFoundPage");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="phonebook" element={<PhonebookPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
