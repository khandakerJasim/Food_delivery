import React from "react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      className="dark:bg-gray-800 dark:text-white  flex md:justify-center w-full
      md:pl-0  py-10   md: md:w-1/4  h-auto shadow-md  border-t-2 border-red-500   "
    >
      <ul className=" w-full md:mt-7 mt-2 p-4 md:p-2 ">
        <Link to="/Addproduct">
          <li className="flex w-full  items-center gap-2 border border-gray-300 md:w-[300px]  h-12 p-2 ">
            <FaRegPlusSquare />
            <p>add item</p>
          </li>
        </Link>
        <Link to="/List">
          <li className="flex mt-2  items-center gap-2 border border-gray-300 md:w-[300px]   h-12 p-2 ">
            <FaRegPlusSquare />
            <p>List item</p>
          </li>
        </Link>
        <Link to="/Orders">
          <li className="flex mt-2 items-center gap-2 border border-gray-300 md:w-[300px] w-full h-12 p-2 ">
            <FaRegPlusSquare />
            <p>orders</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
