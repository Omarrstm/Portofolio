"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-indigo-600 dark:text-indigo-400 font-mono text-sm mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-zinc-900 dark:text-white mb-3"
        >
          {personalInfo.name}.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-bold text-zinc-500 dark:text-zinc-400 mb-6"
        >
          {personalInfo.title}.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-5 mt-10"
        >
          {[
            { icon: <FiGithub size={20} />, href: personalInfo.github },
            { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin },
            { icon: <FiMail size={20} />, href: `mailto:${personalInfo.email}` },
          ].map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
