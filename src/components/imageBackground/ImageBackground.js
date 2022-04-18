import React from "react";
import bgRust from "../../assets/ressources/AwakeRustBackground.webp";

export default function ImageBackground() {
  return (
    <>
      <img
        src={bgRust}
        alt="Background AwakeRust"
        className="absolute top-0 h-screen w-screen object-cover z-[-100]"
      />
    </>
  );
}
