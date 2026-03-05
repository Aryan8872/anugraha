"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function FilterBar() {
  const [activeFilters, setActiveFilters] = useState<
    Record<string, string | null>
  >({});

  const filters = [
    {
      name: "Category",
      options: ["T-Shirts", "Hoodies", "Jackets", "Sweatshirts"],
    },
    {
      name: "Color",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      name: "Collections",
      options: ["Summer", "Winter", "Spring", "Fall"],
    },
  ];

  const selectOption = (filterName: string, option: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterName]: prev[filterName] === option ? null : option,
    }));
  };

  return (
    <div className="hidden sm:flex flex-row gap-5">
      {filters.map((filter, i) => {
        const selected = activeFilters[filter.name];
        const isActive = !!selected;
        return (
          <div key={i} className="group/filter-option relative flex flex-col">
            <span
              className={`flex items-center gap-2 border px-3 sm:px-6 py-3 text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] cursor-pointer transition-colors duration-200 ${
                isActive
                  ? "border-text-black bg-text-black text-green-primary"
                  : "border-text-black text-text-black"
              }`}
            >
              {selected || filter.name}
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-primary inline-block" />
              )}
              <MdKeyboardArrowDown className="text-lg group-hover/filter-option:rotate-180 transition-all duration-300 ml-auto" />
            </span>
            <div className="hidden group-hover/filter-option:flex flex-col absolute top-full left-0 min-w-full bg-white border border-text-black text-[10px] md:text-xs font-medium uppercase tracking-[0.1em] cursor-pointer z-20">
              {filter.options.map((option, j) => (
                <div
                  key={j}
                  onClick={() => selectOption(filter.name, option)}
                  className={`w-full flex flex-row items-center justify-between px-4 py-2.5 transition-all duration-200 ${
                    selected === option
                      ? "bg-text-black text-green-primary"
                      : "hover:text-green-primary hover:bg-text-black"
                  }`}
                >
                  {option}
                  {selected === option && (
                    <span className="w-1.5 h-1.5 rounded-full bg-green-primary inline-block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Clear all filters */}
      {Object.values(activeFilters).some(Boolean) && (
        <button
          onClick={() => setActiveFilters({})}
          className="text-[9px] font-medium uppercase tracking-[0.1em] text-text-black/40 hover:text-text-black underline underline-offset-2 transition-colors duration-200 self-center"
        >
          Clear all
        </button>
      )}
    </div>
  );
}
