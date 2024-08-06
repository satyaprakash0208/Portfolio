import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Satya Prakash Singh</h1>
        <nav>
          <span className="text-gray-600 hover:text-gray-800 mx-2">
            <NavLink to="/about">About</NavLink>
          </span>
          <span className="text-gray-600 hover:text-gray-800 mx-2">
            <NavLink to="/skills">Skills</NavLink>
          </span>
          <span className="text-gray-600 hover:text-gray-800 mx-2">
            <NavLink to="/projects">Projects</NavLink>
          </span>
          <span className="text-gray-600 hover:text-gray-800 mx-2">
            <NavLink to="/contact">Contact</NavLink>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
