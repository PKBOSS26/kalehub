"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { TypewriterEffect } from "../ui/typewriter-effect";

const roles = ["Full-Stack Developer", "Web3 Enthusiast", "Startup Dreamer"];

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4"
      >
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Pratik Kale
          </span>
        </h1>
        <TypewriterEffect words={roles} className="mb-8 text-xl sm:text-2xl" />
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          A passionate developer focused on building beautiful, functional, and
          user-centered digital experiences.
        </p>
        <Button size="lg" onClick={scrollToProjects}>
          Explore My Projects
        </Button>
      </motion.div>
      <motion.div
        className="absolute bottom-8"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}