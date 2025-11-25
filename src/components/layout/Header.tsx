"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-navbar-bg text-navbar-text backdrop-blur-md shadow-sm animate-fade-in-down">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <ShoppingCart className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              ProductStore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-sm font-medium text-secondary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
              style={{ ["--hover-color" as any]: "var(--primary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
                (
                  e.currentTarget.querySelector("::after") as any
                )?.style?.setProperty("background-color", "var(--primary)");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="relative text-sm font-medium text-secondary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="relative text-sm font-medium text-secondary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              Contact
            </Link>

            {/* Cart Icon with Badge */}
            <Link
              href="/cart"
              className="relative p-2 text-secondary-foreground transition-all duration-300 hover:scale-110 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              <ShoppingCart className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-cart-badge">
                  {totalItems}
                </span>
              )}
            </Link>

            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Cart Icon Mobile */}
            <Link
              href="/cart"
              className="relative p-2 text-secondary-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-cart-badge">
                  {totalItems}
                </span>
              )}
            </Link>

            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-secondary-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t animate-fade-in-up">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary rounded-lg transition-all duration-300 hover:translate-x-2 hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary rounded-lg transition-all duration-300 hover:translate-x-2 hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary rounded-lg transition-all duration-300 hover:translate-x-2 hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
