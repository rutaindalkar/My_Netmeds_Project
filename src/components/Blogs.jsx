import React from "react";
import beautyData from "../data/beautyData.json";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">

      <div className="flex gap-6 overflow-x-auto pb-4 blog-scroll">
        {beautyData.Blogs_beauty.map((item) => (
          <div
            key={item.id}
            className="min-w-[320px] bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[190px] object-cover"
              />

              {/* bottom shadow */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* TEXT */}
            <div className="p-4">
              <p className="text-gray-800 text-sm font-medium leading-snug">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Blogs;
