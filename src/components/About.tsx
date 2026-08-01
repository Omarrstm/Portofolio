"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">01.</span>
            About Me
            <span className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-2" />
          </h2>
          <div className="mt-8 max-w-2xl">
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-8">
              {personalInfo.about}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-8 mt-4">
              Based in{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                {personalInfo.location}
              </span>
              . Always open to discussing new opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
