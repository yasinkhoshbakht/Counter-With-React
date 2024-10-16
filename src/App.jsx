import { useReducer } from "react";
import "./App.css";

let initialState = 0;

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    case "incrementBy2":
      return state + 2;
    case "incrementBy5":
      return state + 5;
    case "incrementBy10":
      return state + 10;
    default:
      return state;
  }
};

function App() {
  let [defaultNumber, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{defaultNumber}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "incrementBy2" })}>+2</button>
      <button onClick={() => dispatch({ type: "incrementBy5" })}>+5</button>
      <button onClick={() => dispatch({ type: "incrementBy10" })}>+10</button>
    </div>
  );
}

export default App;
