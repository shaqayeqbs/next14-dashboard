"use client";

import { Button, Link } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center py-10 sm:py-16 md:py-20 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
        Modern Dashboard
        <br />
        Built with Next.js 14
      </h1>
      <p
        className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-12 max-w-3xl mx-auto px-3 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        Experience the power of modern web development with beautiful UI
        components, dark mode, and clean architecture.
      </p>
      <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up px-3"
        style={{ animationDelay: "0.4s" }}
      >
        <Button
          as={Link}
          href="/dashboard"
          color="primary"
          size="lg"
          className="py-5 sm:py-6 md:py-7 px-6 sm:px-8 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
          endContent={
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          }
        >
          View Dashboard
        </Button>
        <Button
          as={Link}
          href="/contact"
          variant="bordered"
          size="lg"
          className="py-5 sm:py-6 md:py-7 px-6 sm:px-8 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-primary/10 active:scale-95"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
