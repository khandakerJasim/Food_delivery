import React from "react";
import cake from "./../../../Assets/image/menu/cake.jpg";
import deserts from "./../../../Assets/image/menu/deserts.jpg";
import noodles from "./../../../Assets/image/menu/noodles.jpg";
import rolls from "./../../../Assets/image/menu/rolls.jpg";
import salad from "./../../../Assets/image/menu/salad.jpg";
import sandwitch from "./../../../Assets/image/menu/sandwitch.jpg";
import vegetable from "./../../../Assets/image/menu/vegetable.jpg";
import pasta from "./../../../Assets/image/carusol/pasta.jpg";

export default function Itemmenu() {
  const menus = [
    { id: 1, image: cake, name: "Cake" },
    { id: 2, image: deserts, name: "Deserts" },
    { id: 3, image: noodles, name: "Noodles" },
    { id: 4, image: rolls, name: "Rolls" },
    { id: 5, image: salad, name: "Salad" },
    { id: 6, image: sandwitch, name: "Sandwitch" },
    { id: 7, image: vegetable, name: "Vegetable" },
    { id: 8, image: pasta, name: "Pasta" },
  ];
  return (
    <div className="h-full w-full dark:bg-gray-700 dark:text-white py-5">
      <div className="md:mx-10 mx-4">
        <p className="text-2xl font-bold">Explore our menu</p>
        <p className="w-[300px] mt-3 text-sm font-semibold ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A temporibus
          minus eligendi nam dolorem error? Dignissimos, temporibus! Voluptates,
          odio. Officia?
        </p>
        <div className="flex flex-wrap text-center md:gap-12 w-full gap-3 py-5 items-center mt-4 ">
          {menus.map((menu) => {
            return (
              <div key={menu.id}>
                <div className="">
                  <figure className=" border-2 border-yellow-600 rounded-full overflow-hidden active:border-red-500 ">
                    <img
                      className="h-[100px] cursor-pointer w-[100px] rounded-full hover:scale-125 duration-500 "
                      src={menu.image}
                      alt=""
                    />
                  </figure>
                  <p className="text-md pt-3 cursor-pointer font-bold">
                    {menu.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
