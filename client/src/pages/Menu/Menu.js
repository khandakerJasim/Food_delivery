import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Gituser } from "../../Redux/Features/Userslice";

export default function Menu() {
  // const dispatch = useDispatch();
  // const items = useSelector((state) => state.allcarts.items);

  const items = useSelector((state) => state.allcarts.items);

  return (
    <div>
      {/* <button onClick={() => dispatch(Gituser())}>click</button> */}
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 p-4 shadow-md rounded-md ">
        {/* {items.map((item) => {
          return (
            <div>
              <h1>{item.price}</h1>
            </div>
          );
        })} */}

        {items.map((item) => {
          return (
            <div>
              <img
                className="h-[200px] w-full object-cover "
                src={item.imgdata}
                alt=""
              />
              <h1 className="text-xl font-bold text-red-500 ">{item.dish}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
