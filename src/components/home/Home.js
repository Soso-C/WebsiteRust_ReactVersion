import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageBackground from "../imageBackground/ImageBackground";

const Home = () => {
  const [serverx10, setServerx10] = useState([]);
  const [serverx2, setServerx2] = useState([]);

  // get Data x10
  const getData = async () => {
    await axios
      .get(process.env.REACT_APP_GET_SERVERX2_INFO)
      .then((res) => setServerx10(res.data.data.attributes));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="h-full w-full">
      {/* Button bottom page server info/connect  */}

      <div className="flex p-1 md:mt-20 items-center justify-center space-x-4 md:space-x-8 w-full z-50 absolute bottom-[10px]">
        <div className="w-1/2 sm:w-[300px] h-full p-3 bg-[#232323] rounded-lg items-center flex flex-col justify-center shadow-lg opacity-[0.95] ring-white ring-1">
          <p className="text-center font-extrabold text-slate-400">
            Awake EU x2
          </p>
          <p className="text-center font-bold text-white pb-2">{`${serverx10.players} / ${serverx10.maxPlayers}`}</p>
          <button className="px-4 bg-[#141414] py-1 md:w-36 ring-1 ring-white rounded-md shadow-lg text-white font-medium hover:bg-gray-300">
            Connect
          </button>
        </div>
        <div className="w-1/2 sm:w-[300px] h-full p-3 bg-[#232323] rounded-lg items-center flex flex-col justify-center shadow-lg opacity-[0.95] ring-white ring-1">
          <p className="text-center font-extrabold text-slate-400">
            Awake EU x10
          </p>
          <p className="text-center font-bold text-white pb-2">{`${serverx10.players} / ${serverx10.maxPlayers}`}</p>
          <button className="px-4 bg-[#141414] py-1 ring-1 md:w-36 ring-white rounded-md shadow-lg text-white font-medium hover:bg-gray-300">
            Connect
          </button>
        </div>
      </div>

      <ImageBackground />

      {/* Main page */}
      <div className="mx-auto fixed top-[35%] xl:top-[40%] left-1/2 -translate-x-1/2">
        <h1 className="text-center text-white text-6xl md:text-6xl lg:text-7xl font-bold font-hurricane z-30">
          Welcome to Awake Rust
        </h1>
        <div className="flex flex-col">
          <p className="text-center text-2xl text-white font-bold py-4">
            Join us
          </p>
          <div className="flex justify-center items-center py-4">
            <button className="px-4 bg-[#232323] py-2 w-36 ring-1 ring-white rounded-md shadow-lg text-white font-medium hover:bg-gray-300">
              Discord
              <i className="fa-brands fa-discord fa-xl ml-2 text-white"></i>
            </button>
            <button className="px-4 bg-[#232323] py-2 w-36 ring-1 ring-white ml-4 rounded-md shadow-lg text-white font-medium hover:bg-gray-300">
              Steam<i className="fa-brands fa-steam fa-xl ml-2 text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
