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
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 p-4 shadow-md rounded-md bg-green-400">
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
              <img src={item.imgdata} alt="" />
              <h1>{item.price}</h1>
            </div>
          );
        })}
        <h1>joshim uddin</h1>
      </div>
    </div>
  );
}
