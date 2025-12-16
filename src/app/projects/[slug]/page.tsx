import { notFound } from "next/navigation";
import { projects, ProjectSlug } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: ProjectSlug }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-slate-300 bg-slate-100 px-2 py-1 text-sm text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <section className="space-y-10">
        {/* Problem */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Problem
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Solution
          </h2>

          <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
            {project.solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-5">
          <h2 className="text-2xl font-semibold text-indigo-700">
            Impact
          </h2>
          <p className="mt-2 text-indigo-800 font-medium">
            {project.impact}
          </p>
        </div>
      </section>
    </article>
  );
}
