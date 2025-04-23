"use client";
import React, { JSX } from "react";

import { FeatureHeader } from "./FeatureHeader";
import { FeaturesGrid } from "./FeaturesGrid";

/**
 * A component that displays a feature header and a features grid.
 *
 * @returns {JSX.Element} A JSX element containing the feature header and features grid.
 */
export const Features: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 py-[40px] lg:py-[4vw] flex flex-col gap-[32px] lg:gap-[4vw]">
      <FeatureHeader />
      <FeaturesGrid />
    </div>
  );
};
