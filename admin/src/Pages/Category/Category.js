import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./../../assets/images/log.jpg";

export default function Category() {
  const [image, setimage] = useState(false);
  const [inputvalue, setinputvalue] = useState({
    category: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputvalue, [name]: value });
  };
  const handleclick = async (e) => {
    e.preventDefault();
    const { category, cat_image } = inputvalue;
    if (category === "") {
      toast.error("please input category");
    } else {
      console.log("registration successfull");
    }
  };

  return (
    <div className="">
      <h1 className="text-center m-auto py-5 "> Add category</h1>
      <div className=" ">
        <form className="flex flex-col" action="">
          <input
            className="h-12 w-full rounded-lg bg-gray-100 p-2 dark:bg-white dark:text-black text-gray-700 "
            type="text"
            placeholder="enter the category name"
            name="category"
            value={inputvalue.category}
            onChange={handlechange}
          />
          <div>
            <label htmlFor="customFile">
              <img
                className="h-[100px] w-[100px] mt-3 rounded-md cursor-pointer "
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.2.457771161.1694093368&semt=sph"
                }
                alt=""
              />
            </label>
            <input
              type="file"
              id="customFile"
              className=" mt-1 "
              name="cat_image"
              onChange={(e) => setimage(e.target.files[0])}
              required
              placeholder="image"
            />
          </div>

          <button
            onClick={handleclick}
            className="border bg-red-500 text-white mt-10 "
          >
            Add
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
