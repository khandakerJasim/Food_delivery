import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Removecart,
  Increment,
  Decrement,
} from "../../Redux/Features/Productslice";

export default function Cart() {
  const { carts } = useSelector((state) => state.allcarts);
  const dispatch = useDispatch();
  const totalqnty = carts.reduce((prevqnty, item) => prevqnty + item.qnty, 0);
  const [totalprice, settotalprice] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => {
    let totalprice = 0;
    carts.map((elem) => {
      totalprice = Number(elem.price * elem.qnty) + totalprice;
    });
    settotalprice(totalprice);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className=" bg-white text-gray-700">
      <div className=" md:w-full h-full  flex justify-center p-4">
        <h1 className="text-center  text-2xl font-bold">shopping cart</h1>

        {carts.length === 0 ? (
          <div className="mt-10">
            <h1 className="text-center text-2xl font-bold ">
              the cart is empty
            </h1>
          </div>
        ) : (
          <div className="  mt-10 py-10  ">
            <table className="  ">
              <thead>
                <tr className=" flex items-center border-b-2 gap-[100px] justify-between ">
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>quantity</th>
                  <th>total amount</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((c) => (
                  <div key={c.id}>
                    <tr className=" flex mt-3  border-b space-x-[50px] border items-center p-2  ">
                      <td>
                        <div>
                          <figure>
                            <img
                              className="w-[70px] h-[70px] rounded-full "
                              src={c.imgdata}
                              alt=""
                            />
                          </figure>
                        </div>
                      </td>
                      <td>
                        <div>{c.dish}</div>
                      </td>
                      <td>
                        <div>{c.price}</div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <button onClick={() => dispatch(Decrement(c))}>
                            -{" "}
                          </button>
                          <input
                            className="w-[50px] text-center border border-gray-400 rounded-md "
                            type="text"
                            value={c.qnty}
                          />
                          <button onClick={() => dispatch(Increment(c))}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          className=""
                          onClick={() => dispatch(Removecart(c))}
                        >
                          remove
                        </button>
                      </td>
                      <td>{c.price * c.qnty}</td>
                    </tr>
                  </div>
                ))}
              </tbody>
              <div className="">
                <p> totalquantity: {totalqnty}</p>
                <p>totalprice:{totalprice}</p>
              </div>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
