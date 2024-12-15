import { Github, Instagram, Linkedin, Mail, Twitter, X } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Pratik Kale | kalehub.com
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/PKBOSS26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/pratikkale26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://x.com/pratikkale26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.instagram.com/kalep_26/" target="_blank">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}