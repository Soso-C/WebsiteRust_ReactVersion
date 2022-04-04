import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/ressources/logo_awake/SVG/logo1.svg";

const Footer = () => {
  return (
    <footer className="bgFooter mx-auto mt-auto w-full">
      {/* <!-- Container Footer --> */}
      <div className="mx-auto flex max-w-7xl sm:p-2">
        {/* <!-- Bloc1 Footer --> */}
        <div className="my-6 w-1/2 p-4">
          <img src={logoFooter} alt="" className="w-16" />
          <p className="pt-4 font-medium">Awake Rust ©2022</p>
        </div>
        {/* <!-- Bloc2 Footer --> */}
        <div className="flex w-1/2 justify-center sm:flex-none sm:self-center">
          <ul className="flex flex-col justify-center sm:flex-row">
            <li className="px-4 py-2 font-medium">
              <Link
                to="/"
                className="flex items-center md:text-lg md:hover:text-white"
              >
                <i className="fa-brands fa-discord fa-xl mr-2 text-[#5865F2]"></i>
                Discord
              </Link>
            </li>
            <li className="px-4 py-2 font-medium">
              <Link
                to="/"
                className="flex items-center md:text-lg md:hover:text-white"
              >
                <i className="fa-brands fa-twitter fa-xl mr-2 text-[#1DA1F2]"></i>
                Twitter
              </Link>
            </li>
            <li className="px-4 py-2 font-medium">
              <Link
                to="/"
                className="flex items-center md:text-lg md:hover:text-white"
                target="_blank"
              >
                <i className="fa-brands fa-steam fa-xl mr-2 text-black"></i>
                Steam
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
