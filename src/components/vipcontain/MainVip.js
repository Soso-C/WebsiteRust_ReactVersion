import React, { useEffect, useState } from "react";
import axios from "axios";
import CardVip from "./CardVip";

const MainVip = () => {
  const [vipData, setVipData] = useState([]);

  useEffect(() => {
    axios
      .get("./data/datavip.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setVipData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="mx-0 mt-16 mb-10 md:my-auto lg:mt-0 xl:mt-0">
      <h1 className="gradH1 px-4 pt-4 text-center font-roboto text-3xl font-bold text-white md:px-0 md:pt-8 md:text-4xl">
        EU x10 VIP
      </h1>

      {/* <!-- Vip container --> */}
      <div className="vipContainer mx-auto mt-12 mb-16 flex max-w-[1400px] flex-col items-center justify-center gap-5 px-4 sm:flex-row sm:flex-wrap md:gap-8 md:mt-20">
        {vipData.map((vip) => (
          <CardVip key={vip.id} vip={vip} />
        ))}
      </div>
    </main>
  );
};

export default MainVip;
