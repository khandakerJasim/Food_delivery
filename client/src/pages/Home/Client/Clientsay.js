import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Clientcard from "./Clientcard/Clientcard";
const data = [
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/man-with-camera_23-2147689324.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "Mike rock",
    category:
      "Summer bangladesh is a small country. it is very  import for us .we know about the country",
  },
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/pretty-lady-model-short-blue-dress-hat-with-retrocamera-her-hands-white_231208-4353.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "Jenny mike",
    category:
      "Summer bangladesh is a small country. it is very  import for us .we know about the country",
  },
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/cheerful-handsome-man-eyeglasses-looks-photos-camera_8353-6509.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "John Smith",
    category:
      "Summer bangladesh is a small country. it is very  import for us .we know about the country",
  },
  {
    id: 1001,
    image:
      "https://img.freepik.com/free-photo/brunette-female-traveler-with-backpack-holds-compact-photo-camera_613910-10432.jpg?size=626&ext=jpg&ga=GA1.2.834674141.1685085168&semt=locales",
    name: "Jane sim",
    category:
      "Summer bangladesh is a small country. it is very  import for us .we know about the country",
  },
];

export default function Clientsay() {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      //   {
      //     breakpoint: 300,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-700 text-white dark:bg-gradient-to-r from-gray-800 to-gray-600 dark:text-white">
      <div className="mx-10 py-10 ">
        <h1 className="text-2xl text-center m-auto  w-[200px] uppercase font-extrabold relative before:absolute before:block before:left-0 before:top-9 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:hover:scale-x-100 before:transition before:duration-300 before:ease-in-out before:origin-top-middle before:content-[' ']  ">
          Client to say
        </h1>

        <div className="mt-10 ">
          <Slider {...settings}>
            {data.map((datas) => (
              <div className="" key={datas.id}>
                <Clientcard datas={datas} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
