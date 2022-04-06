import React from "react";

const Home = () => {
  return (
    <div className="text-white h-[90vh] max-w-7xl mx-auto font-roboto">
      <h1 className="text-center font-bold text-4xl pt-4 gradH1">
        Welcome to Awake Rust
      </h1>
      <div className="flex items-center justify-center mx-auto mt-20">
        <div className="flex flex-col w-1/2">
          <p className="text-center text-xl">
          Follow and join us to discover some of our server Rust.
          </p>
        </div>
        <div className="flex flex-col w-1/2">
          <p className="text-center text-xl">
            Server x10
          </p>
          <p className="text-center text-xl">
            Server x5
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
