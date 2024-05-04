import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...setdata, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    console.log("contact page submit successsfully");
  };
  return (
    <div
      className="w-full dark:bg-gradient-to-r from-slate-900 to-slate-700
     dark:text-gray-100 bg-gradient-to-r from-gray-700 to-gray-600 text-white"
    >
      <div className="py-10 mx-4 ">
        <h1 className="text-2xl font-extrabold text-center ">Contact me</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  mx-auto sm:mt-20 mt-5 ">
          <div className="flex flex-col sm:mx-auto sm:justify-center justify-start ">
            <div className="text-2xl font-semibold ">
              <h3>Dhaka office</h3>
              <p>mobile:0171863690</p>
              <Link to="mailto"> md.joshimuddin975@gmail.com </Link>
            </div>
            <div className=" text-2xl font-semibold sm:mt-10 mt-3">
              <h3>Dhaka office</h3>
              <p>mobile:0171863690</p>
              <Link to="mailto"> md.joshimuddin975@gmail.com </Link>
            </div>
          </div>
          <div className="flex flex-col sm:mx-auto sm:justify-center justify-start ">
            <form action="">
              <div className="flex flex-col">
                <label className="text-xl font-semibold " htmlFor="">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handlechange}
                  placeholder="enter your name"
                  className="md:w-[500px] w-full h-12 outline-none hover:outline-none ring-1 ring-gray-400 dark:bg-white dark:text-black p-1 rounded-md bg-gray-100 text-gray-700 mt-1   "
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <label className="text-xl font-semibold " htmlFor="">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handlechange}
                  placeholder="enter your email"
                  className="md:w-[500px] w-full h-12 outline-none hover:outline-none ring-1 ring-gray-400 dark:bg-white dark:text-black p-1 rounded-md bg-gray-100 text-gray-700 mt-1   "
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <label className="text-xl font-semibold " htmlFor="">
                  phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  value={data.phone}
                  onChange={handlechange}
                  placeholder="enter your phone number"
                  className="md:w-[500px] w-full h-12 outline-none hover:outline-none ring-1 ring-gray-400 dark:bg-white dark:text-black p-1 rounded-md bg-gray-100 text-gray-700 mt-1   "
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <label className="text-xl font-semibold " htmlFor="">
                  message
                </label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={handlechange}
                  placeholder="message"
                  className="md:w-[500px] w-full h-[200px] outline-none hover:outline-none ring-1 ring-gray-400 dark:bg-white dark:text-black p-1 rounded-md bg-gray-100 text-gray-700 mt-1   "
                ></textarea>
              </div>
              <div className="mt-5 justify-center sm:justify-start flex items-center mx-auto ">
                <button onClick={handlesubmit} className="bg-red-500 text-2xl font-bold p-2 rounded-md text-white w-[120px]">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
