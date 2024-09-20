const { useDispatch, useSelector } = require("react-redux");

const { increment, decrement } = require("reduxTools/counterSlice");
const { counterValue } = require("reduxTools/store");

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(counterValue);
  return (
    <>
      <h2>Counter</h2>
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
      ;
    </>
  );
}

export default Counter;
