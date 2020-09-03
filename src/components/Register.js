import React, { useState } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };

  return (
    // tailwind          -->    css

    // flex              -->    display: flex
    // flex-col          -->    flex-direction: column
    // items-center      -->    align-items: center
    // justify-center    -->    justify-content: center
    // min-h-screen      -->    min-height: 100vh
    // text-center       -->    text-align: center
    // pt-4              -->    padding-top: 4px

    // tailwind: flexbox, padding, margin.

    <div className="flex items-center justify-center flex-col min-h-screen text-center pt-4 bg-orange-200">
      <h2 className="mb-4 text-orange-800 font-serif underline">Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="border border-gray-600 px-2 py-1 rounded"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
        </div>
        <div>
          <input
            className="border border-gray-600 px-2 py-1 rounded"
            type="email"
            placeholder="Email Adress"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div>
          <input
            className="border border-gray-600 px-2 py-1 rounded"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <button
          className="mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
