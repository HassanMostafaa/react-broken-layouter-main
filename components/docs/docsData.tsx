// docsData.ts
import { DocsSection } from "./types";

export const docsSections: DocsSection[] = [
  {
    title: "React Broken Layouter",
    content:
      "A lightweight React utility for creating responsive masonry-style layouts with automatic height estimation and column distribution.",
  },
  {
    title: "Features",
    content: (
      <ul>
        <li>🎯 Simple and intuitive API</li>
        <li>📱 Responsive column-based layout</li>
        <li>📏 Automatic height estimation</li>
        <li>🎨 Customizable gap between items</li>
        <li>🔄 Support for dynamic content</li>
        <li>🚀 Zero dependencies (except React)</li>
        <li>📦 TypeScript support</li>
        <li>🛠️ Utility functions for common tasks</li>
      </ul>
    ),
  },
  {
    title: "Installation",
    content: (
      <pre>
        <code>{`npm install react-broken-layouter
# or
yarn add react-broken-layouter`}</code>
      </pre>
    ),
  },
  {
    title: "Basic Usage",
    content: (
      <pre>
        <code>{`import Layouter from "react-broken-layouter";

const items = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
];

const Item = ({ item }) => (
  <div style={{ padding: "1rem", background: "#f0f0f0" }}>
    {item.content}
  </div>
);

export default function App() {
  return (
    <Layouter
      cols={3}
      items={items}
      render={Item}
      gap={16}
      getId={(item) => item.id}
    />
  );
}`}</code>
      </pre>
    ),
  },
  {
    title: "Responsive Layout with breakpoints",
    content: (
      <pre>
        <code>{`<Layouter
  cols={1}
  items={items}
  render={Item}
  gap={16}
  getId={(item) => item.id}
  breakpoints={{
    768: { cols: 2 },
    1024: { cols: 3 },
    1440: { cols: 4 },
  }}
/>`}</code>
      </pre>
    ),
  },
  // You can continue the rest similarly (Props, Server Usage, Contributing, etc.)
];
