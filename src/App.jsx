import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { decrement, increment } from "reduxTools/slice.";
import { counterValue } from "reduxTools/store";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(counterValue);
  return (
    <>
      {/* <Routes>
        <Route></Route>
        <Route></Route>
      </Routes> */}
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(5))}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(5))}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
