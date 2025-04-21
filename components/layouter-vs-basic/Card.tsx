import Image from "next/image";

export interface ICardProps {
  title?: string;
  description?: string;
  image?: string;
  id?: string;
}

export const Card: React.FunctionComponent<ICardProps> = ({
  description,
  image,
  title,
}) => (
  <div className="flex border h-fit border-neutral-300 dark:border-neutral-800 flex-col gap-4 lg:gap-[1vw] bg-neutral-50 dark:bg-neutral-900 p-4 lg:p-[1vw] rounded-2xl">
    {image && (
      <div className="relative h-[160px] lg:h-[10vw] w-full">
        <Image
          src={image}
          alt={title || ""}
          className="rounded-lg object-cover"
          fill
          loading="lazy"
        />
      </div>
    )}
    {title && <h3 className="text-[18px] lg:text-xl font-bold">{title}</h3>}
    {description && <p className="text-[14px] lg:text-lg">{description}</p>}
  </div>
);
