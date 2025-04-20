"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Copy, Check } from "lucide-react";
import { useTheme } from "../store/useTheme";

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("features");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Register a ref for each section
  const registerSectionRef = (id: string, ref: HTMLDivElement | null) => {
    sectionRefs.current[id] = ref;
  };

  const { theme } = useTheme();

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (sectionRefs.current[sectionId]) {
      const yOffset = -100; // Header height + some padding
      const element = sectionRefs.current[sectionId];
      const y =
        element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  // Handle copy code
  const handleCopyCode = (code: string, section: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentActiveSection = activeSection;

      Object.entries(sectionRefs.current).forEach(([sectionId, sectionRef]) => {
        if (sectionRef) {
          const { offsetTop, offsetHeight } = sectionRef;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentActiveSection = sectionId;
          }
        }
      });

      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div
      className={`w-3/4 mx-auto min-h-screen font-sans transition-colors duration-300 ${
        theme === "dark"
          ? "dark bg-neutral-900 text-neutral-100"
          : "bg-white text-neutral-800"
      }`}
    >
      <div className=" mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`fixed inset-0 z-40 pt-20 px-6 ${
              theme === "dark" ? "bg-neutral-900" : "bg-white"
            }`}
          >
            <nav className="space-y-2 py-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`block w-full text-left p-3 rounded-md transition-colors ${
                    activeSection === section.id
                      ? theme === "dark"
                        ? "bg-neutral-800 text-indigo-400"
                        : "bg-neutral-100 text-indigo-600"
                      : ""
                  }`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden md:block min-w-fit">
            <div
              className={`sticky top-28 rounded-xl p-4 transition-colors ${
                theme === "dark" ? "bg-neutral-800/50" : "bg-neutral-50"
              }`}
            >
              <h2 className="text-lg font-semibold mb-4">Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`flex items-center w-full text-left p-2 text-sm rounded-md transition-all ${
                      activeSection === section.id
                        ? theme === "dark"
                          ? "bg-neutral-700/50 text-indigo-400 font-medium"
                          : "bg-neutral-200/50 text-indigo-600 font-medium"
                        : theme === "dark"
                        ? "hover:bg-neutral-700/30"
                        : "hover:bg-neutral-200/50"
                    } whitespace-nowrap`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    <ChevronRight
                      size={16}
                      className={`mr-1 transition-transform ${
                        activeSection === section.id
                          ? "rotate-90 text-indigo-500"
                          : ""
                      }`}
                    />
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1  ">
            {/* Introduction */}
            <div
              ref={(ref) => registerSectionRef("features", ref)}
              className="space-y-6 mb-12"
            >
              <h2 className="text-3xl font-bold">React Broken Layouter</h2>
              <p className="text-lg opacity-80">
                A lightweight React utility for creating responsive
                masonry-style layouts with automatic height estimation and
                column distribution.
              </p>

              {/* Features */}
              <h3 className="text-2xl font-semibold mt-10">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-105 border ${
                      theme === "dark"
                        ? "border-neutral-700 hover:border-indigo-500/50 bg-neutral-800/30"
                        : "border-neutral-200 hover:border-indigo-300 bg-neutral-50/50"
                    }`}
                  >
                    <div className="flex items-start mb-2">
                      <span className="mr-2 text-xl">{feature.emoji}</span>
                      <h4 className="font-medium">{feature.title}</h4>
                    </div>
                    <p
                      className={`text-sm ${
                        theme === "dark"
                          ? "text-neutral-400"
                          : "text-neutral-600"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Environment Compatibility */}
            <div
              ref={(ref) => registerSectionRef("environment", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Environment Compatibility
              </h3>
              <p>
                This component is primarily designed for client-side use in
                React applications. While it doesn&apos;t use React hooks, it
                relies on client-side calculations for optimal layout and height
                estimation.
              </p>

              <div className="space-y-6">
                <CompatibilitySection
                  title="Recommended Usage"
                  items={recommendedUsage}
                  type="recommended"
                  isDarkMode={theme === "dark"}
                />

                <CompatibilitySection
                  title="Server Component Usage"
                  items={[]}
                  type="neutral"
                  isDarkMode={theme === "dark"}
                >
                  <p className="mb-3">
                    To use this component with server components in frameworks
                    like Next.js, follow these guidelines:
                  </p>
                  <CodeBlock
                    title="Using 'use client' directive"
                    code={`"use client";
import Layouter from "react-broken-layouter";`}
                    language="tsx"
                    onCopy={(code) => handleCopyCode(code, "client-directive")}
                    isCopied={copiedSection === "client-directive"}
                    isDarkMode={theme === "dark"}
                  />
                  <p className="my-3">
                    Provide explicit heights via{" "}
                    <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                      getHeight
                    </code>{" "}
                    or{" "}
                    <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                      estimateHeight
                    </code>{" "}
                    props to ensure consistent layout:
                  </p>
                  <CodeBlock
                    title="Providing explicit heights"
                    code={`<Layouter
  cols={3}
  items={items}
  render={Item}
  getHeight={(item) => item.height} // Provide explicit heights
/>`}
                    language="tsx"
                    onCopy={(code) => handleCopyCode(code, "explicit-heights")}
                    isCopied={copiedSection === "explicit-heights"}
                    isDarkMode={theme === "dark"}
                  />
                </CompatibilitySection>

                <CompatibilitySection
                  title="Not Recommended"
                  items={notRecommendedUsage}
                  type="not-recommended"
                  isDarkMode={theme === "dark"}
                />

                <CompatibilitySection
                  title="Considerations"
                  items={considerations}
                  type="warning"
                  isDarkMode={theme === "dark"}
                />
              </div>
            </div>

            {/* Installation */}
            <div
              ref={(ref) => registerSectionRef("installation", ref)}
              className="space-y-4 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Installation
              </h3>
              <CodeBlock
                title="npm"
                code="npm install react-broken-layouter"
                language="bash"
                onCopy={(code) => handleCopyCode(code, "npm-install")}
                isCopied={copiedSection === "npm-install"}
                isDarkMode={theme === "dark"}
              />
              <CodeBlock
                title="yarn"
                code="yarn add react-broken-layouter"
                language="bash"
                onCopy={(code) => handleCopyCode(code, "yarn-install")}
                isCopied={copiedSection === "yarn-install"}
                isDarkMode={theme === "dark"}
              />
            </div>

            {/* Usage */}
            <div
              ref={(ref) => registerSectionRef("usage", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Usage
              </h3>

              <div>
                <h4 className="text-xl font-medium mb-3">Basic Example</h4>
                <p className="mb-4">
                  A simple setup with a fixed number of columns:
                </p>
                <CodeBlock
                  title="Basic Example"
                  code={`import Layouter from "react-broken-layouter";

const items = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  // ...
];

