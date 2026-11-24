
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">

      <div className="flex items-center gap-3">

        <FontAwesomeIcon
          icon={faNoteSticky}
          className="text-purple-700 text-3xl"
        />

        <div>
          <h1 className="text-3xl font-bold text-purple-700">
            My Notes
          </h1>

          <p className="text-gray-500 mt-1">
            Organize your thoughts and ideas
          </p>
        </div>

      </div>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sjh7xqggxg-o1-7rPOlX626KSQycnoO8zj3cd9iUbw&s=10"
          alt="Notes logo"
          className="w-40 h-40 object-contain"
        />
      </div>

    </div>
  );
};

export default Header;
