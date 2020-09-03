import React, { useState } from "react";
import "../style.css";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function multiplo() {
    setCount((prevCount) => prevCount * 2);
  }
  function divisor() {
    setCount(count / 2);
  }

  return (
    <div className="myDiv">
      <div className="tittle"> La Wea Cosmica </div>
      <h1 style={{ fontSize: "3em" }}>{count}</h1>
      <button className="boton" onClick={increment}>
        Incremente
      </button>
      <br />
      <button className="boton" onClick={decrement}>
        Decremente
      </button>
      <br />
      <button className="boton" onClick={multiplo}>
        * 2
      </button>
      <br />
      <button className="boton" onClick={divisor}>
        / 2
      </button>
    </div>
  );
}
