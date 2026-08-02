import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-zinc-500 dark:text-zinc-500 font-mono">
      Designed & built by{" "}
      <span className="text-violet-600 dark:text-violet-400">{personalInfo.name}</span>
    </footer>
  );
}
