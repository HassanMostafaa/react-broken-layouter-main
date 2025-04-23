import { CardProps } from "../card/IconCard";
import { Code, Customiazable, Responsive, Small, Smart } from "../assets/icons";

export const features: CardProps[] = [
  {
    icon: <Code size={"2vw"} />,
    title: "Fast",
    subtitle: "Zero-dependency layout engine for optimal performance.",
  },
  {
    icon: <Responsive size={"2vw"} />,
    title: "Responsive",
    subtitle: "Fully responsive and mobile-friendly design.",
  },
  {
    icon: <Customiazable size={"2vw"} />,
    title: "Customizable",
    subtitle: "Easily control column count and spacing to match your design.",
  },
  {
    icon: <Smart size={"2vw"} />,
    title: "Smart",
    subtitle: "Height estimation ensures smooth and accurate rendering.",
  },
  {
    icon: <Small size={"2vw"} />,
    title: "Lightweight",
    subtitle: "Built with simplicity and speed in mind — minimal overhead.",
  },
];
