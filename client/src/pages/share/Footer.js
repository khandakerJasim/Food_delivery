import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [value, setvalue] = useState("");

  const handlechange = (e) => {
    setvalue(e.target.value);
  };
  const options = [
    {
      label: "Bangla",
      value: "1",
    },
    {
      label: "English",
      value: "2",
    },
    {
      label: "Hindi",
      value: "3",
    },
  ];
  return (
    <div className=" dark:bg-gray-800 dark:text-white bg-gray-200 text-black ">
      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-10 mx-4 md:gap-4 gap-2 py-5 ">
        <div className=" ">
          <p className="text-blue-500 text-2xl font-bold">FOOD CORNER</p>
          <p className="text-sm font-semibold opacity-90  mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            provident laudantium natus sequi recusandae libero iusto quam neque
            impedit asperiores atque officia voluptas quibusdam, quod
          </p>
          <ul className="flex gap-2 mt-2 text-3xl ">
            <Link to="/">
              <li>
                <FaFacebookF className="border rounded-full border-gray-400 p-2 shadow-md hover:text-white hover:bg-green-500 transition-all ease-in duration-500" />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FaTwitter className="border rounded-full border-gray-400 p-2 shadow-md hover:text-white hover:bg-green-500 transition-all ease-in duration-500" />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FaInstagram className="border rounded-full border-gray-400 p-2 shadow-md hover:text-white hover:bg-green-500 transition-all ease-in duration-500" />
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-bold opacity-70 ">COMPANY</p>
          <ul className="mt-3 text-sm font-semibold opacity-90 ">
            <Link to="/">
              <li className="hover:underline hover:text-blue-500">Home</li>
            </Link>
            <Link to="/">
              <li className="hover:underline hover:text-blue-500">About us</li>
            </Link>
            <Link to="/">
              <li className="hover:underline hover:text-blue-500">Delivery</li>
            </Link>
            <Link to="/">
              <li className="hover:underline hover:text-blue-500">
                Privacy policy
              </li>
            </Link>
          </ul>
        </div>
        <div className="relative">
          <p className=" text-xl font-bold opacity-70">GET IN TOUCH</p>
          <ul className="mt-3 text-sm font-semibold opacity-90 ">
            <Link to="/">
              <li className="hover:underline hover:text-blue-500">
                01710863690
              </li>
            </Link>
            <Link to="/">
              <li className="hover:underline hover:text-blue-500">
                md.joshimuddin975@gmail.com
              </li>
            </Link>
          </ul>
          <div className="mt-4 right-2 absolute md:bottom-12 bottom-5  ">
            <p className="text-sm font-bold">select language</p>
            <select
              onChange={handlechange}
              className="w-[120px] h-10 mt-2 border border-gray-400 dark:bg-gray-700 dark:text-white  p-2 "
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 mt-2 md:mx-10 mx-5 flex justify-center pb-4 pt-2 ">
        <p className="text-sm opacity-90">
          copyright2024@ tomatto.com.All time Reserved it
        </p>
      </div>
    </div>
  );
}
