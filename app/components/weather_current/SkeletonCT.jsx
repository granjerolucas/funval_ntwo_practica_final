import React from "react";

const SkeletonCT = () => {
  return (
    <div className="flex animate-pulse">
      <div className=" flex flex-col gap-2 w-full">
        <div className="grid grid-cols-[3fr_2fr_1fr] gap-2">
          <div className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
          <div></div>
          <div className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="w-full h-28 bg-gray-200 rounded-lg dark:bg-neutral-700"></div>
          <div className="w-full h-28 bg-gray-200 rounded-lg dark:bg-neutral-700"></div>
          <div className="w-full h-28 bg-gray-200 rounded-lg dark:bg-neutral-700"></div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="w-full h-16 bg-gray-200 rounded-lg dark:bg-neutral-700"></div>
          <div className="w-full h-16 bg-gray-200 rounded-lg dark:bg-neutral-700"></div>
          <div className="w-full h-16 bg-gray-200 rounded-lg dark:bg-neutral-700"></div>
          <div className="w-full h-16 bg-gray-200 rounded-lg dark:bg-neutral-700"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCT;
