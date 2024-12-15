"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Upcoming Project",
    description: "A full-stack web application built with Next.js and TypeScript, featuring a ...",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*hCOOFW4sQi1jz7-2u1sJGQ.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    demo: "#",
    github: "https://github.com/PKBOSS26/",
  },
  {
    title: "Real-time Chat Application",
    description: "Feature-rich chat application with WebSocket integration, supporting multiple rooms and direct messaging",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    demo: "https://speedenchat.kalehub.com",
    github: "https://github.com/PKBOSS26/Realtime-Chat-App",
  },
  {
    title: "Instagram Clone",
    description: "Instagram clone built with MERN stack, Tailwind CSS",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/07/instagram-freepik-1688884010.jpg",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://psocial.kalehub.com/login",
    github: "https://github.com/PKBOSS26/PSocial-InstaClone-",
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}