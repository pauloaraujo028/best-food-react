import React from "react";
import imgHome from "../assets/images/drip2.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className=" mx-auto items-center w-full">
      <div className="w-full mx-auto bg-black">
        <img
          className="w-full max-h-[500px] object-cover"
          src={imgHome}
          alt="/"
        />
      </div>
      <div className="w-full mx-auto py-4 h-[250px] bg-black">
        <div className="max-h-[700px] relative">
          {/* Overlay */}
          <div className="absolute w-full text-gray-200  bg-black/40 flex flex-col justify-center items-center ">
            <h1 className="px-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              A <span className="text-orange-500">Melhor</span>
            </h1>
            <h1 className="px-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-orange-500">Comida</span> Entregue
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1640px] mx-auto items-center p-2 bg-black text-white">
        <div className="flex items-center justify-center">
          <p>
            Copyright {year} developed by Paulo Araújo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
