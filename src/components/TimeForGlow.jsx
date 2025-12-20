import React from "react";
import Slider from "react-slick";
import beautyData from "../data/beautyData.json";
// import {NextArrow,PrevArrow} from "../components/PrevArrow";


const TimeForGlow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,       // ✅ 5 images visible
    slidesToScroll: 5,     // ✅ next shows next 5 images
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" mx-auto px-5 py-7 relative">
      <h2 className="text-3xl font-bold mb-6">Time for a Glow ✨</h2>

      <Slider {...settings} className="grid grid-col-6">
        {beautyData.Time_For_Glow.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="px-2 w-full h-full object-contain rounded-3xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-5 top-1/2 -translate-y-1/2 z-10
               bg-white shadow-lg rounded-full w-9 h-9
               flex items-center justify-center text-lg"
  >
    ‹
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-5 top-1/2 -translate-y-1/2 z-10
               bg-white shadow-lg rounded-full w-9 h-9
               flex items-center justify-center text-lg"
  >
    ›
  </button>
);

export default TimeForGlow;