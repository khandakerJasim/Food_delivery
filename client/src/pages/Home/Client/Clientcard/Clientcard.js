import React from "react";

export default function Clientcard({ datas }) {
  return (
    <div className="flex justify-center flex-col items-center mx-auto md:w-[400px]  px-3 py-5 ">
      <figure className="overfolw-hidden py-3">
        <img
          className=" h-[100px] w-[100px] rounded-full  hover:scale-125 transition duration-500  object-cover"
          src={datas.image}
          alt=""
        />
      </figure>
      <div>
        <h1 className="text-center text-2xl uppercase text-yellow-500 font-bold ">
          {datas.name}
        </h1>
        <p className="text-md font-semibold md:text-center text-center mt-2">
          {datas.category}
        </p>
      </div>
    </div>
  );
}
