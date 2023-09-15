import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
function App() {
  const count = useSelector((state) => state.value);
  console.log(count);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <h2>Number {count}</h2>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
