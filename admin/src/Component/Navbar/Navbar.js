import React from "react";
import Logo from "./../../assets/images/log.jpg";

export default function Navbar() {
  return (
    <div className="w-full h-full dark:bg-gray-800 dark:text-white sticky top-0 z-50 ">
      <div className="flex justify-between md:mx-10 mx-4 ">
        <div className=" py-2 flex items-center md:gap-4 gap-2 ">
          <figure>
            <img
              className="h-[60px] w-[60px] rounded-full  "
              src={Logo}
              alt=""
            />
          </figure>
          <p className="text-md text-blue-500 font-bold cursor-pointer">
            Food corner
          </p>
        </div>
        <div className="flex items-center">
          <h1>joshim</h1>
        </div>
      </div>
    </div>
  );
}
