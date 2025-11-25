import { create } from "zustand";
import { Product, FilterState } from "@/lib/types";

interface ProductsState {
  // State
  filteredProducts: Product[];
  filters: FilterState;

  // Actions
  setFilteredProducts: (products: Product[]) => void;
  setFilters: (filters: Partial<FilterState>) => void;
  applyFilters: (products: Product[]) => void;
  clearFilters: () => void;
}

const initialFilters: FilterState = {
  category: "",
  search: "",
  priceRange: [0, 1000],
};

export const useProductsStore = create<ProductsState>((set, get) => ({
  filteredProducts: [],
  filters: initialFilters,
  setFilteredProducts: (products) => set({ filteredProducts: products }),

  setFilters: (newFilters) => {
    const updatedFilters = { ...get().filters, ...newFilters };
    set({ filters: updatedFilters });
  },

  applyFilters: (products) => {
    const { filters } = get();
    let filtered = [...products];

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    // Apply price range filter
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    set({ filteredProducts: filtered });
  },

  clearFilters: () => {
    set({ filters: initialFilters });
  },
}));