const Item = ({ item }) => (
  <div style={{ padding: "1rem", background: "#f0f0f0" }}>{item.content}</div>
);

export default function App() {
  return (
    <Layouter
      cols={3} // Fixed column count
      items={items}
      render={Item} // Render component
      gap={16} // Space between items
      getId={(item) => item.id} // Unique key for each item
    />
  );
}`}
                  language="tsx"
                  onCopy={(code) => handleCopyCode(code, "basic-example")}
                  isCopied={copiedSection === "basic-example"}
                  isDarkMode={theme === "dark"}
                />
              </div>

              <div>
                <h4 className="text-xl font-medium mb-3">Custom Render</h4>
                <p className="mb-4">
                  You can provide a custom render function that returns a
                  component to display each item:
                </p>
                <CodeBlock
                  title="Custom Render"
                  code={`const YourComponent = ({ item }) => (
  <div style={{ padding: "1rem", background: "#e0e0e0" }}>{item.content}</div>
);

<Layouter
  cols={3} // Fixed column count
  items={items}
  render={(props) => <YourComponent {...props} />} // Custom render function
  gap={16} // Space between items
  getId={(item) => item.id} // Unique key for each item
/>;`}
                  language="tsx"
                  onCopy={(code) => handleCopyCode(code, "custom-render")}
                  isCopied={copiedSection === "custom-render"}
                  isDarkMode={theme === "dark"}
                />
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    theme === "dark" ? "bg-neutral-800" : "bg-blue-50"
                  } ${theme === "dark" ? "text-blue-300" : "text-blue-800"}`}
                >
                  <strong>Note:</strong> The{" "}
                  <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                    render
                  </code>{" "}
                  prop expects a component that accepts an{" "}
                  <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                    item
                  </code>{" "}
                  prop. Using a function allows dynamic rendering while
                  maintaining compatibility.
                </div>
              </div>
            </div>

            {/* Responsive Layout */}
            <div
              ref={(ref) => registerSectionRef("responsive", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Responsive Layout with <code>breakpoints</code>
              </h3>
              <p className="mb-4">
                Use the{" "}
                <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                  breakpoints
                </code>{" "}
                prop to override the default{" "}
                <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                  cols
                </code>{" "}
                value based on screen width, ideal for responsive layouts:
              </p>
              <CodeBlock
                title="Responsive Layout"
                code={`<Layouter
  cols={1} // Default to 1 column (e.g., for mobile)
  items={items}
  render={Item}
  gap={16}
  getId={(item) => item.id}
  breakpoints={{
    768: { cols: 2 },
    1024: { cols: 3 },
    1440: { cols: 4 },
  }}
/>`}
                language="tsx"
                onCopy={(code) => handleCopyCode(code, "responsive-layout")}
                isCopied={copiedSection === "responsive-layout"}
                isDarkMode={theme === "dark"}
              />
              <p>This dynamically sets:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  1 column below 768px (using{" "}
                  <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                    cols
                  </code>
                  )
                </li>
                <li>2 columns from 768px to 1023px</li>
                <li>3 columns from 1024px to 1439px</li>
                <li>4 columns at 1440px and above</li>
              </ul>

              <div className="mt-8 p-5 rounded-lg border border-dashed transition-colors duration-300 border-neutral-300 dark:border-neutral-700">
                <h4 className="text-lg font-medium mb-3">
                  Responsive Visualization
                </h4>
                <div
                  className={`grid gap-3 transition-all duration-500 ${
                    theme === "dark" ? "text-white" : "text-neutral-700"
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <div
                        key={num}
                        className={`h-24 rounded-md flex items-center justify-center transition-colors ${
                          theme === "dark"
                            ? "bg-neutral-800 hover:bg-neutral-700"
                            : "bg-neutral-100 hover:bg-neutral-200"
                        }`}
                      >
                        Item {num}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs uppercase tracking-wide opacity-70">
                    <span>&lt; 768px: 1 col</span>
                    <span>768-1023px: 2 cols</span>
                    <span>1024-1439px: 3 cols</span>
                    <span>&gt;= 1440px: 4 cols</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Props */}
            <div
              ref={(ref) => registerSectionRef("props", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Props
              </h3>
              <div className="overflow-x-auto">
                <table
                  className={`min-w-full border-collapse ${
                    theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                  }`}
                >
                  <thead>
                    <tr
                      className={
                        theme === "dark" ? "bg-neutral-800" : "bg-neutral-100"
                      }
                    >
                      <th className="py-3 px-4 text-left font-medium">Prop</th>
                      <th className="py-3 px-4 text-left font-medium">Type</th>
                      <th className="py-3 px-4 text-center font-medium">
                        Required
                      </th>
                      <th className="py-3 px-4 text-left font-medium">
                        Default
                      </th>
                      <th className="py-3 px-4 text-left font-medium">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {propsData.map((prop, index) => (
                      <tr
                        key={index}
                        className={`transition-colors ${
                          index % 2 === 0
                            ? theme === "dark"
                              ? "bg-neutral-800/50"
                              : "bg-neutral-50/50"
                            : theme === "dark"
                            ? "bg-neutral-800/30"
                            : "bg-white"
                        }`}
                      >
                        <td className="py-3 px-4 font-mono text-sm">
                          {prop.name}
                        </td>
                        <td className="py-3 px-4 font-mono text-xs">
                          {prop.type}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {prop.required ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500">
                              ✓
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-500/20 text-neutral-500">
                              -
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 font-mono text-sm">
                          {prop.default || "-"}
                        </td>
                        <td className="py-3 px-4 text-sm">
                          {prop.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Utility Functions */}
            <div
              ref={(ref) => registerSectionRef("utility", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Utility Functions
              </h3>
              <p className="mb-4">
                These utility functions simplify common tasks like height
                estimation and ID generation:
              </p>

              <div className="space-y-8">
                {utilityFunctions.map((util, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-lg border transition-colors ${
                      theme === "dark"
                        ? "border-neutral-700 bg-neutral-800/30"
                        : "border-neutral-200 bg-neutral-50"
                    }`}
                  >
                    <h4 className="text-xl font-medium mb-2 font-mono">
                      {util.name}
                    </h4>
                    <p className="mb-4">{util.description}</p>

                    <CodeBlock
                      title={`${util.name} Example`}
                      code={util.example}
                      language="tsx"
                      onCopy={(code) =>
                        handleCopyCode(code, `utility-${index}`)
                      }
                      isCopied={copiedSection === `utility-${index}`}
                      isDarkMode={theme === "dark"}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Experimental Features */}
            <div
              ref={(ref) => registerSectionRef("experimental", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Experimental Features
              </h3>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-yellow-900/30 text-yellow-300"
                    : "bg-yellow-50 text-yellow-800"
                }`}
              >
                <p className="font-medium mb-2">
                  Note: These features are experimental and may not work
                  perfectly in all scenarios. Test thoroughly with your use
                  case.
                </p>
              </div>

              <h4 className="text-xl font-medium mb-3 mt-6">
                Height Estimation
              </h4>
              <p className="mb-4">
                The height estimation features (
                <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                  getHeight
                </code>{" "}
                and{" "}
                <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                  estimateHeight
                </code>
                ) are currently experimental and may be subject to change in
                future versions. These features provide ways to control the
                height of items in the layout:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                    getHeight
                  </code>
                  : Allows you to provide exact heights for items
                </li>
                <li>
                  <code className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700">
                    estimateHeight
                  </code>
                  : Lets you implement custom height estimation logic
                </li>
              </ul>
            </div>

            {/* How It Works */}
            <div
              ref={(ref) => registerSectionRef("how-it-works", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                How It Works
              </h3>

              <p>The Layouter component:</p>

              <ol className="list-decimal pl-5 space-y-3 mt-4">
                <li className="pl-2">
                  Estimates the height of each item based on content length
                </li>
                <li className="pl-2">
                  Distributes items across columns to maintain balanced heights
                </li>
                <li className="pl-2">
                  Renders items in a responsive grid layout
                </li>
              </ol>

              <div
                className={`mt-6 p-6 rounded-lg ${
                  theme === "dark" ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <div className="flex flex-col space-y-4">
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      theme === "dark" ? "bg-neutral-700" : "bg-white"
                    } shadow-sm`}
                  >
                    <h5 className="font-medium mb-2">1. Height Estimation</h5>
                    <div className="flex items-center text-sm">
                      <div
                        className={`w-20 h-6 rounded ${
                          theme === "dark" ? "bg-neutral-600" : "bg-neutral-200"
                        }`}
                      ></div>
                      <span className="mx-2">→</span>
                      <div
                        className={`w-10 h-6 rounded ${
                          theme === "dark" ? "bg-indigo-800" : "bg-indigo-200"
                        } flex items-center justify-center text-xs`}
                      >
                        120px
                      </div>
                    </div>
                  </div>

                  <div
                    className={`px-4 py-3 rounded-lg ${
                      theme === "dark" ? "bg-neutral-700" : "bg-white"
                    } shadow-sm`}
                  >
                    <h5 className="font-medium mb-2">2. Column Distribution</h5>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col space-y-2">
                        <div
                          className={`h-10 rounded ${
                            theme === "dark" ? "bg-blue-800" : "bg-blue-200"
                          }`}
                        ></div>
                        <div
                          className={`h-16 rounded ${
                            theme === "dark" ? "bg-blue-800" : "bg-blue-200"
                          }`}
                        ></div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div
                          className={`h-20 rounded ${
                            theme === "dark" ? "bg-blue-800" : "bg-blue-200"
                          }`}
                        ></div>
                        <div
                          className={`h-8 rounded ${
                            theme === "dark" ? "bg-blue-800" : "bg-blue-200"
                          }`}
                        ></div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <div
                          className={`h-14 rounded ${
                            theme === "dark" ? "bg-blue-800" : "bg-blue-200"
                          }`}
                        ></div>
                        <div
                          className={`h-12 rounded ${
                            theme === "dark" ? "bg-blue-800" : "bg-blue-200"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`px-4 py-3 rounded-lg ${
                      theme === "dark" ? "bg-neutral-700" : "bg-white"
                    } shadow-sm`}
                  >
                    <h5 className="font-medium mb-2">
                      3. Responsive Rendering
                    </h5>
                    <div className="flex space-x-3 items-center">
                      <div className="w-10 text-center text-xs">Small</div>
                      <div className="flex-1 h-6 flex">
                        <div
                          className={`w-full rounded-l ${
                            theme === "dark" ? "bg-purple-800" : "bg-purple-200"
                          } flex items-center justify-center text-xs`}
                        >
                          1 column
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3 items-center mt-2">
                      <div className="w-10 text-center text-xs">Large</div>
                      <div className="flex-1 h-6 flex">
                        <div
                          className={`w-1/3 rounded-l ${
                            theme === "dark" ? "bg-purple-800" : "bg-purple-200"
                          } flex items-center justify-center text-xs`}
                        >
                          col 1
                        </div>
                        <div
                          className={`w-1/3 ${
                            theme === "dark" ? "bg-purple-700" : "bg-purple-300"
                          } flex items-center justify-center text-xs`}
                        >
                          col 2
                        </div>
                        <div
                          className={`w-1/3 rounded-r ${
                            theme === "dark" ? "bg-purple-600" : "bg-purple-400"
                          } flex items-center justify-center text-xs`}
                        >
                          col 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development */}
            <div
              ref={(ref) => registerSectionRef("development", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                Development
              </h3>

              <CodeBlock
                title="Installation & Development"
                code={`# Install dependencies
npm install

# Run development build
npm run dev

# Build for production
npm run build`}
                language="bash"
                onCopy={(code) => handleCopyCode(code, "development")}
                isCopied={copiedSection === "development"}
                isDarkMode={theme === "dark"}
              />
            </div>

            {/* License & Contributing */}
            <div
              ref={(ref) => registerSectionRef("license", ref)}
              className="space-y-6 mb-12"
            >
              <h3 className="text-2xl font-semibold border-b pb-2 border-neutral-200 dark:border-neutral-700">
                License & Contributing
              </h3>

              <div className="space-y-4">
                <p>
                  MIT ©{" "}
                  <a
                    href="https://github.com/HassanMostafa"
                    className="text-indigo-500 hover:underline"
                  >
                    Hassan Mohamed
                  </a>
                </p>

                <h4 className="text-xl font-medium">Contributing</h4>
                <p>
                  We&apos;d love to improve React Broken Layouter with your
                  help! Contributions are welcome—please feel free to submit a
                  Pull Request or open an issue to discuss your ideas.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const CodeBlock: React.FC<{
  title?: string;
  code: string;
  language: string;
  onCopy: (code: string) => void;
  isCopied: boolean;
  isDarkMode: boolean;
}> = ({ title, code, onCopy, isCopied, isDarkMode }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden border ${
        isDarkMode ? "border-neutral-700" : "border-neutral-200"
      }`}
    >
      {title && (
        <div
          className={`px-4 py-2 flex justify-between items-center ${
            isDarkMode ? "bg-neutral-800" : "bg-neutral-100"
          }`}
        >
          <span className="text-sm font-medium">{title}</span>
          <button
            onClick={() => onCopy(code)}
            className={`p-1.5 rounded-md transition-colors ${
              isDarkMode ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
            }`}
            aria-label="Copy code"
          >
            {isCopied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      )}
      <div
        className={`p-4 overflow-x-auto font-mono text-sm whitespace-pre ${
          isDarkMode ? "bg-neutral-900" : "bg-neutral-50"
        }`}
      >
        {code}
      </div>
    </div>
  );
};

const CompatibilitySection: React.FC<{
  title: string;
  items: string[];
  type: "recommended" | "not-recommended" | "warning" | "neutral";
  isDarkMode: boolean;
  children?: React.ReactNode;
}> = ({ title, items, type, isDarkMode, children }) => {
  const getBgColor = () => {
    if (isDarkMode) {
      switch (type) {
        case "recommended":
          return "bg-green-900/20";
        case "not-recommended":
          return "bg-red-900/20";
        case "warning":
          return "bg-yellow-900/20";
        default:
          return "bg-neutral-800";
      }
    } else {
      switch (type) {
        case "recommended":
          return "bg-green-50";
        case "not-recommended":
          return "bg-red-50";
        case "warning":
          return "bg-yellow-50";
        default:
          return "bg-neutral-50";
      }
    }
  };

  const getBorderColor = () => {
    if (isDarkMode) {
      switch (type) {
        case "recommended":
          return "border-green-800";
        case "not-recommended":
          return "border-red-800";
        case "warning":
          return "border-yellow-800";
        default:
          return "border-neutral-700";
      }
    } else {
      switch (type) {
        case "recommended":
          return "border-green-200";
        case "not-recommended":
          return "border-red-200";
        case "warning":
          return "border-yellow-200";
        default:
          return "border-neutral-200";
      }
    }
  };

  const getTextColor = () => {
    if (isDarkMode) {
      switch (type) {
        case "recommended":
          return "text-green-400";
        case "not-recommended":
          return "text-red-400";
        case "warning":
          return "text-yellow-400";
        default:
          return "text-neutral-300";
      }
    } else {
      switch (type) {
        case "recommended":
          return "text-green-700";
        case "not-recommended":
          return "text-red-700";
        case "warning":
          return "text-yellow-700";
        default:
          return "text-neutral-700";
      }
    }
  };

  const getIconClass = () => {
    switch (type) {
      case "recommended":
        return "✅";
      case "not-recommended":
        return "❌";
      case "warning":
        return "⚠️";
      default:
        return "ℹ️";
    }
  };

  return (
    <div
      className={`p-4 rounded-lg border ${getBgColor()} ${getBorderColor()}`}
    >
      <h4 className={`text-lg font-medium mb-3 ${getTextColor()}`}>{title}</h4>
      {items.length > 0 && (
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex">
              <span className="mr-2">{getIconClass()}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

// Data
const sections = [
  { id: "features", title: "Features" },
  { id: "environment", title: "Environment Compatibility" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "responsive", title: "Responsive Layout" },
  { id: "props", title: "Props" },
  { id: "utility", title: "Utility Functions" },
  { id: "experimental", title: "Experimental Features" },
  { id: "how-it-works", title: "How It Works" },
  { id: "development", title: "Development" },
  { id: "license", title: "License & Contributing" },
];

const features = [
  {
    emoji: "🎯",
    title: "Simple and intuitive API",
    description: "Easy to integrate and use with a straightforward API design",
  },
  {
    emoji: "📱",
    title: "Responsive column-based layout",
    description:
      "Adapts to different screen sizes with customizable breakpoints",
  },
  {
    emoji: "📏",
    title: "Automatic height estimation",
    description: "Intelligently calculates optimal item placement",
  },
  {
    emoji: "🎨",
    title: "Customizable gap between items",
    description: "Control spacing between elements for the perfect layout",
  },
  {
    emoji: "🔄",
    title: "Support for dynamic content",
    description: "Handles changing content gracefully",
  },
  {
    emoji: "🚀",
    title: "Zero dependencies",
    description: "Lightweight with no external dependencies except React",
  },
  {
    emoji: "📦",
    title: "TypeScript support",
    description: "Full TypeScript type definitions included",
  },
  {
    emoji: "🛠️",
    title: "Utility functions",
    description: "Helpful utilities for common layout tasks",
  },
];

const recommendedUsage = [
  "Client-side React applications",
  "Browser environments",
  "React 17+ and React 18+",
  "Next.js client components (with 'use client' directive)",
  "Client-side rendered pages",
];

const notRecommendedUsage = [
  "Server Components without 'use client' directive",
  "Server-side rendering without proper client-side hydration",
  "Static site generation without client-side JavaScript",
];

const considerations = [
  "Height estimation is most accurate in client environments",
  "For server-side rendering, consider providing explicit heights via `getHeight` or `estimateHeight` props",
  "Dynamic content may require client-side re-rendering for optimal layout",
];

const propsData = [
  {
    name: "cols",
    type: "number",
    required: true,
    default: "-",
    description:
      "Default number of columns (overridden by breakpoints if provided)",
  },
  {
    name: "breakpoints",
    type: "{ [width: number]: { cols: number } }",
    required: false,
    default: "-",
    description:
      "Map of viewport widths to column counts for responsive behavior",
  },
  {
    name: "items",
    type: "any[]",
    required: true,
    default: "-",
    description: "List of items to display",
  },
  {
    name: "render",
    type: "React.FC<{ item: any }>",
    required: true,
    default: "-",
    description:
      "Component to render each item (can be a function returning a component)",
  },
  {
    name: "gap",
    type: "number",
    required: false,
    default: "16",
    description: "Gap between items (px)",
  },
  {
    name: "getId",
    type: "(item: any) => string | number",
    required: false,
    default: "-",
    description: "Optional function to get unique ID for each item",
  },
  {
    name: "getHeight",
    type: "(item: any) => number",
    required: false,
    default: "-",
    description: "Exact item height (for layout optimization)",
  },
  {
    name: "estimateHeight",
    type: "(item: any) => number",
    required: false,
    default: "-",
    description: "Estimate item height if exact value isn't available",
  },
  {
    name: "mediaHeight",
    type: "number",
    required: false,
    default: "-",
    description: "Additional height buffer (e.g., for images or media content)",
  },
];

const utilityFunctions = [
  {
    name: "heightEstimator",
    description:
      "Estimates the total height based on an array of strings or numbers. Useful for calculating content heights.",
    example: `import { heightEstimator } from "react-broken-layouter";

// Example usage
const content = ["Hello", "World", 100];
const estimatedHeight = heightEstimator(content);
// Returns: (5 * 0.35) + (5 * 0.35) + 100 = 103.5`,
  },
  {
    name: "getRandomId",
    description:
      "Generates a random string ID. Useful for creating unique keys when none are provided.",
    example: `import { getRandomId } from "react-broken-layouter";

// Example usage
const uniqueId = getRandomId();
// Returns something like: "x7f9k2m"`,
  },
  {
    name: "isObject",
    description: "Checks if a value is a plain object (not an array or null).",
    example: `import { isObject } from "react-broken-layouter";

// Example usage
isObject({}); // true
isObject([]); // false
isObject(null); // false
isObject("string"); // false`,
  },
];

export default Documentation;
