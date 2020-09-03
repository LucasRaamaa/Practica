import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username,
      password,
    };
    setUser(userData);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen text-center pt-4 bg-orange-200">
      <h2 className="mb-4 text-orange-800 font-serif  underline text-2xl">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-600 px-2 py-1 rounded"
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <input
          className="border border-gray-600 px-2 py-1 rounded"
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />

        <button
          className="mt-3 py-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Sing In
        </button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
