import React, { useState, useEffect } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => setText(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!text) return;

    setData([...data, { id: data.length + 1, text, completed: false }]);
    setText("");
    localStorage.setItem("dataso", JSON.stringify(data));
  };

  const handleUpdate = (event) => {
    const newData = data.map((item) =>
      item.id === parseInt(event.target.id)
        ? { ...item, completed: !item.completed }
        : item
    );

    setData(newData);
  };

  const handleRemove = (event) => {
    const newData = data.filter(
      (item) => item.id !== parseInt(event.target.id)
    );

    setData(newData);
  };

  useEffect(() => {
    const dataJSON = JSON.parse(localStorage.getItem("dataso"));
    // if (prevState.data === newState.data) return;
    // return data;
    //setData(dataJSON);
    setData(dataJSON);
  }, [data.completed]);

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          value={text}
          placeholder="Nueva tarea"
        />
        <button>Crear</button>
      </form>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <label>
              <input
                checked={item.completed}
                type="checkbox"
                onChange={handleUpdate}
                id={item.id}
              />
              {item.text}
            </label>
            <button type="button" onClick={handleRemove} id={item.id}>
              <span
                style={{ pointerEvents: "none" }}
                role="img"
                aria-label="remove"
              >
                ❌
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
