"use client";

import { motion } from "framer-motion";
import CourseEditorialGallery from "../../components/course-editorial-gallery";
import SiteShell from "../../components/site-shell";

const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Engg1101GalleryPage() {
  return (
    <SiteShell>
      <main className="relative overflow-hidden bg-[#f5f5f7]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/90 blur-3xl" />
          <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.25rem] border border-white/70 bg-gradient-to-b from-white to-[#f4f4f6] p-6 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.35)] sm:p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">ENGG1101 Gallery</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Engineering Visual Narrative
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              The visual narrative of ENGG1101 students tackling real challenges through prototype building, live pitching, teamwork, iterative problem-solving, and senior-to-junior mentoring.
            </p>
          </motion.section>

          <CourseEditorialGallery compact />
        </div>
      </main>
    </SiteShell>
  );
}
