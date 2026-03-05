"use client";

import { useState } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="grid grid-cols-3 sm:grid-cols-10 gap-x-5">
      <div className="col-span-2 sm:col-span-8 relative flex items-center">
        <IoSearchOutline className="absolute left-4 text-text-black/40 text-base pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search products..."
          className="border w-full border-text-black text-text-black pl-10 pr-10 py-3 text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] placeholder:normal-case placeholder:tracking-normal focus:outline-none transition-all duration-300 cursor-text"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-4 text-text-black/40 hover:text-text-black transition-colors duration-200"
          >
            <IoCloseOutline className="text-base" />
          </button>
        )}
      </div>
      <button className="col-span-1 sm:col-span-2 border border-text-black text-text-black px-3 sm:px-6 py-3 text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] hover:bg-text-black hover:text-green-primary transition-all duration-300 cursor-pointer">
        Search
      </button>
    </div>
  );
}
