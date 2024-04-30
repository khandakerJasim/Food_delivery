import React, { useState } from "react";

export default function Login() {
  const [inputdata, setinputdata] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setinputdata({ ...inputdata, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    console.log("login successfull");
  };
  return (
    <div className="w-full h-full dark:bg-gray-900 dark:text-white flex justify-center ">
      <div className=" shadow md p-2 md:mt-10 mt-3 dark:bg-gray-600 mb-10 rounded-md ">
        <h1 className="text-2xl mt-2 text-center font-bold">
          Login your acccount
        </h1>
        <div className="mt-5 pb-5 ">
          <p className="text-xl text-center">Login</p>
          <form className="mt-3 p-4  " action="">
            <div className="flex flex-col">
              <label className="text-md font-semibold " htmlFor="">
                email
              </label>
              <input
                className=" md:w-[500px] w-full hover:outline-none focus:outline-none bg-transparent border-b border-yellow-100 "
                type="email"
                placeholder="enter your email"
                name="email"
                value={inputdata.email}
                onChange={handlechange}
              />
            </div>
            <div className="flex flex-col mt-4 ">
              <label className="text-md font-semibold " htmlFor="">
                password
              </label>
              <input
                className=" md:w-[500px] w-full hover:outline-none focus:outline-none bg-transparent border-b border-yellow-100 "
                type="password"
                placeholder="enter your password"
                name="password"
                value={inputdata.password}
                onChange={handlechange}
              />
            </div>
            <button
              onClick={handleclick}
              className="mt-10 text-white w-full flex justify-center items-center text-center m-auto rounded-md bg-red-500 p-2 text-xl cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
