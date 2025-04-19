import Link from "next/link";
import React from "react";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import TypewriterText from "../typewriter-text/TypewriterText";

export const HeaderNavigation = () => {
  return (
    <div className="flex justify-between items-center px-[5%] py-[16px] lg:px-[2vw] lg:py-[2vw]">
      {/* logo */}
      <Link href="/">
        <TypewriterText
          text="React Broken Layouter"
          speed={50}
          className="bg-gradient-to-r from-blue-600  via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-[16px] lg:text-2xl "
        />
      </Link>

      <div className="flex flex-col gap-2 items-center lg:gap-[2vw] lg:flex-row">
        <Link href="/docs" className="link">
          Documentation
        </Link>
        <Link href="/demo" className="link">
          Demo
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
