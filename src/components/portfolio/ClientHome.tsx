"use client";

import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/sonner";

export function ClientHome() {
  return (
    <>
      <main className="relative min-h-screen text-foreground">
        {/* Page sections in top-to-bottom order */}
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Toaster />
    </>
  );
}
