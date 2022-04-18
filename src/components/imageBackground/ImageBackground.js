import React from "react";
import bgRust from "../../assets/ressources/rustBG.jpg";

export default function ImageBackground() {
  return (
    <>
      <img
        src={bgRust}
        alt=""
        className="absolute top-0 h-screen w-screen object-cover"
      />
    </>
  );
}
