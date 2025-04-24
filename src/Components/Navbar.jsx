import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Timetable", path: "/timetable" },
    { name: "Suggestions", path: "/suggestions" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold tracking-wider text-primary">
          Academic Planner
        </Link>

        {/* Desktop Links */}
        <ul className="hidden space-x-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-black transition duration-300 hover:text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } bg-white px-4 pb-4`}
      >
        <ul className="flex flex-col items-center pt-2 space-y-3 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block w-full py-1 text-black transition hover:text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
