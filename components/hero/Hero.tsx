"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "../assets/icons";

interface ICTA {
  title: string;
  href: string;
  target?: string;
}
interface IHeroProps {
  title?: string[];
  subtitle?: string;
  cta1?: ICTA;
  cta2?: ICTA;
}

export const Hero: React.FunctionComponent<IHeroProps> = ({
  cta1,
  cta2,
  subtitle,
  title,
}) => (
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
      {title?.[0]} {title?.[1]}{" "}
      <span className="bg-gradient-to-r from-blue-600  via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text">
        {title?.[2]} {title?.[3]}
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="text-[14px] lg:text-xl text-center w-3/4 mx-auto"
    >
      {subtitle}
    </motion.p>

    {/* CTAs */}
    <div className="flex gap-[16px] flex-wrap justify-center items-stretch lg:gap-[2vw]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {cta1?.href && (
          <Link
            href={cta1?.href}
            target={cta1?.target}
            className="flex gap-1 items-center  whitespace-nowrap text-[16px] lg:text-lg font-semibold bg-blue-600 hover:bg-blue-700 px-[16px] py-[8px] lg:px-[1vw] lg:py-[.5vw] rounded-md text-blue-50"
          >
            {cta1?.title}{" "}
            <span>
              <ArrowRight size={"1vw"} />
            </span>
          </Link>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      >
        {cta2?.href && (
          <Link
            href={cta2?.href}
            target={cta2?.target}
            // className="text-[16px] lg:text-lg  font-semibold bg-blue-50 hover:bg-blue-100 px-[16px] py-[8px] lg:px-[1vw] lg:py-[.5vw] rounded-md border border-blue-600 text-blue-600"
            className="flex gap-1 items-center  whitespace-nowrap text-[16px] lg:text-lg font-semibold bg-blue-100 hover:bg-blue-200 px-[16px] py-[8px] lg:px-[1vw] lg:py-[.5vw] rounded-md text-blue-600"
          >
            {cta2?.title}
          </Link>
        )}
      </motion.div>
    </div>
  </motion.div>
);
