"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "ENGG1101", href: "#engg1101" },
  { label: "Timetable", href: "#timetable" },
  { label: "Consultation", href: "#consultation" },
  { label: "Contact", href: "#contact" },
];

const courses = [
  {
    title: "Engineering Challenge 1",
    description:
      "An introductory studio course where student teams explore engineering problems through iterative design and prototyping.",
    status: "ENGG1101",
  },
  {
    title: "Engineering Challenge 2",
    description:
      "A project-based course in which teams undertake a semester-long engineering challenge, focusing on applied design, prototyping, and structured reflection.",
    status: "ENGG2202",
  },
];

const team = [
  {
    name: "Dr. Timmy Cheng",
    role: "Lecturer",
    image: "/images/team/Timmy-scaled.jpg?v=20260623",
    note: "Lecturer focusing on studio pedagogy and hands-on project supervision.",
  },
  {
    name: "Dr. Ryan Wang",
    role: "Lecturer",
    image: "/images/team/Ryan.jpg?v=20260623",
    note: "Leads modules in collaborative systems and team-based design practice.",
  },
  {
    name: "Dr. Edwin Dung",
    role: "Lecturer",
    image: "/images/team/Edwin.jpg?v=20260623",
    note: "Specialises in prototype development and reflective assessment in studio courses.",
  },
  {
    name: "Mr. Kyle He",
    role: "Assistant Lecturer",
    image: "/images/team/Kyle.jpg?v=20260623",
    note: "Supports lab sessions, peer learning coordination and technical workshops.",
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
    <div className="relative min-h-screen bg-[#fbfbfb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 sm:px-8">
          <div className="flex items-center">
            {/* Logo image on the left — swap the file later if needed */}
            <a href="#top" className="flex items-center">
              <Image src="/images/Logo/hkuengglogo.png?v=20260623" alt="HKU ENGG" width={160} height={36} className="h-9 w-auto object-contain" priority />
            </a>
          </div>

          {/* Centered navigation */}
          <nav className="mx-auto flex flex-1 justify-center">
            <ul className="hidden items-center gap-8 text-sm text-slate-800 font-semibold md:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-slate-950">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-side social icons */}
          <div className="ml-6 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-slate-800 hover:text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="mailto:enggal@hku.hk" aria-label="Email" className="text-slate-800 hover:text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <polyline points="3 7 12 13 21 7"></polyline>
              </svg>
            </a>
            <a href="https://github.com/hkuenggal/activelearning-web" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-800 hover:text-slate-950">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.252-4.555-1.11-4.555-4.944 0-1.091.39-1.983 1.03-2.681-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.642.698 1.029 1.59 1.029 2.681 0 3.842-2.338 4.688-4.566 4.935.359.309.679.92.679 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

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
              src="/images/course/20250707014_Pilot_Workshop-scaled.jpg?v=20260623"
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
            {courses.map((course, index) => (
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
                  <span className="rounded-full border border-slate-200 px-3 py-2">View details</span>
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
                A clear preview of class groups, studio sessions and weekly rhythm.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Class A', 'Class B', 'Class C'].map((label, idx) => (
                <span
                  key={label}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    idx === 0
                      ? 'border-sky-200 bg-sky-50 text-sky-800'
                      : idx === 1
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border-amber-200 bg-amber-50 text-amber-800'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-px bg-slate-200 text-slate-500 text-sm font-semibold uppercase tracking-[0.16em]">
              {['Time', 'Room', 'Session', 'Instructor'].map((heading) => (
                <div key={heading} className="bg-slate-100 px-4 py-4">
                  {heading}
                </div>
              ))}
            </div>
            <div className="divide-y divide-slate-200 bg-white">
              {[
                { time: '09:00 – 11:00', room: 'Design Lab 1', session: 'Studio Review', instructor: 'Dr. Olivia Chan', tone: 'sky' },
                { time: '11:30 – 13:30', room: 'Project Space', session: 'Team Critique', instructor: 'Prof. Marcus Lee', tone: 'emerald' },
                { time: '14:00 – 16:00', room: 'Innovation Hub', session: 'Prototype Lab', instructor: 'Ms. Sara Wong', tone: 'amber' },
              ].map((item) => (
                <div key={item.time} className="grid grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-px px-4 py-5 text-sm text-slate-700 sm:px-5">
                  <div className="bg-white px-3 py-2">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                      item.tone === 'sky'
                        ? 'bg-sky-50 text-sky-700'
                        : item.tone === 'emerald'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                  <div className="bg-white px-3 py-2">{item.room}</div>
                  <div className="bg-white px-3 py-2">{item.session}</div>
                  <div className="bg-white px-3 py-2">{item.instructor}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="mt-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-white/95 px-8 py-12 shadow-[0_30px_100px_-70px_rgba(15,23,42,0.14)] sm:px-10 sm:py-14">
            <div className="space-y-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} variants={fadeIn} className="space-y-4 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">Team</p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Active Learning Teaching Team
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {team.map((person) => (
                  <motion.div key={person.name} initial="rest" whileHover={{ y: -4 }} animate="rest" className="flex flex-col items-center gap-4">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-200/70 bg-slate-100 shadow-sm sm:h-36 sm:w-36">
                      <Image src={person.image} alt={person.name} width={144} height={144} className="h-full w-full object-cover" />
                    </div>
                    <div className="text-center">
                      <p className="whitespace-nowrap text-lg font-semibold leading-tight text-slate-950">{person.name}</p>
                      <p className="mt-2 text-sm font-medium text-slate-600">{person.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-10">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950/95 px-8 py-8 text-slate-200 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)] sm:px-10 sm:py-10">
              <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Contact Us</p>
                  <a href="mailto:enggal@hku.hk" className="inline-flex flex-col gap-1 text-sm leading-tight text-slate-100 sm:text-base">
                    <span className="font-medium uppercase tracking-[0.22em] text-slate-400">Email:</span>
                    <span className="font-semibold text-white">enggal@hku.hk</span>
                  </a>
                </div>
                <div className="space-y-2 text-sm leading-7 text-slate-300 md:border-l md:border-slate-700 md:pl-8">
                  <p className="font-semibold text-slate-100">Faculty of Engineering</p>
                  <p>The University of Hong Kong</p>
                  <p>Pokfulam, Hong Kong</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-6 text-center text-xs text-slate-500">
          © 2026 Active Learning Teaching Team, Faculty of Engineering, The University of Hong Kong
        </div>
      </main>
    </div>
  );
}
