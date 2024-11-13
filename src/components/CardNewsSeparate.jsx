import Image from "next/image";
import React from "react";

const CardNewsSeparate = () => {
  return (
    <div className="relative bg-white hover:borderx hover:shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hydrated bg-cover mb-4">
      <Image
        className="w-full h-full rounded-xl  object-cover"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        alt="Card Image"
        width={560}
        height={300}
      />
      <div
        className="bottom-0 left-0 w-full h-full flex flex-col rounded-xl justify-end"
      >
        <div className="p-2">
          <p className="text-gray-400">Entertainment</p>
          <h3 className="text-2xl font-bold text-gray-800">
            Title for news Example and questions
          </h3>
          <p className=" text-xs text-gray-500 ">Last updated 5 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default CardNewsSeparate;
