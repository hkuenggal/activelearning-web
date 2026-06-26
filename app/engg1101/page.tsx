import Image from "next/image";
import Link from "next/link";

const notionModuleUrl =
  "https://engineering-challenges.notion.site/ebd/22ad72aefb8581a48c74eb9c50524d0e?v=22ad72aefb858120a674000cdbbf0db7";

const moduleHighlights = [
  "Studio-based teamwork around an open-ended engineering challenge.",
  "Iterative design, prototyping, testing and reflection throughout the semester.",
  "Structured communication checkpoints that help teams explain decisions clearly.",
];

const moduleInfo = [
  { label: "Course code", value: "ENGG1101" },
  { label: "Course title", value: "Engineering Challenge 1" },
  { label: "Mode", value: "Active learning studio" },
  { label: "Focus", value: "Design process, teamwork and prototype development" },
];

const learningActivities = [
  "Problem framing and stakeholder exploration",
  "Concept generation and evidence-based selection",
  "Prototype building, testing and refinement",
  "Team presentations, critique and reflective review",
];

export default function Engg1101Page() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] text-slate-950">
      <header className="border-b border-slate-200/70 bg-white/92">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo/hkuengglogo.png?v=20260623"
              alt="HKU ENGG"
              width={160}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/#courses"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Back to courses
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950/5">
          <div className="absolute inset-0">
            <Image
              src="/images/Course/20250707014_Pilot_Workshop-scaled.jpg?v=20260623"
              alt="Engineering students working in an active learning studio"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-3xl px-6 py-20 text-white sm:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100/80">
              ENGG1101
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Engineering Challenge 1
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/85 sm:text-lg">
              An introductory active learning module where student teams practise engineering design by framing problems, building prototypes and reflecting on evidence from tests.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/90 p-4 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)] sm:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
              Module Content
            </p>
            <a
              href={notionModuleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              Open module content in Notion
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
            <iframe
              src={notionModuleUrl}
              title="ENGG1101 module content in Notion"
              className="h-[72vh] min-h-[520px] w-full bg-white sm:min-h-[640px]"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
              Module Information
            </p>
            <dl className="mt-8 space-y-5">
              {moduleInfo.map((item) => (
                <div key={item.label} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-base font-semibold text-slate-950">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
              Course Focus
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">
              Learn engineering by making, testing and improving ideas with a team.
            </h2>
            <div className="mt-8 grid gap-4">
              {moduleHighlights.map((highlight) => (
                <p key={highlight} className="rounded-[1.5rem] border border-slate-200 bg-[#f8f5f0] p-5 text-sm leading-7 text-slate-700">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
            Learning Activities
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {learningActivities.map((activity) => (
              <div key={activity} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm font-medium leading-7 text-slate-800">
                {activity}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
