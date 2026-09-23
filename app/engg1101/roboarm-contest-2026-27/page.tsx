import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "../../components/site-shell";
import { imagePath as assetPath } from "../../lib/image-path";
import ContestFaq from "./contest-faq";

export const metadata: Metadata = {
  title: "ROBOARM Contest 2026/27 | HKU ENGG1101",
  description:
    "Official rules and quick-reference information for the HKU ENGG1101 ROBOARM Contest 2026/27: Domination of the Nine Squares.",
};

const rulebookPath = assetPath(
  "/documents/HKU_ENGG110_ROBOARM_contest_2026-27_gamerules_v1.2.pdf",
);
const introductionVideoPath = assetPath(
  "/media/Domination_of_the_Nine_Squares_Introduction_v2.mp4",
);
const contestArtworkPath = assetPath(
  "/images/Course/roboarm_contest_logo_2026_27.png",
);

export default function RoboarmContestPage() {
  return (
    <SiteShell>
      <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.09),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(220,38,38,0.08),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                HKU ENGG1101
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                ROBOARM Contest 2026/27
              </h1>
              <p className="mt-4 text-xl font-medium text-red-700 sm:text-2xl">
                Domination of the Nine Squares
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                The ROBOARM Contest gives ENGG1101 teams the opportunity to apply their robot design, calibration, motion planning and control skills in a head-to-head competition.
              </p>
            </div>

            <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:p-5">
              <Image
                src={contestArtworkPath}
                alt="Domination of the Nine Squares contest artwork"
                width={496}
                height={304}
                preload
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-20 px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <section aria-labelledby="game-rules-introduction">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                Watch the briefing
              </p>
              <h2
                id="game-rules-introduction"
                className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
              >
                Game Rules Introduction
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                Start with the contest introduction, then consult the Official Rulebook below for the complete requirements.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Game Rules Introduction video"
                className="aspect-video w-full bg-black object-contain"
              >
                <source src={introductionVideoPath} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
          </section>

          <section aria-labelledby="official-rulebook">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-700">
                Authoritative reference
              </p>
              <h2
                id="official-rulebook"
                className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
              >
                Official Rulebook
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                Read the complete rules in the embedded viewer, or use the buttons below if your browser does not display PDFs inline.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
              <iframe
                src={rulebookPath}
                title="ROBOARM Contest 2026/27 Official Rulebook"
                className="h-[70vh] min-h-[560px] w-full bg-white lg:h-[900px]"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={rulebookPath}
                download
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
              >
                Download Official Rulebook
              </a>
              <a
                href={rulebookPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              >
                Open Rulebook in New Tab
              </a>
            </div>
          </section>

          <section aria-labelledby="frequently-asked-questions">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                Quick reference
              </p>
              <h2
                id="frequently-asked-questions"
                className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                These concise answers summarize common questions. Refer to the Official Rulebook for full definitions, procedures and limitations.
              </p>
            </div>

            <ContestFaq />

            <aside className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5 sm:px-6">
              <h2 className="font-semibold text-amber-950">
                Official rules take precedence
              </h2>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                If a demonstration video, briefing or other supporting material conflicts with the Official Rulebook, the Rulebook and the Head Referee&apos;s instructions take precedence.
              </p>
            </aside>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
