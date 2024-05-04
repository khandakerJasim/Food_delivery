import React, { useEffect, useState } from "react";
import image from "./../../Assets/image/carusol/burger.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [images, setimage] = useState(false);
  const [preview, setpreview] = useState(false);

  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setinputdata({ ...inputdata, [name]: value });
  };
  const url = "http://localhost:3001";

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", inputdata.name);
    formData.append("email", inputdata.email);
    formData.append("phone", inputdata.phone);
    formData.append("password", inputdata.password);
    formData.append("cpassword", inputdata.cpassword);
    formData.append("image", images);

    const response = await axios.post(`${url}/api/register`, formData);
    console.log(response);
    if (response.data.success) {
      setinputdata({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      });
      setimage(false);
    }
  };

  useEffect(() => {
    if (images) {
      setpreview(URL.createObjectURL(images));
    }
  }, [images]);
  return (
    <div className="w-full h-full dark:bg-gray-900 dark:text-white bg-red-50 flex justify-center ">
      <div className=" shadow md p-2 md:mt-10 mt-3 dark:bg-gray-600 bg-gray-200 mb-10 rounded-md ">
        <h1 className="text-2xl mt-2 text-center font-bold">
          Registration your acccount
        </h1>
        <div className="mt-5">
          <p className="text-xl text-center">Registration</p>
          <form className="mt-3 p-4  " action="">
            <div className="flex flex-col">
              <label className="text-md font-semibold " htmlFor="">
                name
              </label>
              <input
                className=" md:w-[500px] w-full hover:outline-none focus:outline-none bg-transparent border-b border-yellow-100 "
                type="text"
                placeholder="enter your name"
                name="name"
                value={inputdata.name}
                onChange={handlechange}
              />
            </div>
            <div className="flex flex-col mt-4 ">
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
                phone
              </label>
              <input
                className=" md:w-[500px] w-full hover:outline-none focus:outline-none bg-transparent border-b border-yellow-100 "
                type="phone"
                placeholder="enter your phone"
                name="phone"
                value={inputdata.phone}
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
            <div className="flex flex-col mt-4 ">
              <label className="text-md font-semibold " htmlFor="">
                confirm password
              </label>
              <input
                className=" md:w-[500px]  w-full hover:outline-none focus:outline-none bg-transparent border-b border-yellow-100 "
                type="password"
                placeholder="enter your confirm password"
                name="cpassword"
                value={inputdata.cpassword}
                onChange={handlechange}
              />
            </div>
            <div className="mt-5 flex items-center  gap-5 ">
              <figure>
                <img
                  className="w-[50px] h-[50px] cursor-pointer rounded-full "
                  src={preview ? preview : image}
                  alt=""
                />
              </figure>
              <div className="relative w-[100px]  items-center h-12 ">
                <input
                  className="  absolute opacity-0 w-[100px] left-0 top-0 
                   flex text-center items-center hover:outline-none focus:outline-none
                    bg-transparent  "
                  type="file"
                  accept=".jpg,.png"
                  id="customFile"
                  onChange={(e) => setimage(e.target.files[0])}
                />
                <label
                  className="absolute left-0 top-0 overflow-hidden "
                  htmlFor="customFile"
                >
                  select profile
                </label>
              </div>
            </div>
            <button
              onClick={handlesubmit}
              className="mt-10 text-white w-full flex justify-center items-center text-center m-auto rounded-md bg-red-500 p-2 text-xl cursor-pointer"
            >
              submit
            </button>
          </form>
          <div className="flex justify-center pb-4 ">
            <p className="gap-2 text-center m-auto flex">
              already have an account?
              <span className="text-green-500 font-bold hover:underline ">
                <Link to="/Login">login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
