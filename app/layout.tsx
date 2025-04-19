"use client";
import "./globals.css";
import { HeaderNavigation } from "@/components/header-navigation/HeaderNavigation";
import { useTheme } from "@/components/store/useTheme";
import { useLayoutEffect } from "react";

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
      <body
        className={`${
          !theme ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000`}
      >
        <HeaderNavigation />
        {children}
      </body>
    </html>
  );
}
