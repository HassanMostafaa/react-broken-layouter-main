"use client";

import TypewriterText from "../typewriter-text/TypewriterText";
import { ImageCard, ICardProps } from "./ImageCard";
import { cards } from "./data";
import Layouter from "react-broken-layouter";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A component that renders a grid of cards using React Broken Layouter.
 *
 * Animates the opacity of the grid and its contents when the `cols` prop changes.
 *
 * @example
 * <LayouterGrid cols={2} />
 * @param {{ cols: number }} props
 * @prop {number} cols The number of columns to display in the grid. Defaults to 2.
 * @returns {JSX.Element}
 */
export const LayouterGrid: React.FunctionComponent<{ cols: number }> = ({
  cols = 2,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      className="flex flex-col gap-4 lg-gap-[1vw]"
    >
      <TypewriterText
        text="React Broken Layouter"
        speed={50}
        delay={2}
        className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text text-[18px] lg:text-xl font-bold "
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
            render={({ item }: { item: ICardProps }) => <ImageCard {...item} />}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
