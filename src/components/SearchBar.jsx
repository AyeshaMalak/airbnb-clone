import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white border border-gray-300 rounded-full shadow-md px-4 py-4 w-full max-w-250 mx-auto my-20 ">
      
      <div className="flex flex-col px-4">
        <label className="text-3xs font-bold ">Where</label>
        <input type="text" placeholder="Search destinations"
          className="outline-none text-sm text-gray-700 placeholder-gray-400"  />
      </div>

      <div className="h-6 border-l border-gray-300"></div>

     
      <div className="flex flex-col px-4">
        <label className="text-3xs font-bold">When</label>
        <input
          type="text"
          placeholder="Add dates"
          className="outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

    
      <div className="h-6 border-l border-gray-300"></div>

     
      <div className="flex flex-col px-4 relative w-full max-w-[150px]">
        <label className="text-3xs font-bold">Who</label>
        <input
          type="text"
          placeholder="Add guests"
          className="outline-none text-sm text-gray-700 placeholder-gray-400 pr-8"
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
