import Image from "next/image";
import Link from "next/link";

const imageBasePath = process.env.NODE_ENV === "production" ? "/activelearning-web" : "";

const engg1101NotionUrl =
  "https://engineering-challenges.notion.site/ENGG1101-Engineering-Challenges-247d72aefb858052a816d5232746d4db?source=copy_link";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "ENGG1101", href: engg1101NotionUrl, external: true },
  { label: "ENGG2202", href: "/engg2202" },
  { label: "Timetable", href: "/#timetable" },
  { label: "Consultation", href: "/#consultation" },
  { label: "Contact", href: "/#contact" },
];

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
    <div className="relative min-h-screen bg-[#fbfbfb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 sm:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={`${imageBasePath}/images/Logo/hkuengglogo.png?v=20260623`}
                alt="HKU ENGG"
                width={160}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="mx-auto flex flex-1 justify-center">
            <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-800 md:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-slate-950"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="transition-colors hover:text-slate-950">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

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
    </div>
  );
}
