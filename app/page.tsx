import { Features } from "@/components/features/Features";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title={["Create", "Beautiful", "Masonry", "Layouts"]}
        subtitle="A lightweight React utility for creating responsive masonry-style layouts
      with automatic height estimation and column distribution."
        cta1={{ title: "Get Started", href: "/docs", target: "_self" }}
        cta2={{ title: "View Demo", href: "/demo", target: "_self" }}
      />
      <Features />
    </>
  );
}
