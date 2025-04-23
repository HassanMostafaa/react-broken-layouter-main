"use client";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";
import { HeaderNavigation } from "@/components/header-navigation/HeaderNavigation";
import { useTheme } from "@/components/store/useTheme";
import { useLayoutEffect } from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme();
  useLayoutEffect(() => {
    setTimeout(() => {
      // get theme from localStorage
      const theme = localStorage.getItem("theme");
      if (theme) {
        setTheme(theme as "light" | "dark");

        document.documentElement.classList.toggle("dark", theme === "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
        document.documentElement.classList.toggle("dark", false);
      }
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>
          React Broken Layouter — Effortless Masonry Layouts for React
        </title>
        <meta
          name="title"
          content="React Broken Layouter — Effortless Masonry Layouts for React"
        />
        <meta
          name="description"
          content="Create responsive, masonry-style layouts in React with zero config. Supports breakpoints, dynamic content, and column balancing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://react-broken-layouter.vercel.app/"
        />
        <meta
          property="og:title"
          content="React Broken Layouter — Effortless Masonry Layouts for React"
        />
        <meta
          property="og:description"
          content="Create responsive, masonry-style layouts in React with zero config."
        />
        <meta
          property="og:image"
          content="https://react-broken-layouter.vercel.app/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://react-broken-layouter.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="React Broken Layouter — Effortless Masonry Layouts for React"
        />
        <meta
          name="twitter:description"
          content="Create responsive, masonry-style layouts in React with zero config."
        />
        <meta
          name="twitter:image"
          content="https://react-broken-layouter.vercel.app/twitter-card.png"
        />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/rbl.png" />
        <link rel="apple-touch-icon" href="/rbl.png" />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://react-broken-layouter.vercel.app/"
        />
      </Head>

      <body
        className={`${
          !theme ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000`}
      >
        <div className="min-h-screen flex flex-col justify-between">
          <HeaderNavigation />
          <div className="min-h-[80vh]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
