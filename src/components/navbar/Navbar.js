import React, {useState} from "react";
import { Link } from "react-router-dom";
import logoMain from "../../assets/ressources/logo_awake/SVG/logo5.svg";
import logoMenuBurger from "../../assets/ressources/menu.svg";

const Navbar = () => {

  const [toggle,setToggle] = useState(false)


  return (
    <header className="mb-8">
      {/* <!-- Nav bar --> */}

      <nav className="fixed top-0 z-20 grid w-full grid-cols-none bg-gray-50 p-4 shadow-md md:relative md:mx-auto md:h-[100px] md:max-w-7xl md:grid-cols-menu md:bg-transparent md:shadow-none">
        {/* <!-- Logo --> */}

        <div className="flex items-center justify-between md:justify-center">
          <Link to="/">
            <img src={logoMain} alt="logo awakeRust" className="w-16" />
          </Link>

          {/* <!-- Burger menu icon --> */}

          <button className="icone-toggle inline-flex items-center justify-center rounded-md bg-white p-2 ring-1 ring-black ring-opacity-20 md:hidden"
          onClick={setToggle}
          >
            <img src={logoMenuBurger} alt="icone burger" className="h-6 w-6" />
          </button>
        </div>

        {/* <!-- List link navbar --> */}
        <ul className="toggle-menu flex hidden flex-col bg-gray-50 px-1 pt-6 md:flex md:w-auto md:flex-row md:items-center md:justify-center md:space-x-6 md:bg-transparent md:pt-0 lg:space-x-10">
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <a href="#accueil" className="text-lg font-medium text-white">
              <i className="fa-solid fa-house mr-2 text-white"></i>Home
            </a>
          </li>
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <a href="#servers" className="text-lg font-medium text-white">
              <i className="fa-solid fa-server mr-2 text-white"></i>Servers
            </a>
          </li>
          <li className="group border-t border-gray-200 py-2 text-center md:border-0">
            <a href="#vip" className="text-lg font-medium text-white">
              <i className="fa-solid fa-crown mr-2 text-white"></i>Vip
            </a>
          </li>
          <li className="border-t border-gray-200 py-2 text-center md:border-0">
            <a href="#leaderboard" className="text-lg font-medium text-white">
              <i className="fa-solid fa-star text-white"></i> Ranks
            </a>
          </li>
          <li className="group border-t border-b border-gray-200 py-2 text-center md:border-0">
            <a href="#store" className="text-lg font-medium text-white">
              <i className="fa-solid fa-bag-shopping mr-2 text-white"></i>Store
            </a>
          </li>
        </ul>
        {/* <!-- Btn Link Account --> */}
        <div className="toggle-menu mt-6 flex hidden items-center justify-center md:mt-0 md:flex md:justify-end">
          <a
            href="#"
            className="w-36 rounded-md border bg-white px-4 py-2 text-center font-medium text-indigo-600 shadow-md hover:bg-gray-50"
          >
            Links account
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
