"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteShell from "./components/site-shell";

const engg1101NotionUrl =
  "https://engineering-challenges.notion.site/ENGG1101-Engineering-Challenges-247d72aefb858052a816d5232746d4db?source=copy_link";

const courses = [
  {
    title: "Engineering Challenge 1",
    description:
      "An introductory studio course where student teams explore engineering problems through iterative design and prototyping.",
    status: "ENGG1101",
    detailsHref: "/engg1101",
  },
  {
    title: "Engineering Challenge 2",
    description:
      "A project-based course in which teams undertake a semester-long engineering challenge, focusing on applied design, prototyping, and structured reflection.",
    status: "ENGG2202",
    detailsHref: "/engg2202",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.01, y: -2 },
};

export default function Home() {
  return (
    <SiteShell>
      <main id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeIn}
          className="relative overflow-hidden rounded-[2rem] bg-slate-950/5"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/Course/20250707014_Pilot_Workshop-scaled.jpg?v=20260623"
              alt="HKU Engineering active learning studio"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:gap-16 lg:py-28">
            <div className="max-w-3xl space-y-8 text-white">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100/80">
                HKU Engineering active learning
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  <span className="block">Tackle Challenges.</span>
                  <span className="block">Innovate for the World.</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-100/85 sm:text-lg">
                  Design-led learning for engineering practice, studio culture and collaborative innovation.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#courses"
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-950/95 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-24px_rgba(0,0,0,0.32)] transition hover:bg-slate-900 sm:w-auto"
                >
                  Explore Courses
                </a>
                <a
                  href="#timetable"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 sm:w-auto"
                >
                  View Timetable
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="about" className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">About</p>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Active learning in engineering is built around making, testing and reflecting together.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-700">
                This site frames HKU Engineering’s active learning initiative with a calm, focused layout that highlights course structure, team engagement and the rhythm of studio-based study.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Design-led learning",
                content: "Studio practice, rapid prototyping and curated critique are central to how students explore engineering problems.",
              },
              {
                title: "Integrated technology",
                content: "Hands-on modules combine physical systems, digital design and academic reflection for a richer classroom experience.",
              },
              {
                title: "Thoughtful structure",
                content: "Clear milestones, collaborative check-ins and focused project time help students stay confident with complex material.",
              },
            ].map((item, index) => (
              <motion.article key={item.title} whileInView="visible" initial="hidden" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.05 * index }} variants={fadeIn} className="rounded-[1.75rem] border border-slate-200/80 bg-[#f8f5f0] p-6">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.content}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="courses" className="mt-16 space-y-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">Courses</p>
            <div className="space-y-3 sm:flex sm:items-end sm:justify-between sm:gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Studio modules, course focus and cohort momentum.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-700">
                  The curriculum is presented as a set of active modules with clear status, course goals and structured time for teamwork.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <motion.article
                key={course.title}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_60px_-48px_rgba(15,23,42,0.18)] transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
                    {course.status}
                  </span>
                  <div className="h-10 w-10 rounded-2xl bg-slate-100 transition duration-300 group-hover:bg-slate-200" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-slate-950">{course.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{course.description}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-950">
                  {course.detailsHref?.startsWith("http") ? (
                    <a
                      href={course.detailsHref}
                      className="rounded-full border border-slate-200 px-3 py-2 transition hover:border-slate-300 hover:bg-slate-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View details
                    </a>
                  ) : course.detailsHref ? (
                    <Link href={course.detailsHref} className="rounded-full border border-slate-200 px-3 py-2 transition hover:border-slate-300 hover:bg-slate-50">
                      View details
                    </Link>
                  ) : (
                    <span className="rounded-full border border-slate-200 px-3 py-2">View details</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="timetable" className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn} className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">Timetable</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Timetable to be confirmed.
              </h2>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-12 text-center sm:px-10">
              <p className="text-lg font-semibold text-slate-900">All timetable details are pending confirmation.</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Class groups, rooms, session times and instructors will be shared once confirmed.</p>
            </div>
          </motion.div>
        </section>

        <div className="mt-6 text-center text-xs text-slate-500">
          © 2026 Active Learning Teaching Team, Faculty of Engineering, The University of Hong Kong
        </div>
      </main>
    </SiteShell>
  );
}
