import React from "react";
import bgRust from '../../assets/ressources/rustBG.jpg'

const Home = () => {
  return (
    <div className="">
      <img src={bgRust} alt="" className="absolute top-0 h-screen w-screen object-cover"/>
      <div className="mx-auto fixed top-[35%] xl:top-[40%] left-1/2 -translate-x-1/2">
      <h1 className="text-center text-white text-7xl font-bold font-hurricane z-30">Welcome to Awake Rust</h1>
      <div className="flex flex-col">
          <p className="text-center text-2xl text-white font-medium py-4">Join us</p>
          <div className="flex justify-center items-center py-4">
            <button className="px-4 bg-white py-2 w-36 ring-1 ring-white rounded-md shadow-lg text-indigo-600 font-medium hover:bg-gray-100">Discord<i className="fa-brands fa-discord fa-xl ml-2 text-[#5865F2]"></i></button>
            <button className="px-4 bg-white py-2 w-36 ring-1 ring-white ml-4 rounded-md shadow-lg text-indigo-600 font-medium hover:bg-gray-100">Steam<i className="fa-brands fa-steam fa-xl ml-2 text-black"></i></button>
          </div>
      </div>

      </div>
    </div>
  );
};

export default Home;
