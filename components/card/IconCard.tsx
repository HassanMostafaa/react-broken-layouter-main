import React, { FunctionComponent } from "react";

export interface CardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

/**
 * A card component for displaying an icon, title, and subtitle in a styled format.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} [props.icon] - Optional icon to display at the top of the card.
 * @param {string} [props.title] - Optional title to display.
 * @param {string} [props.subtitle] - Optional subtitle to display.
 *
 * @returns {JSX.Element} A styled card component with conditional rendering of the icon, title, and subtitle.
 */
const IconCard: FunctionComponent<CardProps> = ({ subtitle, icon, title }) => {
  return (
    <div className=" p-[16px] h-full lg:p-[2vw] rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 flex flex-col gap-[16px] lg:gap-[1vw]">
      {icon && (
        <span className="bg-blue-100 w-fit rounded-lg p-2 lg:p-[.5vw] text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          {icon}
        </span>
      )}
      {title && <h4 className="text-[16px] lg:text-xl font-bold">{title}</h4>}
      {subtitle && <h4 className="text-[14px] lg:text-lg">{subtitle}</h4>}
    </div>
  );
};

export default IconCard;
