"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ChevronDown, Mail, FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { ABOUT_ME, SOCIAL_LINKS } from "@/components/constants/data";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { AboutTerminal } from "@/components/ui/AboutTerminal";

// =============================================
// SOCIAL BUTTONS DATA
// =============================================
const SOCIAL_BUTTONS = [
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.leetcode,
    label: "LeetCode",
    icon: <SiLeetcode className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.resume,
    label: "Resume",
    icon: (
      <>
        <FileText className="w-5 h-5" /> Resume
      </>
    ),
    className: "flex items-center gap-2 font-medium px-6",
  },
  {
    href: SOCIAL_LINKS.email,
    label: "Email",
    icon: (
      <>
        <Mail className="w-5 h-5" /> Email
      </>
    ),
    className: "flex items-center gap-2 font-medium px-6",
  },
];

const handleSpecialNavigation = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  if (!href) return;
  const trimmed = href.trim();
  if (
    typeof window !== "undefined" &&
    (trimmed.startsWith("mailto:") || trimmed.startsWith("tel:"))
  ) {
    event.preventDefault();
    window.location.href = trimmed;
  }
};

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="about" ref={sectionRef} className="pb-12 space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="section-title">About.</h2>
      </div>

      <div className="space-y-10">
        {/* Try me hint */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-2 md:justify-start"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-base font-bold text-accent"
          >
            Try me!
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            click & type
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="flex shrink-0"
          >
            <ChevronDown className="h-5 w-5 text-accent animate-bounce" />
          </motion.div>
        </motion.div>

        {/* Grid: terminal | cat bio */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Terminal */}
          <div className="flex min-h-[320px] justify-center lg:justify-start sm:min-h-[380px]">
            <TerminalWindow />
          </div>

          {/* Right: Cat bio */}
          <div className="flex min-h-[320px] items-stretch sm:min-h-[380px]">
            <AboutTerminal isInView={isInView} />
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          {SOCIAL_BUTTONS.filter(
            (btn) => btn.href && btn.href.trim() !== ""
          ).map((btn) => {
            const href = btn.href.trim();
            const isExternal = href.startsWith("http");
            const isSpecial =
              href.startsWith("mailto:") || href.startsWith("tel:");

            const baseClass = `inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-4 py-2 text-sm font-medium text-foreground/80 tracking-wide transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(var(--accent),0.2)] hover:-translate-y-1 ${btn.className || ""}`;

            if (isExternal) {
              return (
                <Link
                  key={btn.label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={baseClass}
                  aria-label={btn.label}
                >
                  {btn.icon}
                </Link>
              );
            }

            return (
              <a
                key={btn.label}
                href={href}
                onClick={(event) =>
                  isSpecial && handleSpecialNavigation(event, href)
                }
                className={baseClass}
                aria-label={btn.label}
              >
                {btn.icon}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
