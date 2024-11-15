import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

const WeatherCurrent = () => {
  return (
    <div>
      <div
        class={`blockx w-full  p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-slate-700 dark:border-gray-700   flex flex-col gap-4 justify-center relative ${"bg"}`}
        style={{
          backgroundBlendMode: "overlay",
          backgroundImage: "bimage",
        }}
      >
        {true && (
          <div className="flex flex-col gap-y-2 text-center">
            <div className="flex justify-between gap-x-2 items-center text-2xl font-semibold">
              <span>Iquitos, Peru san juan</span>
              <span>19:20pm</span>
            </div>
            <div className="flex justify-between gap-x-2 items-center">
              <Image
                src={`https://openweathermap.org/img/wn/10d@4x.png`}
                alt="icon"
                className="self-center"
                width={100}
                height={100}
              />
              <h5 className=" text-[4rem] font-bold tracking-tight text-gray-900 dark:text-white text-center">
                23 °C
              </h5>
              <div className="flex flex-col gap-y-2 text-center">
                <p className="text-2xl font-semibold text-gray-700 dark:text-gray-400 capitalize">
                  Muy Nublado
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-200">
                  Today {dayjs().format("ddd DD MMM")}
                </p>
              
              </div>
            </div>
            <div class="grid grid-cols-4 gap-4 ">
              <div class="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 class="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Wind status
                </h5>
                <p class=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  11.5 <span class="font-normal">mph</span><span class="wi wi-wind rotate-[170deg] "></span>
                </p>
              
              </div>
              <div class="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 class=" text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Humidity
                </h5>
                <p class=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  76 <span class="font-normal">%</span>
                </p>
              </div>
              <div class="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 class=" text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Visibility
                </h5>
                <p class=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  6.21 <span class="font-normal">miles</span>
                </p>
              </div>
              <div class="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 class=" text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Air Pressure
                </h5>
                <p class=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  1014 <span class="font-normal">mb</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCurrent;
