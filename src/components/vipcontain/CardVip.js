import React, { useState } from "react";
import ModalVip from "./ModalVip";

const CardVip = ({ vip, paramid }) => {
  const [toggle, setToggle] = useState(false);

  // Toggle modal
  const displayModal = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  return (
    <>
      <div className="flex flex-col mb-3 sm:mb-0 max-w-[310px] sm:max-w-[280px] hover:scale-105 transition duration-300 ease-out ring-2 ring-white rounded-xl">
        <div className={`card${vip.id} rounded-t-xl`}>
          <h3 className="font-hurricane text-white text-4xl font-bold">
            {vip.title}
          </h3>
        </div>
        <div className="text-white bgCardFooter rounded-b-lg h-[150px]">
          <h4 className="text-xl text-center font-bold pt-[8px] pb-[5px] text-black">
            {vip.price}€
          </h4>
          <p className="text-center px-4 font-medium text-sky-800">
            {`${vip.phrase} of access !`}
          </p>
          <div className="mt-4 flex justify-between pb-2 px-2">
            <button
              className="p-2 max-w-[125px] rounded-md bg-white text-indigo-600 font-medium hover:bg-gray-200"
              id="open"
              onClick={displayModal}
            >
              More...
            </button>
            <button className="p-2 max-w-[125px] rounded-md bg-white text-indigo-600 font-medium hover:bg-gray-200">
              <a
                href={vip.shopLinkUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buy Vip ⭐
              </a>
            </button>
          </div>
        </div>
      </div>
      {toggle ? (
        <ModalVip vip={vip} toggle={displayModal} paramid={paramid} />
      ) : (
        <></>
      )}
    </>
  );
};

export default CardVip;
