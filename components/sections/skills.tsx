"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "../ui/card";
import {
  Code2,
  Database,
  Key,
  Server,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "Socket.io",
      "WebSockets",
      "REST APIs",
      "Serverless Functions",
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis (Pub/Sub)"
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: [
      "Docker",
      "Kubernetes",
      "AWS (EC2, S3)",
      "Git & GitHub",
      "Turborepo",
      "CI/CD Pipelines",
      "NGINX",
    ],
  },
  {
    title: "Web3 Technologies",
    icon: Key,
    skills: [
      "MetaMask",
      "Blockchain Basics",
      
    ],
  },
];


export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 justify-center: space-between">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <div className="mb-4 flex items-center gap-2">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}