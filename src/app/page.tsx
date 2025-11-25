import Link from "next/link";
import { ShoppingBag, Search, TrendingUp, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        <div className=" mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Welcome to
              <span className="text-primary"> ProductStore</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-foreground max-w-3xl mx-auto">
              Discover amazing products at unbeatable prices. Shop with
              confidence and enjoy fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 text-base sm:text-lg"
              >
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg transition-all text-base sm:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-background">
        <div className="  mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose Us?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-foreground">
              Experience the best shopping with our premium features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-card hover:shadow-xl transition-shadow border">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                <ShoppingBag className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-card-foreground mb-2">
                Wide Selection
              </h3>
              <p className="text-sm sm:text-base text-secondary-foreground">
                Thousands of products across multiple categories
              </p>
            </div>

            <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-card hover:shadow-xl transition-shadow border">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                <Search className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-card-foreground mb-2">
                Easy Search
              </h3>
              <p className="text-sm sm:text-base text-secondary-foreground">
                Advanced filtering to find exactly what you need
              </p>
            </div>

            <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-card hover:shadow-xl transition-shadow border">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-card-foreground mb-2">
                Best Prices
              </h3>
              <p className="text-sm sm:text-base text-secondary-foreground">
                Competitive pricing on all our products
              </p>
            </div>

            <div className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-card hover:shadow-xl transition-shadow border">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-card-foreground mb-2">
                Secure Shopping
              </h3>
              <p className="text-sm sm:text-base text-secondary-foreground">
                Safe and secure payment methods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8">
            Browse our collection and find your perfect product today
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 text-base sm:text-lg"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
}
