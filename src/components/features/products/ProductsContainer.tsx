"use client";

import { useProducts } from "@/hooks/useProducts";
import { useState, useMemo } from "react";
import { ProductGrid } from "./ProductGrid";
import { ProductFilters } from "./ProductFiltters";

export function ProductsContainer() {
  const { data: products, isLoading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);

  const categories = useMemo(() => {
    if (!products) return [];
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchTerm, selectedCategory, maxPrice]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setMaxPrice(1000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-200">
        <p className="text-red-600 font-semibold text-lg">
          Failed to load products
        </p>
        <p className="text-sm text-red-500 mt-2">Please try again later</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ProductFilters
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        maxPrice={maxPrice}
        categories={categories}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onPriceChange={setMaxPrice}
        onClearFilters={handleClearFilters}
      />

      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-foreground/70">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredProducts.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-foreground">
            {products?.length || 0}
          </span>{" "}
          products
        </p>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
