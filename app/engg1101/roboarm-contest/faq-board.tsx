"use client";

import { useMemo, useState } from "react";
import { contestFaq, type ContestFaqItem } from "./faq-data";

const sections: Array<"All sections" | ContestFaqItem["section"]> = [
  "All sections",
  "Game Field",
  "Game Procedure",
  "Scoring",
  "Attack",
  "Retries",
  "Violations & Disqualifications",
  "Robots & Safety",
  "Others",
];

const sectionOrder = sections.slice(1) as ContestFaqItem["section"][];

export function ContestFaqBoard() {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<(typeof sections)[number]>("All sections");

  const groupedFaq = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const visibleItems = contestFaq.filter((item) => {
      const matchesSection = section === "All sections" || item.section === section;
      const matchesQuery =
        !normalizedQuery ||
        `${item.item} ${item.section} ${item.rule} ${item.question} ${item.reply}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesSection && matchesQuery;
    });

    return sectionOrder
      .map((name) => ({
        name,
        items: visibleItems.filter((item) => item.section === name),
      }))
      .filter((group) => group.items.length > 0);
  }, [query, section]);

  return (
    <div>
      <div className="grid gap-3 border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_15rem] sm:p-5">
        <label>
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Search the FAQ</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search item, rule, question or reply"
            className="h-12 w-full border border-sky-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#8bd3ef] focus:bg-white focus:ring-2 focus:ring-[#8bd3ef]/20"
          />
        </label>
        <label>
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Section</span>
          <select
            value={section}
            onChange={(event) => setSection(event.target.value as (typeof sections)[number])}
            className="h-12 w-full border border-sky-200 bg-slate-50 px-4 text-sm font-semibold text-slate-950 outline-none transition focus:border-[#8bd3ef] focus:bg-white focus:ring-2 focus:ring-[#8bd3ef]/20"
          >
            {sections.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      {groupedFaq.length ? (
        <div className="mt-8 space-y-10">
          {groupedFaq.map((group, groupIndex) => (
            <section key={group.name} aria-labelledby={`faq-section-${groupIndex}`}>
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2 border-b-[3px] border-[#8bd3ef]">
                <h3 id={`faq-section-${groupIndex}`} className="bg-[#bfe8f7] px-4 py-2 text-lg font-bold text-sky-950 sm:text-xl">
                  Section {sectionOrder.indexOf(group.name) + 1} - {group.name}
                </h3>
                <p className="pb-2 text-xs font-semibold text-slate-500">Update: {group.items[0].updated}</p>
              </div>

              <div className="overflow-x-auto border border-slate-300 bg-white shadow-sm">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-700">
                  <thead className="bg-[#255f96] text-white">
                    <tr>
                      <th className="w-24 border-r border-white/20 px-4 py-3 font-bold">Item</th>
                      <th className="w-40 border-r border-white/20 px-4 py-3 font-bold">Rule</th>
                      <th className="w-[32%] border-r border-white/20 px-4 py-3 font-bold">Questions</th>
                      <th className="px-4 py-3 font-bold">Reply</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item, index) => (
                      <tr key={item.item} className={index % 2 ? "bg-[#f6f4fb]" : "bg-white"}>
                        <td className="border-r border-t border-slate-200 px-4 py-4 align-top font-bold text-sky-700">{item.item}</td>
                        <td className="border-r border-t border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">{item.rule}</td>
                        <td className="border-r border-t border-slate-200 px-4 py-4 align-top leading-6">{item.question}</td>
                        <td className="border-t border-slate-200 px-4 py-4 align-top leading-6">{item.reply}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">No official answers match this search.</div>
      )}
    </div>
  );
}
