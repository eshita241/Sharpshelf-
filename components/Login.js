"use client";

import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Retrieve and parse users from environment variables
  const hardcodedUsers = process.env.NEXT_PUBLIC_USERS.split(",").map((user) => {
    const [username, password] = user.split(":");
    return { username, password };
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = hardcodedUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (validUser) {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 bg-gray-200 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
