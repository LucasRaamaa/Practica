import React, { useState, useEffect, useContext } from "react";
import TodosContext from "../context";

import { ADD_TODO, UPDATE_TODO } from "../actions";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    } else {
      setTodo("");
    }
    // eslint-disable-next-line
  }, [currentTodo.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTodo.text) {
      dispatch({ type: UPDATE_TODO, payload: todo });
    } else {
      dispatch({ type: ADD_TODO, payload: todo });
    }
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className=" flex justify-center p-5">
      <input
        type="text"
        className="border-black border-solid border-2"
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />
    </form>
  );
}
