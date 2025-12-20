import React from "react";
import beautyData from "../data/beautyData.json";

const MomAndBaby = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">For Mom & Baby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {beautyData.Mom_and_Baby.map((item) => (
          <div
            key={item.id}
            className=" p-4 hover:shadow-lg transition"
          >
            <div className="bg-pink-50 rounded-2xl"><img
              src={item.image}
              alt={item.title}
              className="rounded-xl w-full h-48 object-cover"
            /></div>
            <p className="mt-3 font-medium text-gray-800 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      </div>
      );
      };
      export default MomAndBaby;