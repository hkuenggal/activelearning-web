"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SiteShell from "../components/site-shell";
import { imagePath } from "../lib/image-path";

const engg1101NotionUrl =
  "https://engineering-challenges.notion.site/ENGG1101-Engineering-Challenges-247d72aefb858052a816d5232746d4db?source=copy_link";

const sections = [
  {
    title: "Course Overview",
    items: [
      "A hands-on, project-based experience designed for first-year engineering students.",
      "Students work in teams to explore problems, build prototypes and test ideas through guided studio activities.",
      "The course emphasizes making, iteration, reflection and communication as core engineering habits.",
    ],
  },
  {
    title: "Learning Objectives",
    items: [
      "Understand the engineering design process from problem framing to prototype refinement.",
      "Develop teamwork, communication and collaborative problem-solving skills in a studio environment.",
      "Use testing, feedback and reflection to improve solutions with purpose and confidence.",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Engg1101Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeIn}
          whileHover={{ scale: 1.01, y: -2 }}
          className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)] transition-transform duration-200 ease-out sm:min-h-[420px]"
        >
          <div className="absolute inset-0">
            <Image
              src={imagePath("/images/Course/Timmy_groupphoto.jpg")}
              alt="ENGG1101 students and teaching team group photo"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/52 to-slate-950/18" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/12 to-transparent" />
          </div>

          <div className="relative z-10 flex min-h-[360px] items-center p-8 sm:min-h-[420px] sm:p-10">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200/90">
                ENGG1101
              </p>
              <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.08]">
                <span className="block bg-gradient-to-r from-cyan-300/80 via-sky-400/80 to-emerald-400/80 bg-clip-text text-transparent">
                  Engineering Challenge 1
                </span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                This course is a hands-on, project-based experience for first-year engineering students.
              </p>
            </div>
          </div>
        </motion.section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.06 * index }}
              variants={fadeIn}
              whileHover={{ scale: 1.01, y: -2 }}
              className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.14)] transition-transform duration-200 ease-out"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {section.title}
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {section.items.map((item) => (
                  <li key={item} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          whileHover={{ scale: 1.01, y: -2 }}
          className="mt-10 rounded-[2rem] border border-slate-200/80 bg-slate-950 px-8 py-8 text-slate-100 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.22)] transition-transform duration-200 ease-out sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                Course Materials
              </p>
              <div className="mt-4 max-w-2xl space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  View the full ENGG1101 course materials in Notion.
                </h2>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  Use the course materials page for the latest resources, schedules, project guidance and supporting notes prepared for students.
                </p>
                <a
                  href={engg1101NotionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Open ENGG1101 materials in Notion
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_50px_-36px_rgba(255,255,255,0.18)]">
              <div className="absolute inset-x-6 top-0 h-24 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[1.35rem] border border-white/10 bg-slate-900/80 p-4">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Official course workspace
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-white">
                  <Image
                    src={imagePath("/images/Course/notion.png")}
                    alt="Notion preview for ENGG1101 course materials"
                    width={960}
                    height={720}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </SiteShell>
  );
}