import React from "react";
import beautyData from "../data/beautyData.json";
import TimeForGlow from "../components/TimeForGlow";
import SkinCare from "../components/SkinCare";
import HairCare from "../components/HairCare";
import EyeMakeUp from "../components/EyeMakeUp";
import LipMakeUp from "../components/LipMakeUp"
import MomAndBaby from "../components/MomAndBaby";



const BeautyPage = () => {
  return (
    <div>
      <div className="grid grid-cols-8 sm:overflow-x-visible pb-4">
        {beautyData.categories.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer transition transform"
          >

            <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center shadow-md mx-auto">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
            <p className="mt-2 text-sm font-medium text-center text-gray-700">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Winter Essentials ❄️</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {beautyData.winterEssentials.map((item) => (
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

<TimeForGlow />
<SkinCare />
<HairCare />
<EyeMakeUp/>
<LipMakeUp />
<MomAndBaby/>

    </div>
  );
};

export default BeautyPage;


