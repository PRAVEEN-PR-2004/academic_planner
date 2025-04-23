import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">Academic Planner</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Dashboard
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Timetable
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Suggestions
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white p-4 space-y-4`}
      >
        <li className="hover:text-yellow-400 cursor-pointer transition">
          Dashboard
        </li>
        <li className="hover:text-yellow-400 cursor-pointer transition">
          Timetable
        </li>
        <li className="hover:text-yellow-400 cursor-pointer transition">
          Suggestions
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
