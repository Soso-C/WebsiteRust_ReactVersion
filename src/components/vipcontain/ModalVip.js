import React, { useState } from "react";

const ModalVip = ({ vip, toggle }) => {


  return (
    <>
      <div id="overlay"></div>
      <div id="modal" className="font-medium space-y-4">
        <p className="pt-2">Name: {vip.title} </p>
        <p>Test: {vip.title}</p>
        <p>Test: {vip.price}</p>
        <p>TEst: {vip.phrase}</p>
        <button
          className="mt-4 flex justify-center p-2 w-36 rounded-md bg-red-500 text-white font-bold hover:bg-blue-200 mx-auto"
          onClick={toggle}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default ModalVip;
