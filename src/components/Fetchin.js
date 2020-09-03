import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Fetchin() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("react hooks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setResults(response.data.hits);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    getResults();
  };

  const handleClearSearch = (event) => {
    setQuery("");
    searchInputRef.current.focus();
  };

  return (
    <div className="container mx-auto p-4 m-2 bg-purple-300 shadow-lg rounded">
      <h1 className="text-gray-800 font-thin"> Hooks News</h1>
      <img src="./logo192.png" alt="React Logo" className="float-right h-12" />
      <form onSubmit={handleSearch} className="mb-2">
        <input
          type="test"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
        <button type="submit" className="bg-orange-700 rounded m-1 p-1">
          Buscar
        </button>
        <button
          type="button"
          onClick={handleClearSearch}
          className="bg-teal-700 text-white p-1 rounded"
        >
          Borrar
        </button>
      </form>

      {loading ? (
        <div className="font-bold text-orange-900">Cargando Resultados...</div>
      ) : (
        <ul className="list-reset leading-normal">
          {results.map((results) => (
            <li key={results.objectID}>
              <a
                href={results.url}
                className="text-indigo-900 hover:text-indigo-900"
              >
                {results.title}
              </a>
            </li>
          ))}
        </ul>
      )}

      {error && <div className="text-red font-bold">{error.message}</div>}
    </div>
  );
}
