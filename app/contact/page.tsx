"use client";

import SiteShell from "../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <main id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <section id="contact" className="mt-16">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-slate-200/80 bg-slate-950/95 px-8 py-8 text-slate-200 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)] sm:px-10 sm:py-10">
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
        </section>
      </main>
    </SiteShell>
  );
}
