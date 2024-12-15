import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}