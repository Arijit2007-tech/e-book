
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <form className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 bg-gray-700 rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-6 bg-gray-700 rounded" />
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded">Login</button>
      </form>
    </div>
  );
}
