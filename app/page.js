"use client"; // Required for using client-side hooks

import React, { useState } from "react";
import Link from "next/link";
import Login from "../components/Login"; // Update the path if needed

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleLogout}
        className="absolute top-5 right-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
      <h1 className="text-3xl font-bold mb-8">Welcome to the Dashboard!</h1>
      <div className="flex gap-10">
        <Link href="/dashboard/productions/redcow">
          <div className="h-40 w-60 flex justify-center items-center border-4 p-10 border-zinc-950 rounded-3xl text-xl font-semibold hover:bg-slate-600 hover:bg-opacity-20">
            RED COW
          </div>
        </Link>
        <Link href="/dashboard/inventory/parts">
          <div className="h-40 w-60 flex justify-center items-center border-4 p-10 border-zinc-950 rounded-3xl text-xl font-semibold hover:bg-slate-600 hover:bg-opacity-20">
            MODERN
          </div>
        </Link>
      </div>
    </div>
  );
}
