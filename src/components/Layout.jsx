import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h2>Layout</h2>

      <Link to="/">Home</Link>
      <Link to="counter">Counter</Link>
      <Link to="phonebook">Phonebook</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
