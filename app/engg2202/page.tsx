import SiteShell from "../components/site-shell";

const templateSections = [
  {
    title: "Course Overview",
    items: [
      "Project-based studio module for Engineering Challenge 2.",
      "Teams will work through a semester-long engineering challenge.",
      "Detailed ENGG2202 module content will be added soon.",
    ],
  },
  {
    title: "Learning Objectives",
    items: [
      "Apply engineering design methods to a larger team project.",
      "Use evidence from testing and critique to improve prototypes.",
      "Communicate technical decisions through concise documentation and presentations.",
    ],
  },
  {
    title: "Module Schedule",
    items: [
      "Weekly schedule template to be confirmed.",
      "Studio sessions, critique checkpoints and milestone reviews will appear here.",
      "Final dates and room information will be added when available.",
    ],
  },
  {
    title: "Project Deliverables",
    items: [
      "Team proposal and project plan.",
      "Prototype demonstrations and testing records.",
      "Final presentation, project documentation and reflection.",
    ],
  },
  {
    title: "Resources",
    items: [
      "Module handbook placeholder.",
      "Assessment rubrics and submission links will be added later.",
      "Studio resources and reference materials will be listed here.",
    ],
  },
  {
    title: "Contact / Consultation",
    items: [
      "Consultation arrangements will be announced by the teaching team.",
      "For general questions, contact enggal@hku.hk.",
      "More support channels will be added before the module begins.",
    ],
  },
];

export default function Engg2202Page() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <section className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
            ENGG2202
          </p>
          <div className="mt-6 max-w-3xl space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Engineering Challenge 2
            </h1>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Detailed ENGG2202 module content will be added soon.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {templateSections.map((section) => (
            <article
              key={section.title}
              className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.14)]"
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
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
