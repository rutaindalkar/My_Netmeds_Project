import React from "react";
import beautyData from "../data/beautyData.json";

const Fragrances = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {beautyData.Fragrances_beauty.map((item) => (
          <div
            key={item.id}
            className=" p-4 hover:shadow-lg transition"
          >
            <div className="rounded-2xl">
              <img
              src={item.image}
              className="rounded-xl w-full h-48 object-cover"
            /></div>
            </div>
        ))}
      </div>
      </div>
      );
      };
      export default Fragrances;