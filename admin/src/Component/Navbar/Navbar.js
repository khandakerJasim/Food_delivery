import React, { useEffect, useState } from "react";
import Logo from "./../../assets/images/log.jpg";

export default function Navbar() {
  const [data, setdata] = useState([]);
  const url = "http://localhost:3001";

  const getdata = async () => {
    const fetchdata = await fetch("http://localhost:3001/api/get");
    const datas = await fetchdata.json();
    console.log(datas);
    setdata(datas.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="w-full h-full dark:bg-gray-800 dark:text-white sticky top-0 z-50 ">
      <div className="flex justify-between md:mx-10 mx-4 ">
        <div className=" py-2 flex items-center md:gap-4 gap-2 ">
          <figure>
            <img
              className="h-[60px] w-[60px] rounded-full  "
              src={Logo}
              alt=""
            />
          </figure>
          <p className="text-md text-blue-500 font-bold cursor-pointer">
            Food corner
          </p>
        </div>
        <div className="flex items-center">
          <h1>joshim</h1>
        </div>

        {/* <div className="flex">
          {data.map((datas) => (
            <div className="flex" key={datas.id}>
              <h1>{datas.name}</h1>
              <img
                className="h-[70px] w-[70px] "
                src={`${url}/uploads/` + datas.image}
                alt=""
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
