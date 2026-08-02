"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <p className="text-violet-600 dark:text-violet-400 font-mono text-sm mb-3">05. What&apos;s next?</p>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            I&apos;m currently looking for new opportunities. Whether you have a question, a project idea,
            or just want to say hi — my inbox is always open.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-8 py-3 rounded-2xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 font-medium hover:bg-gradient-to-r hover:from-violet-600 hover:to-rose-500 hover:text-white hover:border-transparent transition-all"
          >
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-10 text-zinc-500 dark:text-zinc-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
