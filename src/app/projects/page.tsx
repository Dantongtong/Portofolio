import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Barclays • Digital Letters Platform",
      description:
        "Led frontend development of a React + MFE platform integrated with AEM. Enabled digital delivery of regulatory and marketing letters.",
      impact: "$3M+ annual paper & ops cost saved",
      tech: ["React", "TypeScript", "Module Federation", "AEM", "REST APIs"],
    },
    {
      title: "OpenPhase • AI + LLPS Dataset Platform",
      description:
        "Built interactive protein visualization tools and condition-aware LLPS analysis modules.",
      impact: "Core open-source contribution used by 1000+ researchers",
      tech: ["Next.js", "3Dmol.js", "Python", "Docusaurus"],
    },
    {
      title: "Interactive Job Board",
      description:
        "Built full-stack job board with pagination, infinite scroll, and server caching.",
      impact: "10k+ records rendered efficiently",
      tech: ["React", "Next.js", "SWR", "Tailwind"],
    },
  ];

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
