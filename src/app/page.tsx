"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GridPattern from "@/components/ui/grid-pattern";
import ScrollToTop from "@/components/ui/scroll-to-top";
import GithubStarButton from "@/components/ui/github-star-button";
import Navbar from "@/components/sections/navbar";
import Header from "@/components/sections/header";
import AboutMe from "@/components/sections/about-me";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Achievements from "@/components/sections/achievements";
import Github from "@/components/sections/github";
import LeetCode from "@/components/sections/leetcode";
// import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { BootSequence } from "@/components/BootSequence";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <BootSequence onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full"
        >
          <GridPattern />
          <div className="aurora-glow" aria-hidden />

          <main className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 md:px-8 pb-16 space-y-10 pt-20 lg:pt-24">
            <Navbar />
            <ScrollToTop />
            <GithubStarButton />

            <section id="header">
              <Header />
            </section>
            <section id="about">
              <AboutMe />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="github">
              <Github />
            </section>
            <section id="leetcode">
              <LeetCode />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="achievements">
              <Achievements />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="education">
              <Education />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </main>
        </motion.div>
      )}
    </div>
  );
}
