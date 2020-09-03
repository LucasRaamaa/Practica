import React, { useContext } from "react";
import TodosContext from "../context";
import { SET_CURRENT_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} todos` : "Nothing To do!";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="uppercase">{title}</h1>
      <ul className="list-reset select-none text-white p-0">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-orange-500 border black border-dashed border-2 my-2 py-4"
          >
            <span
              className={`flex-1 ml-12 cursor-pointer ${
                todo.complete && "line-through text-grey-800"
              }`}
              onDoubleClick={() =>
                dispatch({ type: TOGGLE_TODO, payload: todo })
              }
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: SET_CURRENT_TODO, payload: todo })
              }
            >
              🖊
            </button>
            <button
              onClick={() => dispatch({ type: REMOVE_TODO, payload: todo })}
            >
              <span role="img" aria-label="remove">
                ❌
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
