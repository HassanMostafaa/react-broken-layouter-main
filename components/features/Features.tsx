"use client";
import React from "react";

import { FeatureHeader } from "./FeatureHeader";
import { FeaturesGrid } from "./FeaturesGrid";

export const Features = () => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 py-[40px] lg:py-[4vw] flex flex-col gap-[32px] lg:gap-[4vw]">
      <FeatureHeader />
      <FeaturesGrid />
    </div>
  );
};
