import { Zap, Shield, Palette } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Next.js 14 and optimized for performance.",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description: "Fully typed with TypeScript and Zod validation.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Stunning UI with NextUI and dark/light mode.",
  },
];

export function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-8 sm:py-12 md:py-16">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="text-center group p-4 sm:p-5 md:p-6 rounded-2xl transition-all duration-500 hover:bg-secondary/30 hover:-translate-y-2 hover:shadow-xl cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
              <Icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 text-primary transition-all duration-500 group-hover:scale-110" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 transition-all duration-300 group-hover:text-primary group-hover:scale-105">
              {feature.title}
            </h3>
            <p className="text-foreground/80 text-sm sm:text-base md:text-lg transition-all duration-300 group-hover:text-foreground">
              {feature.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}
