import React, { useState } from "react";
import { Addtocart, Removecart } from "../../../Redux/Features/Productslice";
import { useDispatch } from "react-redux";

export default function ProductDetails({ item }) {
  const dispatch = useDispatch();
  const [addbutton, setAddbutton] = useState(false);

  const handleAddCart = async () => {
    setAddbutton(!addbutton);
  };
  return (
    <div className="w-full h-full ">
      <div className="py-2 gap-1 p-2 dark:bg-gray-100 text-gray-800 rounded-md  shadow-2xl pb-5 ">
        <figure className=" overflow-hidden ">
          <img
            className="h-[200px] w-full mx-auto rounded-md text-center object-cover  cursor-pointer hover:scale-125 duration-500  "
            src={item.imgdata}
            alt=""
          />
        </figure>
        <div className="mt-2 flex justify-between gap-2 overflow-hidden md:text-md font-semibold text-sm ">
          <ul className="">
            <h1> Name: {item.dish}</h1>
            <p className="hover:text-red-500 pt-1 ">price: {item.price}$</p>
          </ul>
          <ul>
            <p className=" hover:bg-red-500 bg-green-500 hover:text-white text-white rounded-full p-1 ">
              FastDelivery
            </p>
            <p className="pt-1">rating: {item.rating}</p>
          </ul>
        </div>

        <div>
          {addbutton ? (
            <button
              className="mt-2 bg-green-500 text-white rounded-md p-2 m-auto items-center flex font-bold "
              onClick={() => handleAddCart(dispatch(Removecart(item)))}
            >
              remove from cart
            </button>
          ) : (
            <button
              className="mt-2 bg-red-500 text-white rounded-md p-2 m-auto items-center flex font-bold "
              onClick={() => handleAddCart(dispatch(Addtocart(item)))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
