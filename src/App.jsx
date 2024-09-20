import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "components/Layout";
import { Home } from "pages";

const lazyImport = componentName =>
  lazy(() =>
    import("pages").then(module => ({
      ...module,
      default: module[componentName],
    })),
  );

// const Counter = lazy(() => import("pages/Counter"));
// const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

const Counter = lazyImport("Counter");
const NotFoundPage = lazyImport("NotFoundPage");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="counter/*" element={<Counter />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
