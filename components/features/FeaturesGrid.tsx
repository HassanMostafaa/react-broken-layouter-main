import { motion } from "framer-motion";
import { features } from "./data";
import FeatureCard from "../card/Card";

export const FeaturesGrid: React.FunctionComponent = () => (
  <div>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-[90%] lg:w-3/4  mx-auto grid grid-cols-1 justify-center items-stretch text-neutral-700 dark:text-neutral-100 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[2vw]"
    >
      {features?.map((card, index) => (
        <motion.div
          key={card.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.2, duration: 0.8 },
            },
          }}
        >
          <FeatureCard {...card} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);
