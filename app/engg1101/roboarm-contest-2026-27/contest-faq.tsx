"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string[];
  bullets?: string[];
  conclusion?: string;
};

const faqItems: FaqItem[] = [
  {
    question: "How long is each game?",
    answer: [
      "Each game consists of a 1-minute Preparation Period followed by a 3-minute Game Period. The Game Period starts on the official Start Signal.",
    ],
  },
  {
    question: "How do we win the game?",
    answer: [
      "A team wins immediately by achieving a Great Victory: three legally placed team Blocks forming a connected horizontal, vertical or diagonal line on the Tic-Tac-Toe Rack.",
      "If neither team achieves a Great Victory before time expires, the team with the higher final score wins.",
    ],
  },
  {
    question: "How are the Blocks scored?",
    answer: ["The official scoring is:"],
    bullets: [
      "Block A - Cube: 10 points",
      "Block B - Cylinder: 20 points",
      "Block C - Trophy: 40 points",
    ],
    conclusion:
      "Points count only while the Block remains legally positioned on the Tic-Tac-Toe Rack.",
  },
  {
    question: "How do Attack Tokens work?",
    answer: [
      "A team receives one Attack Token after each Successful Placement, up to a maximum of three Attack Tokens during a Game. One Attack Token permits one Attack Attempt.",
      "Before attacking, the Operator must clearly call \"Attack\" and receive referee authorization before the Robot enters the Tic-Tac-Toe Zone. The token is consumed when the Attack Attempt begins even if the attack is not successful.",
    ],
  },
  {
    question: "What happens if our robot disconnects or stops working?",
    answer: [
      "The Operator may request a Robot Retry by calling \"Retry.\" The Game timer continues running during the Retry. No one may enter the Game Field or touch the Robot until a referee authorizes the Retry.",
      "After the Retry, the Operator must call \"Start\" and receive referee approval before the Robot resumes operation.",
    ],
  },
  {
    question: "Who is allowed to control the robot during the game?",
    answer: [
      "Only the registered Robot Operator may control the Robot during the Game Period. The Operator must remain at the designated Operator Station unless instructed otherwise by a referee.",
    ],
  },
  {
    question: "Can we manually retrieve a dropped Block?",
    answer: [
      "Normally, no. A dropped Block that remains within the team's permitted area may be recovered by the Robot.",
      "Team members may not manually retrieve or reposition dropped Blocks except during an authorized Robot Retry.",
    ],
  },
  {
    question: "What parts of the robot are teams allowed to modify?",
    answer: ["The rules permit development or modification in areas including:"],
    bullets: [
      "software and control algorithms",
      "motion planning and trajectory generation",
      "calibration methods",
      "computer vision and AI",
      "sensor fusion",
      "graphical user interfaces and operator controls",
      "Block and Tic-Tac-Toe Rack detection",
      "additional mechanisms based on the provided robotic-arm design",
    ],
    conclusion:
      "Modified grippers, end-effectors, sensors and attachments must be securely mounted and pass Robot Inspection.",
  },
  {
    question: "What robot modifications are prohibited?",
    answer: [
      "Unless specifically approved by the teaching team, teams may not modify or replace:",
    ],
    bullets: [
      "servo models",
      "robot-arm base",
      "arm geometry or link lengths",
      "main power-system configuration",
      "standardized components designated by the teaching team",
    ],
  },
  {
    question: "What if the video or briefing differs from the rulebook?",
    answer: [
      "The Official Rulebook and the Head Referee's instructions take precedence over demonstration videos, briefings or other supporting materials.",
    ],
  },
];

export default function ContestFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-3">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `contest-faq-panel-${index}`;
        const buttonId = `contest-faq-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-slate-950 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-700 sm:px-6"
              >
                <span>{item.question}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="m5 7.5 5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-t border-slate-100 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6"
            >
              <div className="space-y-3">
                {item.answer.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {item.bullets ? (
                  <ul className="list-disc space-y-1 pl-5 marker:text-blue-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {item.conclusion ? <p>{item.conclusion}</p> : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
