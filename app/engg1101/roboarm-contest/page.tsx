import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "../../components/site-shell";
import { imagePath } from "../../lib/image-path";
import { questionFormEmbedUrl } from "./faq-data";
import { FaqQuestionForm } from "./question-form";
import { IntroductionSnakes } from "./introduction-snakes";

export const metadata: Metadata = {
  title: "ROBOARM Contest 2026/27 | ENGG1101",
  description:
    "Official introduction, rulebook and frequently asked questions for the ENGG1101 ROBOARM Contest: Domination of the Nine Squares.",
};

const navigation = [
  ["Home", "#contest-home"],
  ["Introduction", "#game-introduction"],
  ["Video", "#introduction-video"],
  ["Rulebook", "#official-rules"],
  ["FAQ", "#questions"],
];

const contestObjectives = [
  "Engineering design",
  "Motion planning and calibration",
  "System integration",
  "Teamwork and communication",
  "Strategy and robot operation",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 border-b-[5px] border-[#8bd3ef]">
      <div className="flex flex-col sm:flex-row sm:items-end">
        <p className="w-fit bg-[#bfe8f7] px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-sky-950">
          {eyebrow}
        </p>
        <h2 className="px-0 py-3 text-3xl font-bold tracking-tight text-slate-950 sm:px-6 sm:text-4xl">
          {title}
        </h2>
      </div>
      {description ? <p className="max-w-4xl pb-5 text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}
    </div>
  );
}

export default function RoboArmContestPage() {
  const heroBackdropUrl = imagePath("/images/Course/roboarm-hero-poster-bg-v2.png");
  const dragonBattleUrl = imagePath("/images/Course/roboarm-hero-dragons-v2.png");
  const logoUrl = imagePath("/images/Course/roboarm_contest_logo_2026_27.png");
  const videoUrl = imagePath("/media/engg1101/roboarm-contest-introduction.mp4");
  const posterUrl = imagePath("/images/Course/roboarm-contest-first-frame.png");
  const blueSnakeUrl = imagePath("/images/Course/robot-snake-blue-transparent.png");
  const redSnakeUrl = imagePath("/images/Course/robot-snake-red-transparent.png");
  const pdfUrl = imagePath("/documents/engg1101/roboarm-contest-rules-v1.2.pdf");
  const faqPdfUrl = imagePath("/documents/engg1101/roboarm-contest-faq-v1.2.pdf");

  return (
    <SiteShell>
      <main className="min-h-screen bg-white text-slate-900">
        <section id="contest-home" className="relative isolate overflow-hidden border-b border-sky-200 bg-[#f7fbff]">
          <Image
            src={heroBackdropUrl}
            alt=""
            fill
            preload
            sizes="100vw"
            className="-z-30 object-cover object-center"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_38%,rgba(247,251,255,0.48)_64%,rgba(247,251,255,0.08)_100%)] xl:bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_34%,rgba(247,251,255,0.46)_57%,rgba(247,251,255,0.04)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white/90 to-transparent" />
          <div className="pointer-events-none absolute -left-12 top-10 h-36 w-36 rounded-full border-[18px] border-blue-500/10" />
          <div className="pointer-events-none absolute bottom-10 left-[43%] h-20 w-20 rotate-12 border-[12px] border-red-500/10" />

          <div aria-hidden="true" className="pointer-events-none absolute -right-56 top-40 z-0 h-[30rem] w-[44rem] opacity-80 sm:-right-48 sm:top-24 sm:h-[42rem] sm:w-[68rem] sm:opacity-90 xl:hidden">
            <Image
              src={dragonBattleUrl}
              alt=""
              fill
              sizes="(max-width: 640px) 180vw, (max-width: 1279px) 115vw"
              className="object-contain object-center drop-shadow-[0_24px_24px_rgba(30,64,175,0.2)]"
            />
          </div>

          <div className="relative mx-auto grid min-h-[720px] min-w-0 max-w-7xl items-center gap-5 px-5 pb-8 pt-10 sm:px-8 sm:pb-12 lg:px-12 xl:min-h-[650px] xl:grid-cols-[minmax(0,0.83fr)_minmax(520px,1.17fr)] xl:gap-0 xl:py-10">
            <div className="relative z-20 min-w-0 self-center py-4 xl:py-10" style={{ width: "min(36rem, calc(100vw - 2.5rem))" }}>
              <Link href="/engg1101" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 underline decoration-[#4baed5] decoration-2 underline-offset-4 transition hover:text-slate-950">
                <span aria-hidden="true">←</span>
                Back to ENGG1101
              </Link>
              <p className="mt-8 flex w-fit bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white shadow-[6px_6px_0_#69c7e8] sm:tracking-[0.28em]">HKU ENGG1101 · 2026/27</p>

              <div className="mt-7 w-fit rounded-[1.75rem] border border-white/90 bg-white/84 px-4 py-4 shadow-[0_22px_55px_-24px_rgba(30,64,175,0.5)] ring-1 ring-sky-100/70 backdrop-blur-xl sm:px-6 sm:py-5">
                <h1 className="font-black uppercase leading-[0.78] tracking-[-0.075em] text-slate-950">
                  <span className="block text-[12vw] sm:text-[clamp(3.4rem,8vw,6.8rem)]">RoboArm</span>
                  <span className="block text-[11.5vw] text-transparent sm:text-[clamp(3.1rem,7.3vw,6.2rem)]" style={{ WebkitTextStroke: "2px #0f172a" }}>Contest</span>
                </h1>
              </div>

              <div className="mt-7 -rotate-1 border border-slate-200 bg-white/95 p-3 shadow-[12px_12px_0_rgba(37,99,235,0.15)] backdrop-blur-sm" style={{ width: "min(29rem, calc(100vw - 3.5rem))" }}>
                <div className="relative aspect-[1.62/1] w-full">
                  <Image src={logoUrl} alt="Domination of the Nine Squares" fill sizes="(max-width: 640px) 88vw, 470px" className="object-contain" />
                </div>
              </div>

              <p className="mt-7 max-w-lg border-l-4 border-red-500 pl-4 text-sm font-semibold leading-6 text-slate-700 sm:text-base" style={{ width: "calc(100vw - 5rem)" }}>
                Design. Calibrate. Attack. Build a smarter robot arm and dominate the shared nine-square arena.
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-start">
                <a href="#game-introduction" className="bg-[#bfe8f7] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-sky-950 shadow-[5px_5px_0_#0f172a] transition hover:-translate-y-1 sm:px-5 sm:text-sm">Enter the arena</a>
                <a href="#official-rules" className="border-2 border-slate-950 bg-white px-4 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-slate-950 transition hover:-translate-y-1 hover:bg-slate-950 hover:text-white sm:px-5 sm:text-sm">Competition rules</a>
              </div>
            </div>

            <div aria-hidden="true" className="relative z-10 hidden h-[610px] min-w-0 self-center xl:block">
              <div className="absolute left-1/2 top-[44%] z-0 grid aspect-square w-32 -translate-x-1/2 -translate-y-1/2 rotate-3 grid-cols-3 gap-1 border-[5px] border-slate-950 bg-slate-950 p-1 shadow-[16px_18px_0_rgba(15,23,42,0.16)] sm:w-40 lg:w-48">
                <span className="grid place-items-center bg-white text-3xl font-black text-blue-600">×</span>
                <span className="bg-white" />
                <span className="grid place-items-center bg-white text-3xl font-black text-red-500">○</span>
                <span className="bg-white" />
                <span className="grid place-items-center bg-white"><i className="h-5 w-5 bg-blue-600 shadow-[4px_4px_0_#0f172a] sm:h-7 sm:w-7" /></span>
                <span className="bg-white" />
                <span className="grid place-items-center bg-white"><i className="h-5 w-5 bg-red-500 shadow-[4px_4px_0_#0f172a] sm:h-7 sm:w-7" /></span>
                <span className="bg-white" />
                <span className="bg-white" />
              </div>

              <div className="absolute left-1/2 top-[46%] z-20 h-[92%] w-[112%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_28px_26px_rgba(30,64,175,0.24)] sm:w-[104%] xl:h-[96%] xl:w-[132%]">
                <Image
                  src={dragonBattleUrl}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 120vw, (max-width: 1024px) 105vw, 78vw"
                  className="object-contain object-center"
                />
              </div>

              <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-1.5 whitespace-nowrap bg-white/90 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg backdrop-blur-sm sm:text-xs">
                <span className="text-blue-600">Design</span><span>·</span><span>Calibrate</span><span>·</span><span className="text-red-500">Dominate</span>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Contest page sections" className="sticky top-[61px] z-30 bg-[linear-gradient(180deg,#1e5c96_0%,#174979_100%)] shadow-lg">
          <div className="mx-auto flex max-w-7xl overflow-x-auto px-3 sm:justify-center sm:px-8">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className={`shrink-0 border-r border-white/15 px-5 py-4 text-center text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[#bfe8f7] hover:text-sky-950 ${label === "FAQ" ? "bg-[#bfe8f7] text-sky-950" : "text-white"}`}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="bg-white">
          <section id="game-introduction" className="relative isolate scroll-mt-28 overflow-hidden border-b border-[#8bd3ef] bg-[#f4fbff]">
            <div className="absolute inset-0 -z-30 bg-[linear-gradient(rgba(139,211,239,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(139,211,239,0.13)_1px,transparent_1px)] bg-[size:34px_34px]" />
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_35%,rgba(109,196,232,0.28),transparent_30%),radial-gradient(circle_at_90%_65%,rgba(255,169,145,0.24),transparent_30%),radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.96),rgba(240,249,255,0.72)_45%,rgba(226,244,252,0.45)_100%)]" />

            <div className="pointer-events-none absolute left-[12%] top-16 -z-10 h-36 w-36 animate-pulse rounded-full bg-sky-200/40 blur-3xl" />
            <div className="pointer-events-none absolute bottom-16 right-[12%] -z-10 h-40 w-40 animate-pulse rounded-full bg-orange-100/60 blur-3xl [animation-delay:700ms]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-[5] h-28 bg-gradient-to-b from-transparent via-[#f4fbff]/80 to-[#f4fbff]" />

            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36">
              <div className="relative mx-auto max-w-5xl">
                <IntroductionSnakes blueSrc={blueSnakeUrl} redSrc={redSnakeUrl} />
                <div className="relative z-10 mx-auto max-w-3xl border border-white/90 bg-white/90 px-6 py-10 text-center shadow-[0_28px_80px_-42px_rgba(30,92,150,0.38)] backdrop-blur-md sm:px-10 sm:py-12">
                <div className="absolute inset-x-12 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-300 to-red-400" />
                <p className="text-xs font-black uppercase tracking-[0.3em] text-sky-700">Game introduction</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Domination of the Nine Squares</h2>
                <div className="mx-auto mt-7 max-w-2xl space-y-5 text-left text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                  <p>The purpose of this contest is to provide students in HKU course ENGG1101 Engineering Challenges I with an opportunity to apply and demonstrate what they have learned during Semester 1. The contest provides a controlled setting in which student teams integrate, test, demonstrate, and refine the engineering knowledge developed during the course.</p>
                  <p>Every team shall use the standardized robotic arm platform supplied or approved by the course teaching team. The contest therefore evaluates how effectively a team improves the performance of a common platform rather than how extensively it replaces the platform.</p>
                  <p className="font-semibold text-slate-900">The game theme is “Domination of the Nine Squares.” Two Robots operate simultaneously on opposite sides of a shared vertical three-by-three Tic-Tac-Toe Rack. Each team seeks to form a Connected Line of three of its Blocks while using regulated Attack Attempts to disrupt the opponent.</p>
                </div>

                <div className="mt-9 border-t border-sky-200 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Learning objectives</p>
                  <ul className="mt-4 flex flex-wrap justify-center gap-2">
                    {contestObjectives.map((objective) => (
                      <li key={objective} className="border border-sky-200 bg-[#eaf8fd] px-3 py-2 text-xs font-semibold text-sky-950 shadow-sm">
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </section>

          <section id="introduction-video" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <SectionHeading eyebrow="Watch" title="Game Rules Introduction" />
            <div className="border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-35px_rgba(39,31,71,0.45)] sm:p-5">
              <video className="aspect-video w-full bg-black" controls playsInline preload="metadata" poster={posterUrl}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support embedded video. <a href={videoUrl}>Open the video directly.</a>
              </video>
            </div>
          </section>

          <section id="official-rules" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <SectionHeading eyebrow="Rulebook" title="Official Competition Rules" />
            <div className="mb-5 flex flex-wrap gap-3">
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#bfe8f7] px-6 py-3 text-sm font-bold text-sky-950 transition hover:-translate-y-0.5 hover:bg-[#9edcf2]">Open in new tab</a>
              <a href={pdfUrl} download className="inline-flex items-center justify-center border border-[#8bd3ef] bg-[#eefaff] px-6 py-3 text-sm font-bold text-sky-950 transition hover:-translate-y-0.5 hover:bg-[#d9f3fc]">Download PDF</a>
            </div>
            <div className="overflow-hidden border border-slate-300 bg-white shadow-[0_20px_60px_-35px_rgba(39,31,71,0.45)]">
              <object data={pdfUrl} type="application/pdf" className="h-[72vh] min-h-[640px] w-full">
                <div className="p-8 text-center text-sm text-slate-600">Your browser cannot display the PDF inline. <a href={pdfUrl} className="font-bold text-[#4f33aa] underline">Open the rulebook</a>.</div>
              </object>
            </div>
          </section>

          <section id="questions" className="scroll-mt-28 border-t border-[#8bd3ef] bg-white">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

              <div className="mb-14 border-b-[3px] border-[#8bd3ef] pb-14">
                <h3 className="text-2xl font-bold text-slate-950">Submit a question</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">Questions should be submitted on behalf of your team and should include the relevant rule reference.</p>
                {questionFormEmbedUrl ? (
                  <iframe src={questionFormEmbedUrl} title="ROBOARM Contest question form" className="mt-6 min-h-[760px] w-full border border-sky-200 bg-white" loading="lazy" />
                ) : (
                  <FaqQuestionForm />
                )}
              </div>

              <h3 className="mb-5 text-2xl font-bold text-slate-950">Published FAQ</h3>
              <div className="mb-5 border border-sky-200 bg-white p-5 shadow-[0_16px_45px_-30px_rgba(30,92,150,0.4)] sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="font-bold text-slate-950">ROBOARM Contest 2026/27 — Frequently Asked Questions</p>
                  <p className="mt-1 text-sm text-slate-600">Version 1.2 · Updated 24 September 2026 · Complete ten-page PDF</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-3 sm:mt-0 sm:shrink-0">
                  <a href={faqPdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-[#8bd3ef] bg-[#eefaff] px-5 py-3 text-sm font-bold text-sky-950 transition hover:-translate-y-0.5 hover:bg-[#d9f3fc]">Open in new tab</a>
                  <a href={faqPdfUrl} download className="inline-flex items-center justify-center bg-[#bfe8f7] px-5 py-3 text-sm font-bold text-sky-950 transition hover:-translate-y-0.5 hover:bg-[#9edcf2]">Download complete FAQ PDF</a>
                </div>
              </div>

              <div className="mb-12 overflow-hidden border border-slate-300 bg-white shadow-[0_20px_60px_-35px_rgba(39,31,71,0.45)]">
                <object data={faqPdfUrl} type="application/pdf" className="h-[72vh] min-h-[640px] w-full">
                  <div className="p-8 text-center text-sm text-slate-600">Your browser cannot display the PDF inline. <a href={faqPdfUrl} className="font-bold text-sky-800 underline">Open the FAQ PDF</a>.</div>
                </object>
              </div>
            </div>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
