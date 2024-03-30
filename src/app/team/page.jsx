"use client"
import React, { useState } from "react";
import Back from "@com/back/Back";
import TeamCard from "./TeamCard";
import ExTeamCard from "./ExTeamCard";
import FacultyCard from "./facultyCard";
import ExFacultyCard from "./ExFacultyCard"; // Import ExFacultyCard
import "./team.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";

const Team = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("current");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Back title="Team" />
      <div className="inline-block relative">
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
        >
          <span>{selectedOption === "current" ? "Current Team" : selectedOption === "ex" ? "Ex Team" : selectedOption === "faculties" ? "Faculties" : "Ex Faculties"}</span>
          <svg
            className={`ml-2 h-5 w-5 ${isDropdownOpen ? "transform rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button
                onClick={() => handleOptionChange("current")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Current Team
              </button>
              <button
                onClick={() => handleOptionChange("ex")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Ex Team
              </button>
              <button
                onClick={() => handleOptionChange("faculties")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Faculties
              </button>
              <button
                onClick={() => handleOptionChange("exFaculties")} // Set option to "exFaculties"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                Ex Faculties
              </button>
            </div>
          </div>
        )}
      </div>
      <section className="team">
        <div className="pageflex">
          {selectedOption === "current" ? <TeamCard /> : selectedOption === "ex" ? <ExTeamCard /> : selectedOption === "faculties" ? <FacultyCard /> : <ExFacultyCard />}
        </div>
      </section>
    </>
  );
};

export default Team;
