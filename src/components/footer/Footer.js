import React from "react";
import { a } from "react-router-dom";
import logoFooter from "../../assets/ressources/logo_awake/SVG/logo1.svg";

const Footer = () => {
  return (
    <footer className="bgFooter mx-auto mt-auto w-full z-40">
      {/* <!-- Container Footer --> */}
      <div className="mx-auto flex max-w-7xl sm:p-2">
        {/* <!-- Bloc1 Footer --> */}
        {/* my-6 de base */}
        <div className="my-4 w-1/2 p-4">
          <img src={logoFooter} alt="" className="w-16" />
          <p className="pt-4 font-medium">Awake Rust ©2022</p>
        </div>
        {/* <!-- Bloc2 Footer --> */}
        <div className="flex w-1/2 justify-center sm:flex-none sm:self-center">
          <ul className="flex flex-col justify-center sm:flex-row">
            <li className="px-4 py-2 font-medium">
              <a
                href="https://discord.gg/vZDAZpzHTC"
                target={"_blank"}
                className="flex items-center md:text-lg md:hover:text-white"
                rel="noreferrer"
              >
                <i className="fa-brands fa-discord fa-xl mr-2 text-[#5865F2]"></i>
                Discord
              </a>
            </li>
            <li className="px-4 py-2 font-medium">
              <a
                href="https://steamcommunity.com/groups/awakerust"
                target={"_blank"}
                className="flex items-center md:text-lg md:hover:text-white"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter fa-xl mr-2 text-[#1DA1F2]"></i>
                Twitter
              </a>
            </li>
            <li className="px-4 py-2 font-medium">
              <a
                href="https://steamcommunity.com/groups/awakerust"
                target={"_blank"}
                className="flex items-center md:text-lg md:hover:text-white"
                rel="noreferrer"
              >
                <i className="fa-brands fa-steam fa-xl mr-2 text-black"></i>
                Steam
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
