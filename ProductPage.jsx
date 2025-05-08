
import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <img src="/ebook-placeholder.png" alt="Ebook Cover" className="rounded mb-4" />
        <h2 className="text-3xl font-bold">Ebook Title {id}</h2>
        <p className="text-gray-400 mt-2 mb-4">Full description and details of the ebook with ID {id}.</p>
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded">Buy for $5</button>
      </div>
    </div>
  );
}
