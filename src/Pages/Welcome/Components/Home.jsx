import React from "react";
import h3devLogo from "../../../assets/logo.png";

const Home = () => {
  return (
    <div id="home" className="home-height flex items-center justify-center">
      <div className="bg-white ">
        <div>
          <img src={h3devLogo} className="h-80" alt="H3Devs logo" />
        </div>
        <div className="mt-2 text-center">
          <p className="text-[#09FAFB] font-extrabold text-5xl">H3DEVS</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
