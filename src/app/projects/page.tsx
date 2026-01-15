import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Barclays • Digital Letters Platform",
      description:
        "Led frontend development of a React + MFE platform integrated with AEM. Enabled digital delivery of regulatory and marketing letters.",
      impact: "$3M+ annual paper & ops cost saved",
      tech: ["React", "TypeScript", "Module Federation", "AEM", "REST APIs"],
      slug: "digital-letters",
    },
    {
      title: "OpenPhase • AI + LLPS Dataset Platform",
      description:
        "Built interactive protein visualization tools and condition-aware LLPS analysis modules.",
      impact: "Core open-source contribution used by 1000+ researchers",
      tech: ["Next.js", "3Dmol.js", "Python", "Docusaurus"],
      slug: "openphase-llps",
    },
    {
      title: "ICLR Blog • Fixing Long-Range Memory Failures in State Space Models",
      description:
        "A lightweight polarization trick stabilizes Mamba/SSM memory by enforcing both fast-resetting and non-decaying channels.",
      impact: "Substantially improves long-context retrieval with almost no extra compute or model complexity.",
      tech: ["Python", "PyTorch", "Mamba/S4"],
      externalLink: "https://iclr-blogposts.github.io/2026/blog/2026/fixing-bottlenecks-in-state-space-models/",
      slug: "state-space-model",
    },
    {
      title: "Barclays • Ad server library",
      description:
        "Built public library to render advertisements on barclays credit card website. By changing pageName and placement, the library can be applied any page anywhere to render ads",
      impact: "Core ad library used on 10+ pages in barclays credit card website",
      tech: ["Adobe Experience platform(AEM)", "library component", "Javascript", "React", "Ad", "Sas match"],
      slug: "ad-server",
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
