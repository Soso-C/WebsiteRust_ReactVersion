import React from "react";
import { v4 as uuidv4 } from "uuid";

const ModalVip = ({ vip, toggle, paramid }) => {
  // Si dailykit existe alors : (tous les vip ont un dailykit mais les kits pvp, pvp+, etc en ont pas dans l'object)
  if (vip.dailyKit) {
    return (
      <>
        <div id="overlay" onClick={toggle}></div>
        <div
          id="modal"
          className="bg-white dark:bg-gray-800 h-[75vh] overflow-auto w-[90%] md:h-auto lg:w-[750px] xl:w-[850px]"
        >
          <div className="bg-white dark:bg-gray-800 pb-2 px-2 sm:px-4 md:px-6 lg:flex-shrink-1 lg:px-8 lg: pt-2">
            <h3 className="text-2xl font-hurricane uppercase leading-8 font-extrabold text-gray-900 text-center sm:text-3xl sm:leading-9 gradH1 md:text-4xl lg:pb-4">
              {`${vip.title} KIT ${paramid.id.toUpperCase()}`}
            </h3>
            {/* Map all globalKit in <p> */}
            {vip.globalKit.map((para) => (
              <p
                key={uuidv4()}
                className="font-bold text-center text-gray-500 dark:text-gray-100"
              >
                {para}
              </p>
            ))}
            <p className="font-bold text-center text-red-500 dark:text-red-500">
              {vip.phrase} access of this kit
            </p>
            <div className="mt-6">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  Vip
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              {/* List Vip Ressources */}
              <ul className="mt-6 sm:grid sm:grid-cols-2 lg:col-gap-8 lg:row-gap-5 font-medium text-center">
                {/* Map all Vip Ressources Object return nbr ressource + name ressource and first letter is uppercase  */}
                {Object.entries(vip.ressources).map(([kname, el]) => (
                  <li key={uuidv4()} className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0"></div>
                    <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                      ✔️{" "}
                      {`${el} ${kname.charAt(0).toUpperCase()}${kname.slice(
                        1
                      )}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* 2nd Partie */}
            <div className="mt-6">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  Daily Vip
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              {/* List Daily vip */}
              <ul className="mt-6 sm:grid sm:grid-cols-2 lg:col-gap-8 lg:row-gap-5 font-medium text-center">
                {vip.dailyKit.map((daily) => (
                  <li key={uuidv4()} className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0"></div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                      {`✔️ ${daily}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="absolute top-1 right-1 text-center rounded-xl p-2 text-red-900 font-bold text-3xl"
              onClick={toggle}
            >
              <span className="hover:text-gray-500">X</span>
            </button>
          </div>
          <div className="flex justify-center">
            <button className="mt-4 text-center ml-4 p-2 w-36 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-300">
              <a
                href="https://store.awakerust.com/category/eu-x10-main"
                target="_blank"
                rel="noreferrer"
              >
                Buy {vip.price}€
              </a>
            </button>
          </div>
        </div>
      </>
    );
  }
  // Sinon c'est un kit ou un servx2 alors
  else {
    return (
      <>
        <div id="overlay" onClick={toggle}></div>
        <div
          id="modal"
          className="bg-white dark:bg-gray-800 overflow-auto w-[90%] lg:w-[750px]"
        >
          <div className="bg-white dark:bg-gray-800 pb-2 px-2 sm:px-4 md:px-6 lg:flex-shrink-1 lg:px-8 lg: pt-2">
            <h3 className="text-2xl font-hurricane uppercase leading-8 font-extrabold text-gray-900 text-center sm:text-3xl sm:leading-9 gradH1 md:text-4xl lg:pb-4">
              {`${vip.title} KIT ${paramid.id.toUpperCase()}`}
            </h3>
            <p className="font-bold text-center text-red-500 dark:text-red-500">
              {vip.phrase} access of this kit
            </p>
            <div className="mt-6">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  Kit Info
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              {/* Map all globalKit  */}
              <ul className="mt-6 sm:grid sm:grid-cols-2 lg:col-gap-8 lg:row-gap-5 font-medium text-center">
                {vip.globalKit.map((para) => (
                  <li key={uuidv4()} className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0"></div>
                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                      ✔️ {para}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="absolute top-1 right-1 text-center rounded-xl p-2 text-red-900 font-bold text-3xl"
              onClick={toggle}
            >
              <span className="hover:text-gray-500">X</span>
            </button>
          </div>
          <div className="flex justify-center">
            <button className="mt-4 text-center ml-4 p-2 w-36 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-300">
              Buy {vip.price}€
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default ModalVip;
