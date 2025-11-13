import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white border border-gray-300 rounded-full shadow-md px-4 py-6 w-full max-w-[900px] mx-auto my-10 gap-4 md:gap-0">
      
      <div className="flex flex-col flex-1 px-2">
        <label className="text-[10px] font-bold mb-1">Where</label>
        <input
          type="text"
          placeholder="Search destinations"
          className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
        />
      </div>

      <div className="hidden md:block h-6 border-l border-gray-300"></div>

      <div className="flex flex-col flex-1 px-2">
        <label className="text-[10px] font-bold mb-1">When</label>
        <input
          type="text"
          placeholder="Add dates"
          className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
        />
      </div>

      <div className="hidden md:block h-6 border-l border-gray-300"></div>

      <div className="flex flex-col flex-1 px-2 relative">
        <label className="text-[10px] font-bold mb-1">Who</label>
        <input
          type="text"
          placeholder="Add guests"
          className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full pr-10"
        />
        <div className="absolute right-2 bottom-2">
          <div className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition cursor-pointer">
            <Search size={18} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
