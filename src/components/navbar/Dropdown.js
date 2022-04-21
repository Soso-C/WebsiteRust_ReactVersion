import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleBtn = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const dropRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickOutside = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setToggleDropdown(false);
    }
  };

  return (
    <>
      {/* DropDown Btn */}
      
      <div className="relative inline-block text-center" ref={dropRef}>
        <div className="group">
          <button
            type="button"
            className="flex items-center font-medium text-md md:text-white md:text-base lg:text-lg group-hover:text-sky-500"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleBtn}
          >
            <i className="fa-solid fa-crown mr-2 md:text-white group-hover:text-sky-500"></i>
            Vip
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        {/* if toggle true Display Menu */}

        {toggleDropdown && (
          <div
            className="origin-top-right absolute left-1/2 -translate-x-1/2 mt-1 w-72 md:w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-labelledby="menu-button"
          >
            <div className="rounded-md" role="none">
              <Link
                to="/vip/x2"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 rounded-t-md"
                onClick={toggleBtn}
              >
                x2 EU
              </Link>
              <Link
                to="/vip/x10"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 rounded-b-md"
                onClick={toggleBtn}
              >
                x10 EU
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
