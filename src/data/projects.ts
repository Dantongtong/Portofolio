export const projects = {
  "digital-letters": {
    title: "Digital Letters Platform",
    description: "React micro-frontend system for digital delivery.",
    problem: "Paper letters were costly and slow.",
    solution: [
      "Designed micro-frontend architecture",
      "Correspond between multi micro frontends via webpack module federation",
      "Integrated REST APIs",
      "Built reusable React components",
    ],
    impact: "$3M+ annual cost savings in paper",
    tech: ["React", "JavaScript", "Module Federation", "Micro-FrontEnd", "Java", "Springboot"],
  },
  "openphase-llps": {
    title: "OpenPhase LLPS Platform",
    description: "AI-driven LLPS dataset and visualization tools.",
    problem: "LLPS data is fragmented and hard to explore.",
    solution: [
      "Built interactive protein viewer",
      "Designed condition-aware LLPS analysis",
      "Open-sourced dataset platform",
    ],
    impact: "Used by 1000+ researchers",
    tech: ["Next.js", "Python", "3Dmol.js"],
  },
  "state-space-model": {
    title: "ICLR Blog • Fixing Long-Range Memory Failures in State Space Models",
    description: "A lightweight polarization trick stabilizes Mamba/SSM memory by enforcing both fast-resetting and non-decaying channels.",
    impact: "Substantially improves long-context retrieval with almost no extra compute or model complexity.",
    tech: ["Python", "PyTorch", "Mamba/S4"],
    problem: "",
    solution:[
        "https://iclr-blogposts.github.io/2026/blog/2026/fixing-bottlenecks-in-state-space-models/"
    ],
    externalLink: "https://iclr-blogposts.github.io/2026/blog/2026/fixing-bottlenecks-in-state-space-models/",
  },
  "ad-server": {
    title: "Barclays • Ad server library",
    description: "Built public library to render advertisements on barclays credit card website. By changing pageName and placement, the library can be applied any page anywhere to render ads",
    impact: "Core ad library used on 10+ pages in barclays credit card website.",
    tech: ["Sas match", "Adobe Experience platform(AEM)", "Ad", "library component", "Javascript", "React"],
    problem: "",
    solution:[
        "Implemented a new library to render ad on required page"
    ]
  }
} as const;

export type ProjectSlug = keyof typeof projects;
