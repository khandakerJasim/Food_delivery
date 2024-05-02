import React, { useState } from "react";
import axios from "axios";
import Category from "../Category/Category";

export default function Addproduct() {
  const [image, setimage] = useState(false);
  const [input, setinput] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const handlechange = (e) => {
    const { value, name } = e.target;

    setinput({ ...input, [name]: value });
  };

  const handlesubmit = async (e) => {
    // const { name, price, description, category, image } = input;
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("price", input.price);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("image", image);

    // const res = await axios.post("http://localhost:6000/api/post", formData);
    // console.log(res);

    const fetchdata = await fetch("http://localhost:6000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify({
        name: "name",
        price: "price",
        description: "description",
        category: "category",
        image: "image",
      }),
    });
    const res = await fetchdata.json();
    console.log(res);
    console.log("product post successfukky");
  };
  return (
    <div className=" md:w-3/4 w-full border-t-2 border-red-500  h-full dark:text-white dark:bg-gray-600">
      <p className="text-2xl text-center font-bold">add product</p>
      <div className="p-4 mt-3 md:pb-[200px] flex justify-center md:justify-around md:flex-row flex-col ">
        <form className="mt-4" action="">
          <div className="flex flex-col  ">
            <label className="text-xl" htmlFor="">
              product image
            </label>
            <div className="relative mt-3 h-12 items-center  w-full ">
              <input
                className=" absolute   opacity-0 border-red-500 left-0 top-0 h-full md:w-[300px] overflow-hidden cursor-pointer "
                type="file"
                id="customFile"
                accept=".jpg,.png"
                onChange={(e) => setimage(e.target.files[0])}
              />
              <label
                htmlFor="customFile"
                className="text-xl   absolute h-full w-full cursor-pointer flex items-center text-center left-0 "
              >
                select image
              </label>
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <label className="text-xl" htmlFor="">
              Product name
            </label>
            <input
              className="h-12 dark:text-black p-2 md:w-[400px] mt-1 w-full focus:outline-none hover:outline-none focus:ring-2 ring-gray-400 rounded-md  "
              type="text"
              placeholder="Enter the product name"
              name="name"
              value={input.name}
              onChange={handlechange}
            />
          </div>

          <div className="mt-3 flex flex-col">
            <label className="text-xl" htmlFor="">
              Product description
            </label>
            <textarea
              className="md:w-[400px] dark:text-black p-2 h-32 mt-2 w-full focus:outline-none hover:outline-none focus:ring-2 ring-gray-400 rounded-md "
              name="description"
              value={input.description}
              onChange={handlechange}
              id=""
              cols="30"
              rows="10"
              placeholder="write content here"
            ></textarea>
          </div>
          <div className="flex gap-12 mt-3">
            <div className="flex flex-col">
              <label className="mt-2 md:text-xl  " htmlFor="">
                Product category
              </label>
              <select
                className=" mt-2 h-12 dark:text-black focus:outline-none hover:outline-none focus:ring-2 ring-gray-400 rounded-md  "
                name="category"
                value={input.category}
                onChange={handlechange}
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwitch">Sandwitch</option>
                <option value="Cake">Cake</option>
                <option value="Pure vegetable">Vegetable</option>
                <option value="Pasta">pasta</option>

                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="mt-2 flex flex-col ">
              <label className="text-xl" htmlFor="">
                Product price
              </label>
              <input
                className="mt-2 h-12 dark:text-black p-2 focus:outline-none hover:outline-none focus:ring-2 ring-gray-400 rounded-md "
                type="text "
                placeholder="$20"
                name="price"
                value={input.price}
                onChange={handlechange}
              />
            </div>
          </div>
          <button
            onClick={handlesubmit}
            className="border text-white flex justify-center ml-[100px] text-center  bg-red-500 mt-7 text-md font-bold p-2 h-12 rounded-md "
          >
            Add product
          </button>
        </form>
        <div className="">
          <Category />
        </div>
      </div>
    </div>
  );
}
