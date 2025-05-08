
import React from "react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <form className="bg-gray-800 p-6 rounded">
        <input type="text" placeholder="Ebook Title" className="w-full mb-4 p-2 bg-gray-700 rounded" />
        <textarea placeholder="Ebook Description" className="w-full mb-4 p-2 bg-gray-700 rounded" />
        <input type="file" className="w-full mb-4" />
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Upload Ebook</button>
      </form>
    </div>
  );
}
