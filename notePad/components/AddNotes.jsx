
import React from "react";

const AddNotes = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-8">

      <h2 className="text-xl font-semibold text-purple-700 mb-4">
        Create New Note
      </h2>

      <input
        type="text"
        placeholder="Enter note title"
        className="w-full border p-3 rounded-lg mb-3 outline-none"
      />

      <textarea
        placeholder="Write your note here..."
        rows="4"
        className="w-full border p-3 rounded-lg mb-4 outline-none"
      />

      <div className="flex gap-3">
        <button className="bg-purple-600 text-white px-5 py-2 rounded-lg">
          Add Note
        </button>

        <button className="bg-gray-200 px-5 py-2 rounded-lg">
          Cancel
        </button>
      </div>

    </div>
  );
};

export default AddNotes;
