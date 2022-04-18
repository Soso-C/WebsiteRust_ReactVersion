import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoMain from "../../assets/ressources/logo_awake/SVG/logo5.svg";
import logoMainResponsive from "../../assets/ressources/logo_awake/SVG/logo2.svg";
import logoMenuBurger from "../../assets/ressources/menu.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {

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
    <header className="mb-8">
      {/* <!-- Nav bar --> */}

      <nav className="fixed top-0 z-20 grid w-full grid-cols-none bg-gray-50 p-4 shadow-md md:relative md:mx-auto md:h-[100px] md:max-w-7xl md:grid-cols-menu md:bg-transparent md:shadow-none">
        {/* <!-- Logo --> */}

        <div className="flex items-center justify-between md:justify-center">
          <Link to="/">
            <img
              src={logoMain}
              alt="logo awakeRust"
              className="w-20 hidden md:block"
            />
            <img
              src={logoMainResponsive}
              alt="logo awakeRust"
              className="w-16 md:hidden"
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
        <ul className="toggle-menu flex hidden flex-col bg-gray-50 px-1 pt-6 md:flex md:w-auto md:flex-row md:items-center md:justify-center md:space-x-5 md:bg-transparent md:pt-0 lg:space-x-8">
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <NavLink
              onClick={closeNav}
              to="/"
              className="text-lg md:text-base lg:text-lg font-medium md:text-white group-hover:text-gray-200"
            >
              <i className="fa-solid fa-house mr-2 md:text-white group-hover:text-gray-200"></i>
              Home
            </NavLink>
          </li>
          <li className="border-t border-gray-200 py-2 text-center md:border-0">
            <span className="text-lg md:text-base lg:text-lg font-medium md:text-white group-hover:text-gray-200">
              <Dropdown />
            </span>
          </li>
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <NavLink
              onClick={closeNav}
              to="/ranks"
              className="text-lg md:text-base lg:text-lg font-medium md:text-white group-hover:text-gray-200"
            >
              <i className="fa-solid fa-star md:text-white group-hover:text-gray-200"></i>{" "}
              Ranks
            </NavLink>
          </li>
          <li className="group border-t border-b border-gray-200 py-2 text-center md:border-0">
            <a
              href="https://store.awakerust.com/"
              target="_blank"
              className="text-lg md:text-base lg:text-lg font-medium md:text-white group-hover:text-gray-200" rel="noreferrer"
            >
              <i className="fa-solid fa-bag-shopping mr-2 md:text-white group-hover:text-gray-200"></i>
              Store
            </a>
          </li>
        </ul>
        {/* <!-- Btn Link Account --> */}
        <div className="toggle-menu mt-6 flex hidden items-center justify-center md:mt-0 md:flex md:justify-end">
          <Link
            to="/"
            className="w-36 rounded-md border bg-white px-4 py-2 text-center font-medium text-indigo-600 shadow-md hover:bg-gray-50"
          >
            Links account
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
