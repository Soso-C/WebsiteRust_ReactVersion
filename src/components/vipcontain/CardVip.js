import React, { useState } from "react";
import ModalVip from "./ModalVip";

const CardVip = ({ vip }) => {
  const [toggle, setToggle] = useState(false);

  const displayModal = () => {
    setToggle(!toggle);
    if(!toggle){
      document.body.classList.add("overflow-y-hidden")
    }else {
      document.body.classList.remove("overflow-y-hidden")
    }
  };

  return (
    <>
      <div className="flex flex-col sm:max-w-[300px] md:max-w-[310px] hover:scale-105 transition duration-300 ease-out ring-2 ring-white rounded-xl">
        <div className={`card${vip.id} rounded-t-xl`}>
          <h3 className="font-hurricane text-white text-4xl font-bold">
            {vip.title}
          </h3>
        </div>
        <div className="text-white bgCardFooter rounded-b-lg max-w-[350px]">
          <h4 className="text-xl text-center font-bold pt-4 pb-2 text-black">
            {vip.price}€ 💸
          </h4>
          <p className="text-center px-4 font-medium text-sky-800">
            {`${vip.phrase} of access !`}
          </p>
          <div className="flex justify-between p-3">
            <button
              className="mt-4 p-2 max-w-[125px] rounded-md bg-white text-indigo-600 font-medium hover:bg-gray-200"
              id="open"
              onClick={displayModal}
            >
              More...
            </button>
            <button className="mt-4 p-2 max-w-[125px] rounded-md bg-white text-indigo-600 font-medium hover:bg-gray-200">
              Buy Vip ⭐
            </button>
          </div>
        </div>
      </div>
      {toggle ? <ModalVip vip={vip} toggle={displayModal} /> : <></>}
    </>
  );
};

export default CardVip;
