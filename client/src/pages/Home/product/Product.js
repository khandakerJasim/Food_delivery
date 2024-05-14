import React from "react";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";

export default function Product() {
  const items = useSelector((state) => state.allcarts.items);
  return (
    <div className="h-full w-full dark:bg-gray-600 dark:text-white">
      <div className="md:mx-10 mx-3 py-3">
        <h1 className="text-xl font-bold"> features products</h1>
        <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  ">
          {items.map((item) => (
            <ProductDetails item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
