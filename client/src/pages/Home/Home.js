import React from "react";
import Hero from "./carusel/Hero";
import Itemmenu from "./item_menu/Itemmenu";
import Product from "./product/Product";

export default function Home() {
  return (
    <div>
      <Hero />
      <Itemmenu />
      <Product />
    </div>
  );
}
