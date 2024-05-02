import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./../../assets/images/log.jpg";
import axios from "axios";

export default function Category() {
  const [image, setimage] = useState(false);
  const [inputvalue, setinputvalue] = useState({
    category: "",
  });

  const url = "http://localhost:3001";
  const handlecsubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("category", inputvalue.category);
    // formData.append("image", image);
    // const response = await axios.post(`${url}/api/postcat`);
    // console.log(response);
    // console.log("add category successfully");
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
            onChange={(e) => setinputvalue(e.target.value)}
          />
          <div>
            <label htmlFor="customFile">
              <img
                className="h-[100px] w-[100px] mt-3 rounded-md cursor-pointer "
                src={
                  "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.2.457771161.1694093368&semt=sph"
                }
                alt=""
              />
            </label>
            <input
              type="file"
              id="customFile"
              className=" mt-1 "
              accept=".jpg,.png"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </div>

          <button
            onClick={handlecsubmit}
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
