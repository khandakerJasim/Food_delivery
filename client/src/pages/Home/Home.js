import React from "react";
import Hero from "./carusel/Hero";
import Itemmenu from "./item_menu/Itemmenu";
import Product from "./product/Product";
import Testimonial from "./Testimonial/Testimonial";
import Clientsay from "./Client/Clientsay";

export default function Home() {
  return (
    <div>
      <Hero />
      <Itemmenu />
      <Product />
      <Testimonial />
      <Clientsay />
    </div>
  );
}
