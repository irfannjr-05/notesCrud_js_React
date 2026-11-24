
import React from "react";

const NotesList = ({ notes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-purple-50 p-5 rounded-2xl shadow-sm"
        >

          <div className="flex justify-between items-start">

            <h3 className="text-lg font-bold text-gray-800">
              {note.title}
            </h3>

            <div className="flex gap-3">
              <i className="fa-solid fa-pen-to-square text-blue-500 text-lg"></i>

              <i className="fa-solid fa-trash text-red-500 text-lg"></i>
            </div>

          </div>

          <p className="text-gray-600 mt-3 mb-5 whitespace-pre-wrap">
            {note.description}
          </p>

          <p className="text-xs text-gray-500">
            Created: {note.date}
          </p>

        </div>
      ))}

    </div>
  );
};

export default NotesList;
