import React, { useRef, useState } from "react";
import image from "./../../Assets/image/log.jpg";
import { FaSearch, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../Redux/Features/Productslice";

export default function Navbar() {
  const [select, setselect] = useState("");
  const [open, setopen] = useState("");
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.allcarts);
  //const totalqnty = carts.reduce((prevqnty, item) => prevqnty + item.qnty, 0);

  const handleselect = (value) => {
    setselect(value);
  };
  return (
    <div
      className="flex justify-between
      items-center sticky top-0 z-50 dark:bg-gray-700 dark:text-white mx-auto md:px-10 px-4"
    >
      <div className="md:flex items-center pb-4">
        <figure>
          <img
            className="h-[70px] w-[70px] rounded-full border border-red-500 m-2 "
            src={image}
            alt=""
          />
        </figure>
        <span className="  text-md text-blue-500 md:font-semibold md:pb-0 pb-2 ">
          food corner
        </span>
      </div>
      <div className="text-md  md:font-semibold">
        <ul
          className={`md:flex absolute md:static gap-4 top-20 left-0 pl-5  transition-all ease-in duration-500 ${
            open ? "opacity-100 w-full py-4 " : "left-[-1000px]"
          } `}
        >
          <Link to="">
            <li
              onClick={() => handleselect("Home")}
              className={`${
                select === "Home" && "border-b border-red-500"
              } w-full`}
            >
              Home
            </li>
          </Link>
          <Link to="/Menu">
            <li
              onClick={() => handleselect("Menu")}
              className={`${
                select === "Menu" && "border-b border-red-500"
              } w-full`}
            >
              menu
            </li>
          </Link>
          <Link to="/Mobileapp">
            <li
              onClick={() => handleselect("Mobileapp")}
              className={`${
                select === "Mobileapp" && "border-b border-red-500"
              } w-full `}
            >
              mobile-app
            </li>
          </Link>
          <Link to="/Contact">
            <li
              onClick={() => handleselect("Contact")}
              className={`${
                select === "Contact" && "border-b border-red-500"
              } w-full `}
            >
              contact-us
            </li>
          </Link>
        </ul>
        <div
          onClick={() => setopen(!open)}
          className="absolute md:hidden  top-0 right-2 mt-2 text-md "
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className="flex items-center justify-center md:gap-4 gap-2 ">
        <div className="flex">
          <input
            type="search"
            placeholder="search"
            name="search"
            className="p-1 text-black w-[100px] md:w-full outline-none rounded-md  "
            onChange={(e) => dispatch(search(e.target.value))}
          />
        </div>
        <div className="">
          <div className="absolute right-16 top-[150px] flex items-center md:relative ">
            {/* <div className="  w-full h-full flex items-center  ">
              {cartopen && (
                <ul
                  className="absolute right-3 mt-9 py-2
                w-80 bg-gray-300 text-gray-700 rounded-md shadow-md p-3 border"
                  ref={dropdownref}
                >
                  {carts.length > 0 ? (
                    <>
                      {carts.map((c) => (
                        <div
                          className="flex items-center border-b p-1 space-x-2"
                          key={c.id}
                        >
                          <div>
                            <figure>
                              <img
                                className="w-[70px] h-[70px] rounded-full "
                                src={c.imgdata}
                                alt=""
                              />
                            </figure>
                          </div>
                          <div className="text-xl font-semibold ">
                            <h1> {c.dish}</h1>
                            <h1>price: {c.price}</h1>
                          </div>
                          <div className="text sm font-bold bg-green-500 text-white p-2 rounded-md   ">
                            <button onClick={()=>dispatch(Removecart())} >removes</button>
                          </div>
                        </div>
                      ))}
                      <div>
                        <Link>
                          <button className="flex justify-center text-white bg-red-500 m-auto mt-3 p-2 rounded-md w-full ">
                            process to cart
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="bg-white rounded-md absolute top-0 right-0 text-black   ">
                      <h1 className="m auto text-2xl p-2 text-center flex">
                        the card is empty
                      </h1>
                    </div>
                  )}
                </ul>
              )}
            </div> */}
          </div>
          <div className="flex items-center ">
            <Link to="/Cart">
              <button>
                <FaShoppingCart className="text-2xl" />
              </button>
            </Link>
            <p className="pt-1">({carts.length})</p>
            {/* <p>{totalqnty}</p> */}
          </div>
        </div>

        <div>
          <Link to="/Register">
            <button
              className="text-md h-8 w-[80px] shadow-md font-semibold items-center border flex justify-center border-green-700
         rounded-full   "
            >
              sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
