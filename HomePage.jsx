
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Digital Library for Smart Readers</h1>
        <p className="text-lg text-gray-400">All ebooks for just $5 – Learn, grow, and succeed</p>
        <Link to="/store" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Browse Ebooks</Link>
      </header>
    </div>
  );
}
