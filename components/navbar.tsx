"use client";

import { motion } from "framer-motion";
import { Code2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-16 items-center justify-between px-8">
        <Link
          href="#home"
          className="text-xl font-bold"
          onClick={(e) => scrollToSection(e, "#home")}
        >
          <span className="flex items-center">
          <Code2 className="mr-2 h-6 w-6" />
            Kalehub
          </span>
        </Link>
        <div className="hidden gap-6 md:flex">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => scrollToSection(e, href)}
            >
              {label}
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </motion.nav>
  );
}