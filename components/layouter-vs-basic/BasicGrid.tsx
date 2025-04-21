"use client";

import { Card } from "./Card";
import { cards } from "./data";
import { motion } from "framer-motion";

export const BasicGrid: React.FunctionComponent<{ cols: number }> = ({
  cols = 2,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[18px] lg:text-xl text-neutral-800 dark:text-neutral-100 font-bold ">
        CSS Grid
      </h3>

      <div
        className="grid gap-4 p-8 max-md:p-3 lg:p-[2vw] rounded-3xl bg-neutral-100 dark:bg-neutral-800"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(100px, 1fr))`,
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Card {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
