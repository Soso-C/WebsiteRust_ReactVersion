import React from "react";

const ModalVip = ({ vip, toggle }) => {
  return (
    //   Scroll a revoir et navbar pos fixed qui fou le bordel
    <>
      <div id="overlay" onClick={toggle}></div>
      <div
        id="modal"
        className="bg-white dark:bg-gray-800 overflow-auto w-[90%] lg:w-[750px] xl:w-[850px]"
      >
        <div className="bg-white dark:bg-gray-800 pb-2 px-2 sm:px-4 md:px-6 lg:flex-shrink-1 lg:px-8 lg: pt-2">
          <h3 className="text-2xl font-hurricane uppercase leading-8 font-extrabold text-gray-900 text-center sm:text-3xl sm:leading-9 gradH1 md:text-4xl lg:pb-4">
            {`${vip.title} Kit x10`}
          </h3>
          {/* Map all globalKit in <p> */}
          {vip.globalKit.map((para) => (
            <p className="font-bold text-center text-gray-500 dark:text-gray-100">
              {para}
            </p>
          ))}
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                Vip
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            {/* List Vip Ressources */}
            <ul className="mt-8 sm:grid sm:grid-cols-2 lg:col-gap-8 lg:row-gap-5 font-medium text-center">
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.wood} Wood
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.stone} Stone
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.metal} Metal
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.hq} HQ
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.sulfur} Sulfur
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.sulfurOre} Sulfur Ore
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.hqOre} HQ Ore
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.metalOre} Metal Ore
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.leather} Leather
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.lowgrade} Low Grade
                </p>
              </li>
              <li className="flex items-start lg:col-span-1">
                <div className="flex-shrink-0"></div>
                <p className="ml-3 text-base sm:text-sm leading-5 text-gray-700 dark:text-gray-200">
                  ✔️ {vip.ressources.cloth} Cloth
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                Daily Vip
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            {/* List Daily vip */}
            <ul className="mt-8 sm:grid sm:grid-cols-2 lg:col-gap-8 lg:row-gap-5 font-medium text-center">
              {vip.dailyKit.map((daily) => (
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0"></div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">✔️{daily}</p>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="absolute top-1 right-1 text-center rounded-xl p-2 text-red-900 font-bold text-3xl"
            onClick={toggle}
          >
            X
          </button>
        </div>
        <div className="flex justify-center">
          <button className="mt-4 text-center ml-4 p-2 w-36 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-200">
            Buy {vip.price}€
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalVip;
