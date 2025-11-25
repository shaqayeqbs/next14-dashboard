"use client";

import { Search, X } from "lucide-react";
import Select from "react-select";
import { useMemo, useEffect, useRef } from "react";

interface ProductFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  maxPrice: number;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onPriceChange: (value: number) => void;
  onClearFilters: () => void;
}

export function ProductFilters({
  searchTerm,
  selectedCategory,
  maxPrice,
  categories,
  onSearchChange,
  onCategoryChange,
  onPriceChange,
  onClearFilters,
}: ProductFiltersProps) {
  const rangeRef = useRef<HTMLInputElement>(null);

  // Update range progress for fill effect
  useEffect(() => {
    if (rangeRef.current) {
      const progress = (maxPrice / 1000) * 100;
      rangeRef.current.style.setProperty("--range-progress", `${progress}%`);
    }
  }, [maxPrice]);

  const categoryOptions = useMemo(
    () => [
      { value: "", label: "All Categories" },
      ...categories.map((cat) => ({
        value: cat,
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
      })),
    ],
    [categories]
  );

  const selectedCategoryOption =
    categoryOptions.find((opt) => opt.value === selectedCategory) ||
    categoryOptions[0];

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: "var(--input-bg)",
      borderColor: state.isFocused ? "var(--primary)" : "var(--border)",
      borderWidth: "1px",
      borderRadius: "0.5rem",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(139, 92, 246, 0.2)" : "none",
      padding: "0.125rem",
      fontSize: "0.875rem",
      minHeight: "38px",
      "&:hover": {
        borderColor: "var(--primary)",
      },
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--border)",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      zIndex: 50,
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--primary)"
        : state.isFocused
        ? "var(--secondary)"
        : "transparent",
      color: state.isSelected
        ? "var(--primary-foreground)"
        : "var(--foreground)",
      padding: "0.5rem 0.75rem",
      cursor: "pointer",
      fontSize: "0.875rem",
      "&:active": {
        backgroundColor: "var(--primary)",
      },
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "var(--input-text)",
    }),
    input: (base: any) => ({
      ...base,
      color: "var(--input-text)",
    }),
    placeholder: (base: any) => ({
      ...base,
      color: "var(--foreground)",
      opacity: 0.4,
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "var(--foreground)",
      marginRight: "0.25rem",
      padding: "0.5rem",
      "&:hover": {
        color: "var(--primary)",
      },
    }),
    clearIndicator: (base: any) => ({
      ...base,
      color: "var(--foreground)",
      padding: "0.5rem",
      "&:hover": {
        color: "var(--primary)",
      },
    }),
  };

  return (
    <div className="bg-card-bg rounded-xl shadow-md p-4 border border-border">
      <div className="flex flex-col md:flex-row gap-3 items-end">
        {/* Search */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-1.5">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-input-bg text-input-text"
            />
          </div>
        </div>

        {/* Category with React Select */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-1.5">Category</label>
          <Select
            value={selectedCategoryOption}
            onChange={(option) => onCategoryChange(option?.value || "")}
            options={categoryOptions}
            styles={customStyles}
            isSearchable={false}
            placeholder="Select category..."
          />
        </div>

        {/* Price Range */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-1.5">
            Price: ${maxPrice}
          </label>
          <input
            ref={rangeRef}
            type="range"
            min="0"
            max="1000"
            step="50"
            value={maxPrice}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full h-2 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-foreground/50 mt-0.5">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>

        {/* Clear Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={onClearFilters}
            className="w-full md:w-auto flex items-center justify-center gap-1.5 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium rounded-lg transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
