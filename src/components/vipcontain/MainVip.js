import React from "react";
import CardVip from "./CardVip";
import { vipx10 } from "../../data/datavipx10";
import { vipx2 } from "../../data/datavipx2";
import { v4 as uuidv4 } from "uuid";
import { useParams, Navigate } from "react-router-dom";

const MainVip = () => {
  let params = useParams();

  if (params.id === "x2") {
    return (
      <main className="mx-auto max-w-7xl mt-16 mb-10 md:my-auto lg:mt-0 xl:mt-0">
        <h1 className="gradH1 px-4 pt-4 text-center font-roboto text-3xl font-bold text-white md:px-0 md:pt-8 md:text-4xl">
          EU {params.id} VIP
        </h1>

        {/* <!-- Vip container --> */}
        <div className="vipContainer mx-auto mt-12 mb-16 flex flex-col items-center justify-center gap-5 px-4 sm:flex-row sm:flex-wrap md:gap-8 md:mt-20">
          {vipx2.map((vip) => (
            <CardVip key={uuidv4()} vip={vip} paramid={params} />
          ))}
        </div>
      </main>
    );
  } else if (params.id === "x10") {
    return (
      <main className="mx-auto max-w-7xl mt-16 mb-10 md:my-auto lg:mt-0 xl:mt-0">
        <h1 className="gradH1 px-4 pt-4 text-center font-roboto text-3xl font-bold text-white md:px-0 md:pt-8 md:text-4xl">
          EU {params.id} VIP
        </h1>

        {/* <!-- Vip container --> */}
        <div className="vipContainer mx-auto mt-12 mb-16 flex flex-col items-center justify-center gap-5 px-4 sm:flex-row sm:flex-wrap md:gap-8 md:mt-20">
          {vipx10.map((vip) => (
            <CardVip key={uuidv4()} vip={vip} paramid={params} />
          ))}
        </div>
      </main>
    );
  }
  return (
    <>
      <Navigate to="/" />
    </>
  );
};

export default MainVip;
