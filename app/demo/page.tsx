"use client";
import { DemoPageFeaturesSection } from "@/components/demo-page-features-section/DemoPageFeaturesSection";
import { Hero } from "@/components/hero/Hero";
import { LayouterVsBasic } from "@/components/layouter-vs-basic/LayouterVsBasic";
import React from "react";

export default function NextjsPage() {
  return (
    <div className="flex flex-col gap-8 lg:gap-[4vw]">
      <Hero
        title={["Built-in", "vs.", "Better"]}
        subtitle="Explore how our grid library simplifies layout building compared to native CSS Grid, with better structure and maintainability"
      />
      <LayouterVsBasic />
      <DemoPageFeaturesSection />
    </div>
  );
}
