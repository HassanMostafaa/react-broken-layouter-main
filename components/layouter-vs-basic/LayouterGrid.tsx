"use client";

import TypewriterText from "../typewriter-text/TypewriterText";
import { Card, ICardProps } from "./Card";
import { cards } from "./data";
import Layouter from "react-broken-layouter";
import { motion, AnimatePresence } from "framer-motion";

export const LayouterGrid: React.FunctionComponent<{ cols: number }> = ({
  cols = 2,
}) => {
  return (
    <div className="flex flex-col gap-4 lg-gap-[1vw]">
      <TypewriterText
        text="React Broken Layouter"
        speed={50}
        delay={2}
        className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-[16px] lg:text-2xl"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={cols} // triggers re-animation when `cols` changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 max-md:p-3 lg:p-[2vw] rounded-3xl bg-neutral-100 dark:bg-neutral-800"
        >
          <Layouter
            cols={cols}
            items={cards}
            getId={(item: ICardProps) => item.id ?? ""}
            render={({ item }: { item: ICardProps }) => <Card {...item} />}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
