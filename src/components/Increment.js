import React, { useContext, useReducer } from "react";

const initialSate = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "reset":
      return initialSate;
    default:
      return initialSate;
  }
}
export default function Crude() {
  const [state, dispatch] = useReducer(reducer, initialSate);

  return (
    <div className="flex items-center justify-center min-h-screen text-center pt-4 ">
      <div>
        <h2 className="text-center mb-4 font-mono">count: {state.count}</h2>
        <button
          className="border m-1 p-1 hover:bg-gray-500"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="border m-1 p-1 hover:bg-gray-500"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="border m-1 p-1 hover:bg-gray-500"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
