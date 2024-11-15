import CardNews from "@/src/components/CardNews";
import React from "react";
import WeatherCurrent from "./WeatherCurrent";

const HomeSearch2 = () => {
  return (
    <div className="grid grid-cols-[8fr_6fr] gap-4 ">
      <div>
        <CardNews />
      </div>
      <div className="flex flex-col gap-4">
        <WeatherCurrent />
        <div className="flex h-[16rem] gap-4">
        <CardNews />
        <CardNews />
        </div>
      </div>
    </div>
  );
};

export default HomeSearch2;
