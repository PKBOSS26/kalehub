"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card } from "../ui/card";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/030/684/144/non_2x/computer-2d-cartoon-vector-illustration-on-white-backgroun-free-photo.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <Card className="p-6">
            <h2 className="mb-6 text-3xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi, I’m Pratik Kale, a Web Developer and Data Science student at IIT Madras passionate about building scalable web applications.
                 With expertise in TypeScript, React, Node.js, AWS, Docker and Kubernates I specialize in crafting user-centric solutions.
              </p>
              
              <p>
              I’m currently exploring Web3, working on innovative SaaS projects, and refining my DSA skills. My long-term goal is to launch
               a tech startup and make a meaningful impact in the tech world.
              </p>
              <br />
              <h2 className="mb-6 text-3xl font-bold">What I Bring</h2>
              <p>
              - Expertise in Web Development with a focus on scalable and maintainable solutions.
              </p>

              <p>
              - A growth mindset, always eager to learn and adapt to new technologies.
              </p>

              <p>
              - Strong problem-solving skills backed by a structured approach to tackling challenges.
              </p>

            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}