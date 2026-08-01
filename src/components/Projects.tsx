"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">03.</span>
            Projects
            <span className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800 ml-2" />
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col bg-white dark:bg-zinc-800/50 rounded-xl p-6 border border-zinc-100 dark:border-zinc-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                    {i + 1}
                  </div>
                  <div className="flex gap-3 text-zinc-400 dark:text-zinc-500">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
