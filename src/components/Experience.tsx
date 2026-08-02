"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-3">
            <span className="text-violet-600 dark:text-violet-400 font-mono text-lg">04.</span>
            Experience & Education
            <span className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-2" />
          </h2>
          <div className="mt-8 space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 border border-zinc-100 dark:border-zinc-700/50"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{exp.role}</h3>
                    <p className="text-violet-600 dark:text-violet-400 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                      <span className="text-violet-500 mt-1 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 border border-zinc-100 dark:border-zinc-700/50"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-violet-600 dark:text-violet-400 text-sm">{edu.school}</p>
                    {edu.gpa && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
