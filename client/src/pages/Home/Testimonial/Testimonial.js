import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonial() {
  const blogs = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/tasty-hamburger-menu-arrangement-with-copy-space_23-2148614055.jpg?t=st=1715019493~exp=1715023093~hmac=67fbf09fcb0a3dd950afe2f6b0a839c134f40b966ed406aa2571899153fd6311&w=900",
      name: "Burger",
      date: "22 March 2024",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables_24972-2328.jpg?t=st=1715019426~exp=1715023026~hmac=b66b99702877194be2e45f150ec67369edfa4e1dad41e22df91c3cb275036b28&w=900",
      name: "Beef",
      date: "02 March 2024",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/green-salad-with-grilled-chicken-breast_255424-4479.jpg?w=900",
      name: "Chicken",
      date: "17 March 2024",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-photo/fried-noodles-plate_756748-29371.jpg?w=900",
      name: "Noodles",
      date: "19 March 2024",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?w=740",
      name: "Pizza",
      date: "20 March 2023",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
    },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-500 text-white dark:bg-gradient-to-r from-gray-800 to-gray-900 dark:text-gray-100">
      <div className="py-10">
        <h1 className="text-2xl text-center m-auto  w-[200px] uppercase font-extrabold relative before:absolute before:block before:left-0 before:top-9 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:ease-in-out before:origin-top-middle before:content-[' ']  ">
          Our Blog
        </h1>
        <div className="mt-10 mx-auto justify-center flex flex-col items-center ">
          <div className="container mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 55,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {blogs.map(({ id, image, name, description, date }) => (
                <SwiperSlide>
                  <div className="hero border rounded-md" key={id}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <img
                        src={image}
                        className="h-[500px] w-full object-cover  rounded-md"
                        alt=""
                      />
                      <div>
                        <h1 className="text-sm font-bold">
                          <span className="hover:text-red-500 text-white ">
                            #{name},
                          </span>{" "}
                          {date}
                        </h1>
                        <p className="py-6 font-bold  hover:text-red-500 text-white cursor-pointer">
                          {description}
                        </p>
                        <div>
                          <button className=" text-white mt-10 mb-10 lg:w-48 underline  decoration-[10px]  decoration-red-600">
                            + READ MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
