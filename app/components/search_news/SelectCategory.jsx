import BusEvents from "@/src/utils/busevent";
import React from "react";

const SelectCategory = ({ data }) => {
  return (
    <select
      id="select-category"
      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 capitalize"
      defaultValue=""
      onChange={() => {
        BusEvents.dispatch("reloadSearch", true);
      }}
    >
      <option value="" selected>All Categories</option>
      {data.map((item) => {
        return (
          <option key={item.id} value={item.id} className="capitalize">
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCategory;
