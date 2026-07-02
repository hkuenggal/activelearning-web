"use client";

import { motion } from "framer-motion";
import SiteShell from "../components/site-shell";

export default function ConsultationPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <motion.section whileHover={{ scale: 1.01, y: -2 }} transition={{ duration: 0.22, ease: "easeOut" }} className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)] transition-transform duration-200 ease-out">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
              Consultation
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Consultation to be confirmed.
            </h1>
          </div>

          <motion.div whileHover={{ scale: 1.01, y: -2 }} transition={{ duration: 0.22, ease: "easeOut" }} className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-12 text-center transition-transform duration-200 ease-out sm:px-10">
            <p className="text-lg font-semibold text-slate-900">
              Consultation details are pending confirmation.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Office hours, booking arrangements and consultation channels will
              be shared once confirmed.
            </p>
          </motion.div>
        </motion.section>
      </main>
    </SiteShell>
  );
}
