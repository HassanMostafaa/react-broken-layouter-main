import React, { FunctionComponent } from "react";

export interface CardProps {
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
const SimpleCard: FunctionComponent<CardProps> = ({ subtitle, title }) => {
  return (
    <div className="text-center h-fit p-[16px] lg:p-[2vw] shadow-md rounded-3xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-800 flex flex-col  gap-[16px] lg:gap-[1vw]">
      {title && (
        <h4 className="text-[16px] lg:text-xl font-extrabold">{title}</h4>
      )}
      {subtitle && <h4 className="text-[14px] lg:text-base">{subtitle}</h4>}
    </div>
  );
};

export default SimpleCard;
