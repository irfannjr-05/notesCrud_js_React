
import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search notes by title..."
      className="w-full p-3 bg-white text-black placeholder-gray-500 border border-gray-200 rounded-xl outline-none mb-6"
    />
  );
};

export default SearchBar;
