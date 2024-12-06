"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SelectLanguage from "./SelectLanguage";
import SelectCategory from "./SelectCategory";
import BusEvents from "@/src/utils/busevent";
import ResultsItems from "./ResultsItems";
import { getSearch } from "@/src/api/news.api";

const isSercheable = (e, prev = "") => {
  console.log(e.target.value, prev);
  return (
    e.keyCode !== 32 &&
    e.target.value.length >= 3 &&
    prev.trim().toLowerCase() !== e.target.value.trim().toLowerCase()
  );
};

const BaseSearchNews = ({ data, show = false }) => {
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(show);
  const refGotoSearch = useRef(null);
  const refPrevValue = useRef("");
  const cbSearch = useCallback((q) => {
    const language = document.getElementById("select-language").value;
    const category = document.getElementById("select-category").value;
    const req = getSearch([category], 10, "publishedAt", q, language);
    req.action.then((res) => {
      // console.log(res);
      setResults(res.articles);
      setShowModal(true);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (refGotoSearch.current) {
      clearTimeout(refGotoSearch.current);
    }
    if (isSercheable(e, refPrevValue.current)) {
      const fnSearcha = () => {
        console.log("search");
        refPrevValue.current = e.target.value;

        cbSearch(e.target.value);
      };

      refGotoSearch.current = setTimeout(fnSearcha, 200);
    }
    // findLocation(refSearch.current.value).then((res) => {
    //   setLocations(res);
    //   setShowModal(true);
    // });
  };
  const handleSelectRsult = (item) => (e) => {
    e.preventDefault();
    // onSelected(item);
    setShowModal(false);
    console.log(item);
    window.open(item.url, "_blank", "noopener,noreferrer");
    // refSearch.current.value = `${item.name}, ${item.state} - ${item.country}`;
  };
  useEffect(() => {
    const fnOpen = () => {
      setIsOpen((prev) => !prev);
    };
    const fnGotoSearch = () => {
      cbSearch(refPrevValue.current);
    };
    BusEvents.on("open-search", fnOpen);
    BusEvents.on("reloadSearch", fnGotoSearch);
    return () => {
      BusEvents.remove("open-search", fnOpen);
      BusEvents.remove("reloadSearch", fnGotoSearch);
    };
  }, [cbSearch]);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id !== "default-search") {
        setShowModal(false);
      }
    });
  }, []);
  
  return isOpen ? (
    <div className="flex flex-col md:flex-row  content-center items-center gap-4 mb-8 hydrated">
      <div className="md:w-[24rem] w-full relative">
        <form className="w-full">
          <div className="flex gap-2">
            <div className="w-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                {"tSearch"}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search News..."
                  required
                  onFocus={() => {
                    if (results.length > 0) {
                      setShowModal(true);
                    }
                  }}
                  onKeyUp={handleSubmit}
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
            <button
              type="button"
              className="md:hidden  py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900"
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          </div>
        </form>
        {showModal && (
          <div
            id="dropdown"
            className="bordered z-10 mt-4 transition-all ease-in-out bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-600 absolute"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {results.length > 0 ? (
                results.map((item, index) => (
                  <ResultsItems
                    key={index}
                    data={item}
                    onClick={handleSelectRsult(item)}
                  />
                ))
              ) : (
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="text-center text-gray-500 dark:text-neutral-400">
                    No results found
                  </p>
                </div>
              )}
              
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-start gap-2">
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <SelectLanguage data={data.languages} />
        <SelectCategory data={data.sources} />
        {/* </Suspense> */}
      </div>
    </div>
  ) : null;
};

export default BaseSearchNews;
