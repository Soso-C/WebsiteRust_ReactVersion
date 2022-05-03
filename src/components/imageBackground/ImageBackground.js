import React from "react";

export default function ImageBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen z-[-100] bg-main-bg bg-no-repeat bg-center bg-cover"></div>
      <div id="bg-overlay" className="fixed top-0 left-0 w-screen h-screen z-[-99] bg-[rgba(0,0,0,0.2)]"></div>
    </>
  );
}
