import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoMain from "../../assets/ressources/logo_awake/SVG/logo5.svg";
import logoMenuBurger from "../../assets/ressources/menu.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  // Target for switch bg navbar if we're at homepage
  const location = useLocation();

  // Toggle navbar burgermenu for mobile
  const toggleNav = () => {
    const menuEltToggle = document.querySelectorAll(".toggle-menu");
    menuEltToggle.forEach((el) => el.classList.toggle("hidden"));
  };

  // It's for mobile people when an user click on navbar links then close this one
  const closeNav = () => {
    const menuEltToggle = document.querySelectorAll(".toggle-menu");
    if (menuEltToggle.classList !== "hidden") {
      menuEltToggle.forEach((el) => el.classList.add("hidden"));
    }
  };

  return (
    <header
      className={`mb-11 md:mb-4 ${
        location.pathname !== "/"
          ? "bg-transparent"
          : "z-[1] bg-[#232323] opacity-[0.98]"
      }`}
    >
      {/* <!-- Nav bar --> */}

      <nav className="fixed top-0 z-20 grid w-full grid-cols-none bg-[#232323] p-4 shadow-md md:relative md:mx-auto md:h-[100px] md:max-w-7xl md:grid-cols-menu md:bg-transparent md:shadow-none md:p-2">
        {/* <!-- Logo --> */}

        <div className="flex items-center justify-between md:justify-center">
          <Link to="/">
            <img
              src={logoMain}
              alt="logo awakeRust"
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </Link>

          {/* <!-- Burger menu icon --> */}

          <button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 ring-1 ring-black ring-opacity-20 md:hidden"
            onClick={toggleNav}
          >
            <img src={logoMenuBurger} alt="icone burger" className="h-6 w-6" />
          </button>
        </div>

        {/* <!-- List link navbar --> */}
        <ul className="toggle-menu flex hidden flex-col bg-[#232323] px-1 pt-6 md:flex md:w-auto md:flex-row md:items-center md:justify-center md:space-x-5 md:bg-transparent md:pt-0 lg:space-x-8">
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <NavLink
              onClick={closeNav}
              to="/"
              className="text-lg md:text-base lg:text-lg font-medium text-white group-hover:text-sky-500"
            >
              <i className="fa-solid fa-house mr-2 text-white group-hover:text-sky-500"></i>
              Home
            </NavLink>
          </li>
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <span className="text-lg md:text-base lg:text-lg font-medium text-white group-hover:text-sky-500">
              <Dropdown />
            </span>
          </li>
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <NavLink
              onClick={closeNav}
              to="/ranks"
              className="text-lg md:text-base lg:text-lg font-medium text-white group-hover:text-sky-500"
            >
              <i className="fa-solid fa-star text-white group-hover:text-sky-500"></i>{" "}
              Ranks
            </NavLink>
          </li>
          <li className="group border-t border-b border-gray-200 py-2 text-center md:border-0">
            <a
              href="https://store.awakerust.com/"
              target="_blank"
              className="text-lg md:text-base lg:text-lg font-medium text-white group-hover:text-sky-500"
              rel="noreferrer"
            >
              <i className="fa-solid fa-bag-shopping mr-2 text-white group-hover:text-sky-500"></i>
              Store
            </a>
          </li>
        </ul>
        {/* <!-- Btn Link Account --> */}
        <div className="toggle-menu mt-6 flex hidden items-center justify-center md:mt-0 md:flex md:justify-end">
          <Link
            to="/"
            className="w-36 rounded-md border bg-white px-4 py-2 text-center font-medium text-sky-700 shadow-md hover:bg-gray-300"
          >
            Links account
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
