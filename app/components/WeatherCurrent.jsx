"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import CurrentTime from "./weather_current/CurrentTime";
import { GeoApi, IpApi } from "@/src/api";
import { useWeatherFilter } from "@/src/query/weather.query";
import SkeletonCT from "./weather_current/SkeletonCT";

const WeatherCurrent = () => {
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState({
    lat: "",
    lon: "",
    exclude: "minutely,hourly,alerts",
    units: "imperial",
    city: "",
  });
  const [convertion, setConvertion] = useState("celsius");
  const { data: weatherFilter } = useWeatherFilter(
    search.lat,
    search.lon,
    search.exclude,
    search.units,
    convertion
  );
  useEffect(() => {
    let requestPosition = false;
    let req;
    let reqGeo;
    if (navigator.permissions) {
      const getSimplePosition = () => {
        req = IpApi.getCurrentInfo();
        req.action.then((res) => {
          setLoaded(true);
          setSearch((prev) => {
            return {
              ...prev,
              lat: res.lat,
              lon: res.lon,
              city: `${res.city}, ${res.regionName} - ${res.country}`,
            };
          });
        });
      };
      const obtenerUbicacion = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              reqGeo = GeoApi.getCurrentInfo(lat, lon);
              reqGeo.action.then((res) => {
                setLoaded(true);
                setSearch((prev) => {
                  return {
                    ...prev,
                    lat,
                    lon,
                    city: `${res.city}, ${res.principalSubdivision} - ${res.countryName}`,
                  };
                });
              });
            },
            (error) => {
              console.error("Error al obtener la ubicación:", error);
            }
          );
        } else {
          console.error(
            "La geolocalización no es compatible en este navegador."
          );
        }
      };
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          obtenerUbicacion();
        } else if (result.state === "prompt") {
          obtenerUbicacion();
        } else {
          // requestPosition = true;
          console.log("Permiso de geolocalización denegado.");
          getSimplePosition();
        }

        // Escucha los cambios en los permisos
        result.onchange = () => {
          if (result.state === "granted") {
            obtenerUbicacion();
          } else {
            requestPosition = true;
            getSimplePosition();
            console.log("Permiso de geolocalización denegado.");
          }
        };
      });
    } else {
      requestPosition = true;
      getSimplePosition();
      console.error("La API de permisos no es compatible en este navegador.");
    }

    return () => {
      if (req) {
        req.cancel();
      }
      if (reqGeo) {
        reqGeo.cancel();
      }
    };
  }, []);
  return (
    <div className="hydrated">
      <div
        className={`hidden w-full md:h-[16rem] p-6  md:p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-slate-700 dark:border-gray-700   md:flex md:flex-col gap-4 justify-center relative ${"bg"}`}
        style={{
          backgroundBlendMode: "overlay",
          backgroundImage: "bimage",
        }}
      >
        {loaded && weatherFilter !== undefined ? (
          <div className="flex flex-col md:gap-y-2 text-center">
            <div className="flex justify-between gap-x-2 items-center md:text-2xl font-semibold">
              <span className="w-[70%] text-left">{search.city}</span>
              <CurrentTime />
            </div>
            <div className="flex justify-between gap-x-2 items-center">
              <Image
                className="self-center"
                src={`https://openweathermap.org/img/wn/${weatherFilter.current.weather[0].icon}@4x.png`}
                alt="icon"
                width={100}
                height={100}
              />
              <h5 className="text-[2rem] md:text-[4rem] font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {Math.round(weatherFilter.current.temp)}°C
              </h5>
              <div className="flex flex-col gap-y-2 text-center">
                <p className="md:text-2xl font-semibold text-gray-700 dark:text-gray-400 capitalize">
                  {weatherFilter.current.weather[0].description}
                </p>
                <p className="text-sm font-normal text-gray-700 dark:text-gray-200">
                  {dayjs().format("ddd DD MMM")}
                </p>
              </div>
            </div>
            <div className="hidden md:grid md:grid-cols-4 gap-4 ">
              <div className="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Wind status
                </h5>
                <p className=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  {weatherFilter.current.wind_speed}&nbsp;
                  <span className="font-normal">mph&nbsp;</span>
                  <span
                    className={`wi wi-wind rotate-[${weatherFilter.current.wind_deg}deg] `}
                  ></span>
                </p>
              </div>
              <div className="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 className=" text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Humidity
                </h5>
                <p className=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  {weatherFilter.current.humidity}{" "}
                  <span className="font-normal">%</span>
                </p>
              </div>
              <div className="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 className=" text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Visibility
                </h5>
                <p className=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  {(weatherFilter.current.visibility * 0.000621371).toFixed(2)}{" "}
                  <span className="font-normal">miles</span>
                </p>
              </div>
              <div className="  bg-white  dark:bg-slate-700 dark:border-gray-700 mb-4   gap-4 justify-center relative">
                <h5 className=" text-base font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                  Air Pressure
                </h5>
                <p className=" text-sm font-bold text-gray-800 dark:text-gray-800 text-center">
                  {weatherFilter.current.pressure}{" "}
                  <span className="font-normal">mb</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <SkeletonCT />
        )}
      </div>
    </div>
  );
};

export default WeatherCurrent;
