"use client";
import React from "react";
import { motion } from "framer-motion";
import { cards } from "./data";
import SimpleCard from "./SimpleCard";

export const DemoPageFeaturesSection: React.FunctionComponent = () => {
  return (
    <div className="px-[5%] py-10 lg:py-[4vw] flex flex-col gap-6 lg:gap-[3vw]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-[18px] font-semibold lg:text-5xl text-center"
      >
        Key{" "}
        <span className="bg-gradient-to-r from-blue-600  via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text">
          Enhances
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[3vw]">
        {cards?.map((card) => (
          <SimpleCard key={card?.id} {...card} />
        ))}
      </div>
    </div>
  );
};
