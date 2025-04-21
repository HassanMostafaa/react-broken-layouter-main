"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BasicGrid } from "./BasicGrid";
import { LayouterGrid } from "./LayouterGrid";

export const LayouterVsBasic: React.FunctionComponent = () => {
  const [numberOfColumns, setNumberOfColumns] = useState<number>(2);

  return (
    <div className="px-[5%] py-[16px] lg:px-[2vw] lg:py-[2vw]">
      <motion.p
        className="text-[14px] flex items-center gap-2 lg:text-lg"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Text Part 1 */}
        <motion.span
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          Stack your items into
        </motion.span>

        {/* Number Control */}
        <motion.span
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="flex w-fit px-2 gap-3 items-center bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-200 mx-2 rounded-md"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span
            onClick={() => {
              if (numberOfColumns > 1) setNumberOfColumns(numberOfColumns - 1);
            }}
            className="text-[16px] lg:text-xl cursor-pointer"
          >
            {"<"}
          </span>

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={numberOfColumns}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="translate-y-.5 text-[16px] lg:text-xl"
            >
              {numberOfColumns}
            </motion.span>
          </AnimatePresence>

          <span
            onClick={() => {
              if (numberOfColumns < 4) setNumberOfColumns(numberOfColumns + 1);
            }}
            className="text-[16px] lg:text-xl cursor-pointer"
          >
            {">"}
          </span>
        </motion.span>

        {/* Text Part 2 */}
        <motion.span
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
        >
          {numberOfColumns === 1 ? "column" : "columns"}
        </motion.span>
      </motion.p>

      <div className="flex mt-12 gap-8 max-lg:flex-col items-start">
        <div className="flex-1">
          <LayouterGrid cols={numberOfColumns} />
        </div>
        <div className="flex-1">
          <BasicGrid cols={numberOfColumns} />
        </div>
      </div>
    </div>
  );
};
