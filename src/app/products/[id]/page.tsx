"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { productsService } from "@/services/products.service";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productsService.getById(Number(productId)),
  });

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      setAdded(true);
      toast.success(`${product.title.substring(0, 30)}... added to cart!`, {
        position: "bottom-right",
      });
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-red-500 font-medium mb-6 text-xl">
            Product not found
          </p>
          <Link
            href="/dashboard"
            className="text-primary hover:underline font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 sm:gap-3 text-foreground/80 hover:text-foreground mb-6 sm:mb-8 md:mb-10 transition-colors font-semibold text-sm sm:text-base"
        >
          <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          <div className="bg-card-bg rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-border">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-contain"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <span className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-sm sm:text-md font-bold text-primary bg-primary/10 rounded-full shadow-md">
              {product.category}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < Math.floor(product.rating.rate)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-base sm:text-lg font-medium text-foreground">
                {product.rating.rate.toFixed(1)}
              </span>
              <span className="text-sm sm:text-base text-foreground/60">
                ({product.rating.count} reviews)
              </span>
            </div>

            <div className="py-3 sm:py-4 border-y border-border">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                {formatPrice(product.price)}
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                Description
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              style={
                !added
                  ? {
                      backgroundColor: "var(--contact-btn-bg)",
                      color: "var(--contact-btn-text)",
                    }
                  : undefined
              }
              className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105 ${
                added
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "hover:opacity-90"
              }`}
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card-bg rounded-lg border border-border">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xs sm:text-sm">
                    Free Shipping
                  </p>
                  <p className="text-xs text-foreground/60">Orders over $50</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card-bg rounded-lg border border-border">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xs sm:text-sm">
                    Secure Payment
                  </p>
                  <p className="text-xs text-foreground/60">100% Protected</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card-bg rounded-lg border border-border">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-foreground/60">30-day return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
