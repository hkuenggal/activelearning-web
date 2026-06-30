"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SiteShell from "../components/site-shell";

const team = [
  {
    name: "Dr. Timmy Cheng",
    role: "Lecturer",
    image: "images/team/Timmy-scaled.jpg?v=20260623",
    note: "Lecturer focusing on studio pedagogy and hands-on project supervision.",
  },
  {
    name: "Dr. Ryan Wang",
    role: "Lecturer",
    image: "images/team/Ryan.jpg?v=20260623",
    note: "Leads modules in collaborative systems and team-based design practice.",
  },
  {
    name: "Dr. Edwin Dung",
    role: "Lecturer",
    image: "images/team/Edwin.jpg?v=20260623",
    note: "Specialises in prototype development and reflective assessment in studio courses.",
  },
  {
    name: "Mr. Kyle He",
    role: "Assistant Lecturer",
    image: "images/team/Kyle.jpg?v=20260623",
    note: "Supports lab sessions, peer learning coordination and technical workshops.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamPage() {
  return (
    <SiteShell>
      <main id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
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

      </main>
    </SiteShell>
  );
}
