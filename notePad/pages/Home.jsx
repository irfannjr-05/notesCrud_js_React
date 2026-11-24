
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import AddNotes from "../components/AddNotes";
import NotesList from "../components/NotesList";

const Home = () => {

  const notes = [
    {
      id: 1,
      title: "Welcome",
      description: "Welcome to your personal notes application!",
      date: "25/11/2026"
    },
    {
      id: 2,
      title: "Project Ideas",
      description: "Complete my React CRUD project.",
      date: "25/11/2026"
    },
    {
      id: 3,
      title: "Study Notes",
      description: "Revise JavaScript and React concepts.",
      date: "25/11/2026"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-5 md:p-10">

      <div className="max-w-6xl mx-auto">

        <Header />

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-xl font-semibold text-gray-100">
            All Notes ({notes.length})
          </h2>

          <button className="bg-purple-600 text-white px-5 py-3 rounded-xl">
            + Add Note
          </button>

        </div>

        <SearchBar />

        <AddNotes />

        <NotesList notes={notes} />

      </div>

    </div>
  );
};

export default Home;
