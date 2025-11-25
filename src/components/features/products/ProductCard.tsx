"use client";

import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    toast.success(`${product.title.substring(0, 30)}... added to cart!`, {
      position: "bottom-right",
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group flex flex-col bg-card-bg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border h-full hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
      {/* Image - Clickable */}
      <Link
        href={`/products/${product.id}`}
        className="block relative rounded-t-2xl overflow-hidden"
        style={{ height: "280px" }}
      >
        <div className="relative w-full h-full p-6 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain transition-all duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5 space-y-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-bold line-clamp-2 min-h-[3.5rem] hover:text-primary transition-all duration-300 cursor-pointer group-hover:scale-105 origin-left">
            {product.title}
          </h3>
        </Link>

        {/* Category Badge */}
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full capitalize transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 cursor-pointer">
            {product.category}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-all duration-300 hover:scale-125 ${
                  i < Math.round(product.rating.rate)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 transition-opacity duration-300 group-hover:opacity-100 opacity-80">
            ({product.rating.count})
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <p className="text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-110 origin-left">
            {formatPrice(product.price)}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 hover:scale-105 hover:shadow-lg active:scale-95"
            disabled={added}
          >
            {added ? (
              "Added!"
            ) : (
              <>
                <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
