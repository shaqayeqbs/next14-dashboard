import { Metadata } from "next";
import { ProductsContainer } from "@/components/features/products/ProductsContainer";

export const metadata: Metadata = {
  title: "Dashboard | Product Store",
  description: "Browse and filter products",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 md:py-8">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-1.5 sm:mb-2">
            Browse Products
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1.5 sm:mb-2">
            Product Dashboard
          </h1>
          <p className="text-sm sm:text-base text-foreground/70">
            Discover and filter through our collection
          </p>
        </div>
        <ProductsContainer />
      </div>
    </div>
  );
}
