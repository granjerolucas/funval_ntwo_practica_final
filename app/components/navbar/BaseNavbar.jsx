"use client";
import BusEvents from "@/src/utils/busevent";
import Link from "next/link";
import React, { useState } from "react";

const BaseNavbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenSearch = () => {
    setIsOpen(false);
    BusEvents.dispatch("open-search", true);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <Link
          className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white me-4"
          href="/"
          aria-label="Brand"
        >
          News App
        </Link>
        <div className="md:hidden flex gap-2">
          <button
            type="button"
            className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border  text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            id="hs-base-header-collapse"
            aria-expanded="false"
            aria-controls="hs-base-header"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-base-header"
            onClick={onOpenSearch}
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>

            <span className="sr-only">Toggle navigation</span>
          </button>
          <button
            type="button"
            className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border  text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
            id="hs-base-header-collapse"
            aria-expanded="false"
            aria-controls="hs-base-header"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-base-header"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>

            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      <div
        id="hs-base-header"
        className={`hs-collapse ${
          isOpen ? "" : "hidden"
        } overflow-hidden transition-all duration-300 basis-full grow md:block`}
        aria-labelledby="hs-base-header-collapse"
      >
        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="py-2 md:py-4 flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-5">
            {data.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="font-medium capitalize text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                  href={`/news/${item.id}`}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseNavbar;
