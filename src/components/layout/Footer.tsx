import Link from "next/link";
import { ShoppingCart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text mt-auto animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 animate-slide-in-left">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <ShoppingCart className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                ProductStore
              </span>
            </div>
            <p className="text-sm opacity-90 transition-opacity duration-300 hover:opacity-100">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block hover:scale-105"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block hover:scale-105"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block hover:scale-105"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2 inline-block hover:scale-105">
                Electronics
              </li>
              <li className="hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2 inline-block hover:scale-105">
                Jewelry
              </li>
              <li className="hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2 inline-block hover:scale-105">
                Men&apos;s Clothing
              </li>
              <li className="hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2 inline-block hover:scale-105">
                Women&apos;s Clothing
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-pointer group">
                <Mail className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  contact@productstore.com
                </span>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-pointer group">
                <Phone className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-all duration-300 cursor-pointer group">
                <MapPin className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  123 Store St, City, Country
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-sm text-center opacity-80 transition-opacity duration-300 hover:opacity-100">
          <p>
            &copy; {new Date().getFullYear()} ProductStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
