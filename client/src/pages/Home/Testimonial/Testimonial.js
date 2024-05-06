import React from "react";

export default function Testimonial() {
  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-500 text-white dark:bg-gradient-to-r from-gray-800 to-gray-900 dark:text-gray-100">
      <div className="py-10">
        <h1 className="text-2xl text-center m-auto  w-[200px] uppercase font-extrabold relative before:absolute before:block before:left-0 before:top-9 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:ease-in-out before:origin-top-middle before:content-[' ']  ">
          Client to say
        </h1>
        <div className="mt-10 mx-auto justify-center flex flex-col items-center ">
          <h1>joshim</h1>
        </div>
      </div>
    </div>
  );
}
