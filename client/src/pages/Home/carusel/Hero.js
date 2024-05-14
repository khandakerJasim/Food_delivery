import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "./../../../Assets/image/carusol/Beef-ruti.jpg";
import img2 from "./../../../Assets/image/carusol/burger.jpg";
import img3 from "./../../../Assets/image/carusol/fried-chicken.jpg";
import img4 from "./../../../Assets/image/carusol/pasta.jpg";
import img5 from "./../../../Assets/image/carusol/pizza.jpg";

export default function Hero() {
  const images = [
    {
      id: 1,
      image: img1,
      name: "Beefruti",
    },
    {
      id: 2,
      image: img2,
      name: "burger",
    },
    {
      id: 3,
      image: img3,
      name: "fried-chicken",
    },
    {
      id: 4,
      image: img4,
      name: "pasta",
    },
    {
      id: 5,
      image: img5,
      name: "pizza",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 3000, easing: "ease-in-cubic", once: true });
  });
  return (
    <div className="w-full h-full mx-auto">
      <div>
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative">
                <img
                  className="h-[300px] md:h-[700px] w-full  object-cover  "
                  src={img.image}
                  alt=""
                />
                <div className="absolute md:top-[200px] top-5 px-[50px]   md:w-[600px] md:pl-[150px] text-white ">
                  <h1 className="text-3xl font-bold">{img.name}</h1>
                  <p className="md:mt-2 mt-0 font-bold text-sm md:text-2xl">
                    order your <br />
                    <span> favourite food here</span>
                  </p>
                  <h1 className="md:text-md  text-sm font-semibold mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo consequatur deserunt veritatis sapiente
                    praesentium? Officiis ab ipsum facere reprehenderit odio
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere, nostrum.
                  </h1>
                  <Link to="/">
                    <button
                      data-aos="fade-up"
                      className="bg-red-500 text-white md:mt-4 mt-2 text-md font-semibold p-2 rounded-md  "
                    >
                      view menu
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
