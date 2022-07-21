import React from "react";

export default function ImageBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen z-[-100] bg-main-bg bg-no-repeat bg-center bg-cover"></div>
      <div className="bg-black opacity-70 absolute  top-0 left-0 h-screen w-screen" />
    </>
  );
}
