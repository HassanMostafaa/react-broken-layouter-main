import { Github } from "../assets/icons";
import { Package } from "../assets/icons/Package";
import TypewriterText from "../typewriter-text/TypewriterText";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="p-[24px] lg:p-[1vw] flex justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        License MIT{" "}
        <a
          href="https://github.com/HassanMostafaa"
          className="bg-gradient-to-r from-blue-600  via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          &copy; Hassan Mohamed
        </a>
      </span>

      <div className="flex gap-8 lg:gap-[1.5vw]">
        <a
          href="https://github.com/HassanMostafaa/react-broken-layouter"
          className="text-md flex justify-center items-center gap-2 lg:gap-[.5vw] bg-neutral-100 dark:bg-neutral-800 p-2 rounded-md"
        >
          <TypewriterText text="GITHUB" className="text-[14px] lg:text-sm" />
          <Github size={"1vw"} />
        </a>
        <a
          href="https://www.npmjs.com/package/react-broken-layouter"
          className="text-md flex justify-center items-center gap-2 lg:gap-[.5vw] bg-neutral-100 dark:bg-neutral-800 p-2 rounded-md "
        >
          <TypewriterText text="NPM" className="text-[14px] lg:text-sm" />
          <Package size={"1vw"} />
        </a>
      </div>
    </footer>
  );
};
