type Card = {
  id: string;
  title: string;
  subtitle: string;
};

export const cards: Card[] = [
  {
    id: "height-distributions",
    title: "Height Distributions",
    subtitle:
      "It automatically distributes items to maintain balanced column heights.",
  },
  {
    id: "responsive-breakpoints",
    title: "Responsive Breakpoints",
    subtitle:
      "Built-in support for responsive breakpoints to adjust columns based on screen size",
  },
  {
    id: "dynamic-content",
    title: "Dynamic Content",
    subtitle:
      "Handles dynamic content and updates layout automatically when items change.",
  },
];
