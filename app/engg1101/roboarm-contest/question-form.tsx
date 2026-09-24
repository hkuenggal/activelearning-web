"use client";

import type { FormEvent } from "react";

const fieldClassName =
  "mt-2 h-12 w-full border border-sky-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#447fe0] focus:ring-2 focus:ring-[#447fe0]/15";

export function FaqQuestionForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const group = String(data.get("group") ?? "");
    const category = String(data.get("category") ?? "");
    const rule = String(data.get("rule") ?? "");
    const question = String(data.get("question") ?? "");

    const subject = `ROBOARM Contest FAQ question - ${category}`;
    const body = [
      "ROBOARM Contest 2026/27 FAQ question",
      "",
      `Name: ${name}`,
      `HKU email: ${email}`,
      `Group (subclass + team number): ${group}`,
      `Category: ${category}`,
      `Reference rule number: ${rule}`,
      "",
      "Question:",
      question,
    ].join("\n");

    window.location.href = `mailto:ckchancd@hku.hk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 border border-sky-200 bg-[#eefaff] p-5 shadow-sm sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-800">
          Your name
          <input name="name" type="text" autoComplete="name" required className={fieldClassName} />
        </label>
        <label className="text-sm font-bold text-slate-800">
          HKU email
          <input name="email" type="email" autoComplete="email" placeholder="name@connect.hku.hk" required className={fieldClassName} />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Group (subclass + team number)
          <input
            name="group"
            type="text"
            placeholder="e.g. A1 or O8"
            pattern="[A-Za-z][0-9]{1,2}"
            title="Enter one subclass letter followed by the team number, for example A1 or O8."
            autoCapitalize="characters"
            spellCheck={false}
            required
            className={fieldClassName}
          />
        </label>
        <label className="text-sm font-bold text-slate-800">
          Category
          <select name="category" required defaultValue="" className={fieldClassName}>
            <option value="" disabled>Select a category</option>
            <option>Game procedure</option>
            <option>Scoring</option>
            <option>Attack</option>
            <option>Robot</option>
            <option>Safety</option>
            <option>Administration</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-slate-800">
        Reference rule number
        <input name="rule" type="text" placeholder="e.g. Rule 4.3" required className={fieldClassName} />
      </label>

      <label className="mt-5 block text-sm font-bold text-slate-800">
        Question
        <textarea
          name="question"
          required
          rows={6}
          placeholder="Describe one clear question and include the situation you need clarified."
          className="mt-2 w-full resize-y border border-sky-200 bg-white px-4 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#447fe0] focus:ring-2 focus:ring-[#447fe0]/15"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">Submitting opens your email app with the question addressed to ckchancd@hku.hk.</p>
        <button type="submit" className="inline-flex min-h-12 items-center justify-center bg-[#bfe8f7] px-7 py-3 text-sm font-bold text-sky-950 transition hover:-translate-y-0.5 hover:bg-[#9edcf2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#447fe0]">
          Prepare question email
        </button>
      </div>
    </form>
  );
}
