
import React from "react";
import { Link } from "react-router-dom";

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Available Ebooks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((book) => (
          <div key={book} className="bg-gray-800 p-4 rounded">
            <img src="/ebook-placeholder.png" alt="Ebook Cover" className="mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Ebook Title {book}</h3>
            <p className="text-gray-400 mb-2">Short description about the ebook content.</p>
            <Link to={`/product/${book}`} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded inline-block">Buy for $5</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
