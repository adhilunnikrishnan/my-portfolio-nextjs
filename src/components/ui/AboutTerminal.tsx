'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DEFAULT_ABOUT_TEXT =
  "Hi, I’m Adhil Unnikrishnan P, a backend developer with a strong focus on building reliable, scalable, and secure server-side applications. I enjoy solving complex problems and turning ideas into efficient APIs and systems. Passionate about developing secure authentication flows, robust RESTful APIs, and intelligent data-driven applications. I enjoy crafting backend systems that are scalable, maintainable, and built with clean, modern architecture.";

const COMMAND_DELAY_MS = 600;

interface AboutTerminalProps {
  fullText?: string;
  typingSpeed?: number;
  isInView?: boolean;
}

export function AboutTerminal({
  fullText = DEFAULT_ABOUT_TEXT,
  typingSpeed = 15,
  isInView = true,
}: AboutTerminalProps) {
  const [typedText, setTypedText] = useState('');
  const [commandExecuted, setCommandExecuted] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setCommandExecuted(true), COMMAND_DELAY_MS);
    return () => clearTimeout(t);
  }, [isInView]);

  useEffect(() => {
    if (!commandExecuted) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [commandExecuted, fullText, typingSpeed]);

  const isTyping = commandExecuted && typedText.length < fullText.length;
  const isComplete = commandExecuted && typedText.length >= fullText.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex h-full min-h-[320px] max-w-3xl flex-col overflow-hidden rounded-2xl border-2 border-accent/30 bg-background/50 backdrop-blur-md sm:min-h-[380px] shadow-xl"
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-4 font-mono text-xs text-accent/70">
          adhil.bio
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4 font-mono text-sm leading-relaxed sm:p-6">
        <div className="shrink-0 text-accent">$ cat about.txt</div>
        <div className="mt-3 min-h-0 flex-1 overflow-y-auto text-foreground/80 selection:bg-accent/30">
          {commandExecuted && typedText.length > 0 ? typedText : '\u00A0'}
          {isTyping && <span className="animate-pulse text-accent">_</span>}
          {isComplete && (
            <span className="ml-1 animate-pulse text-accent">█</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
