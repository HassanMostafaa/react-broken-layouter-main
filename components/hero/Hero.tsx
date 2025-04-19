"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "../assets/icons";

export const Hero: React.FunctionComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="min-h-[40vh] py-[2vw] flex flex-col justify-center items-center gap-[24px] lg:gap-[3vw]"
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-[18px] font-semibold lg:text-5xl text-center"
    >
      Create Beautiful{" "}
      <span className="bg-gradient-to-r from-blue-600  via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text">
        Masonry Layouts
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="text-[14px] lg:text-xl text-center w-3/4 mx-auto"
    >
      A lightweight React utility for creating responsive masonry-style layouts
      with automatic height estimation and column distribution.
    </motion.p>

    {/* CTAs */}
    <div className="flex gap-[16px] flex-wrap justify-center items-center lg:gap-[2vw]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link
          href={"/docs"}
          className="flex gap-1 items-center  whitespace-nowrap text-[16px] lg:text-lg font-semibold bg-blue-600 hover:bg-blue-700 px-[16px] py-[8px] lg:px-[1vw] lg:py-[.5vw] rounded-md text-blue-50"
        >
          Get started{" "}
          <span>
            <ArrowRight size={"1vw"} />
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      >
        <Link
          href={"/demo"}
          className="text-[16px] lg:text-lg font-semibold bg-blue-50 hover:bg-blue-100 px-[16px] py-[8px] lg:px-[1vw] lg:py-[.5vw] rounded-md border border-blue-600 text-blue-600"
        >
          View demo
        </Link>
      </motion.div>
    </div>
  </motion.div>
);
