import TypewriterText from "../typewriter-text/TypewriterText";

export const FeatureHeader: React.FunctionComponent = () => (
  <div className="flex flex-col gap-[16px] lg:gap-[.5vw]">
    <h2 className="text-[16px] lg:text-3xl text-center font-semibold">
      <span className="bg-gradient-to-r from-blue-600  via-purple-700 to-indigo-400 inline-block text-transparent bg-clip-text">
        Powerful Features
      </span>
    </h2>
    <TypewriterText
      text="Everything you need to create stunning layouts"
      className="text-center text-[14px] text-neutral-500 dark:text-neutral-100 lg:text-lg"
      speed={50}
    />
  </div>
);
