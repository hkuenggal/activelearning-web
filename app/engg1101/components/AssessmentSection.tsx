type AssessmentItem = {
  label: string;
  weight: string;
};

type AssessmentSubgroup = {
  title: string;
  total: string;
  items: AssessmentItem[];
};

type AssessmentGroup = {
  title: string;
  total: string;
  subtitle: string;
  accentClass: string;
  borderClass: string;
  subgroups: AssessmentSubgroup[];
};

const assessmentGroups: AssessmentGroup[] = [
  {
    title: "Lecture & Workshop",
    total: "55%",
    subtitle: "Combined Total",
    accentClass: "bg-[#139487] text-white",
    borderClass: "border-[#139487]/35",
    subgroups: [
      {
        title: "Checkpoints and Assignments",
        total: "55%",
        items: [
          { label: "Checkpoints (Individual)", weight: "35%" },
          { label: "Written Assignment (Individual)", weight: "20%" },
        ],
      },
    ],
  },
  {
    title: "Project",
    total: "45%",
    subtitle: "Combined Total",
    accentClass: "bg-[#1B365D] text-white",
    borderClass: "border-[#1B365D]/35",
    subgroups: [
      {
        title: "1: Presentations",
        total: "15%",
        items: [
          { label: "Poster (Group)", weight: "5%" },
          { label: "Final Presentation and Demo (Group)", weight: "10%" },
        ],
      },
      {
        title: "2: Work and Reports",
        total: "30%",
        items: [
          {
            label: "Final Report on Improvements, Results, and Reflection (Individual)",
            weight: "30%",
          },
        ],
      },
    ],
  },
];

export default function AssessmentSection() {
  return (
    <section
      id="assessment"
      aria-labelledby="engg1101-assessment-heading"
      className="mt-10 rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)] sm:p-8 lg:p-10"
    >
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2B6CB0]">Assessment</p>
        <h2 id="engg1101-assessment-heading" className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          ENGG1101 Assessment
        </h2>
      </header>

      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        {assessmentGroups.map((group) => (
          <article key={group.title} className={`overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_16px_40px_-34px_rgba(15,23,42,0.2)] ${group.borderClass}`}>
            <div className={`px-5 py-4 sm:px-6 ${group.accentClass}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">Category</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-1 text-sm text-white/90">{group.subtitle}</p>
                </div>
                <p className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-lg font-extrabold leading-none">
                  {group.total}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="hidden md:block">
                <table className="w-full table-fixed border-collapse text-left">
                  <thead>
                    <tr className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      <th scope="col" className="w-[78%] border-b border-slate-200 px-2 pb-2 font-semibold">Component</th>
                      <th scope="col" className="w-[22%] border-b border-slate-200 px-2 pb-2 text-center font-semibold text-[#2B6CB0]">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.subgroups.map((subgroup) => [
                      <tr key={`${group.title}-${subgroup.title}-header`}>
                        <th colSpan={2} scope="colgroup" className="border-b border-slate-200 bg-slate-50 px-2 py-2 text-sm font-semibold text-slate-900">
                          <span>{subgroup.title}</span>
                          <span className="ml-2 rounded-full bg-[#2B6CB0]/10 px-2 py-0.5 text-xs font-extrabold text-[#2B6CB0]">{subgroup.total}</span>
                        </th>
                      </tr>,
                      ...subgroup.items.map((item) => (
                        <tr key={`${group.title}-${subgroup.title}-${item.label}`} className="align-top">
                          <th scope="row" className="border-b border-slate-100 px-2 py-3 text-sm font-semibold text-slate-900">{item.label}</th>
                          <td className="border-b border-slate-100 px-2 py-3 text-center text-lg font-extrabold text-[#2B6CB0]">{item.weight}</td>
                        </tr>
                      )),
                    ])}
                  </tbody>
                </table>
              </div>

              <ul className="grid gap-3 md:hidden">
                {group.subgroups.map((subgroup) => (
                  <li key={`${group.title}-${subgroup.title}-mobile`} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-900">{subgroup.title}</p>
                      <p className="text-sm font-extrabold text-[#2B6CB0]">{subgroup.total}</p>
                    </div>

                    <ul className="mt-3 grid gap-2">
                      {subgroup.items.map((item) => (
                        <li key={`${group.title}-${subgroup.title}-${item.label}-item`} className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
                          <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                          <p className="text-base font-extrabold text-[#2B6CB0]">{item.weight}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
