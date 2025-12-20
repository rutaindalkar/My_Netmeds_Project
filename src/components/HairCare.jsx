import React from "react";
import beautyData from "../data/beautyData.json";
import Slider from "react-slick";

const HairCare = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mt-10 mb-6">
        Hair Care Essentials
      </h2>
      <Slider {...settings}>
        {beautyData.Hair_Care_Essentials.map((item) => (
          <div key={item.id} className="px-2">
            <div className="p-4 bg-pink-50 rounded-2xl hover:shadow-lg transition">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-full h-48 object-cover"
              />
              <p className="mt-3 font-medium text-gray-800 text-center">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20
               bg-white shadow-lg rounded-full
               w-10 h-10 flex items-center justify-center
               hover:bg-pink-100 transition"
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-20
               bg-white shadow-lg rounded-full
               w-10 h-10 flex items-center justify-center
               hover:bg-pink-100 transition"
  >
    ›
  </button>
);



export default HairCare;
